import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const secret = process.env.SIGNING_SECRET;
  if (!secret) return new Response("Missing secret", { status: 500 });

  const wh = new Webhook(secret);
  const body = await req.text();
  const headerPayload = await headers();

  const event = wh.verify(body, {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  }) as WebhookEvent;

  switch (event.type) {
    case "user.created": {
      const { id, email_addresses } = event.data;
      await prisma.user.upsert({
        where: { clerkId: id },
        update: {},
        create: {
          clerkId: id,
          email: email_addresses[0].email_address,
        },
      });
      break;
    }

    case "user.updated": {
      const { id, email_addresses } = event.data;
      await prisma.user.update({
        where: { clerkId: id },
        data: {
          email: email_addresses[0].email_address,
        },
      });
      break;
    }

    case "user.deleted": {
      const { id } = event.data;
      await prisma.user.delete({
        where: { clerkId: id },
      });
      break;
    }

    default:
      console.log(`Unhandled webhook event type: ${event.type}`);
  }

  return new Response("OK");
}
