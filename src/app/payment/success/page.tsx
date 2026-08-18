import { CheckCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getPlan } from "@/lib/plans";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const plan = getPlan((await searchParams).plan);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <CheckCircle className="mx-auto h-20 w-20 text-green-500" />

        <h1 className="mt-6 text-3xl font-bold">Payment Successful!</h1>

        <p className="mt-4 text-gray-600">
          {plan ? (
            <>
              You're now subscribed to the{" "}
              <span className="font-semibold">{plan.name}</span> at ${plan.price}
              /month. A receipt is on its way to your inbox.
            </>
          ) : (
            <>
              Your subscription is active. A receipt is on its way to your
              inbox.
            </>
          )}
        </p>

        <Button
          asChild
          className="h-11 bg-black text-white px-8 hover:bg-gray-800 mt-6"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
