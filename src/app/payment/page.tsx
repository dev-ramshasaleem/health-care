import { headers } from "next/headers";
import { redirect } from "next/navigation";

import PaymentForm from "@/src/components/payment-form";
import { auth } from "@/lib/auth";
import { getPlan } from "@/lib/plans";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const plan = getPlan((await searchParams).plan);

  // Unknown or missing plan, send them back to pick one.
  if (!plan) {
    redirect("/#price");
  }

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect(`/login?plan=${plan.id}`);
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-16">
      <PaymentForm
        planId={plan.id}
        planName={plan.name}
        price={plan.price}
        features={plan.features}
        email={session.user.email}
      />
    </main>
  );
}
