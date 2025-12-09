//Sanity
import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/sanity/schemas/portableText/portableTextComponents";

import { Prompt } from "@/types/sanity";
//icons
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";

interface DecryptedInputs {
  [key: string]: any;
}

interface PreviousInputData {
  decryptedUserInput?: DecryptedInputs;
  createdAt?: string;
}

export default function TextAreaForm({
  prompts,
}: {
  courseSlug: string;
  exerciseSlug: string;
  prompts: Prompt[];
}) {
  return (
    <div>
      <section>
        {prompts.map((prompt, index) => (
          <div key={prompt._key} className="flex flex-col items-center">
            <div className="my-6 w-full rounded-lg border-2 border-emerald-700 p-4">
              <h5 className="font-semibold">{prompt.title}</h5>
              <div className="text-sky-800">
                <PortableText
                  value={prompt.instructions}
                  components={portableTextComponents}
                />
              </div>
            </div>
            {/* <ArrowLongDownIcon className="h-12 w-12 text-sky-500" /> */}
            {prompts.length - 1 > index ? (
              <ArrowLongDownIcon className="h-12 w-12 text-sky-500" />
            ) : null}
          </div>
        ))}
      </section>
    </div>
  );
}
