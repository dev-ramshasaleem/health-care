"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CircleCheck, CreditCard, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  planId: string;
  planName: string;
  price: number;
  features: string[];
  email: string;
};

export default function PaymentForm({
  planId,
  planName,
  price,
  features,
  email,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    router.push(`/payment/success?plan=${planId}`);
  }

  return (
    <div className="mx-auto grid w-full max-w-4xl gap-6 md:grid-cols-2">
      {/* Order summary */}
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-black">
            Order Summary
          </CardTitle>
          <CardDescription>You're subscribing to {planName}.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-end justify-between border-b pb-4">
            <span className="font-semibold text-black">{planName}</span>
            <span className="text-2xl font-bold text-blue-600">
              ${price}
              <span className="text-base font-normal text-gray-500">
                /month
              </span>
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <span className="font-semibold text-black">Total due today</span>
            <span className="text-xl font-bold text-black">${price}.00</span>
          </div>
        </CardContent>
      </Card>

      {/* Payment details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-black">
            <CreditCard className="h-6 w-6 text-blue-500" />
            Payment Details
          </CardTitle>
          <CardDescription>Billing to {email}</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                inputMode="numeric"
                placeholder="4242 4242 4242 4242"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" inputMode="numeric" placeholder="123" required />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full bg-black text-lg text-white hover:bg-gray-800"
            >
              {loading ? "Processing..." : `Pay $${price}`}
            </Button>

            <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Lock className="h-3 w-3" />
              This is a demo checkout. No real payment is taken.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
