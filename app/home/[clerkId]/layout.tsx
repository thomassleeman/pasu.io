import Footer from "@/components/ui/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mb-auto sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col gap-y-12 lg:gap-y-16">{children}</div>
      <Footer />
    </div>
  );
}
