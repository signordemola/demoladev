// app/admin/layout.tsx
import { auth } from "@/auth";
import AdminHeader from "@/components/auth/admin-header";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <section className="min-h-screen bg-gray-50 px-6">
      <div className="mx-auto max-w-7xl px-6">
        <AdminHeader />

        <main className="py-16">
          <div className="mt-10">{children}</div>
        </main>
      </div>
    </section>
  );
}
