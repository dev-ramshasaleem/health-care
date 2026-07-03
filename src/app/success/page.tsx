import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <CheckCircle className="mx-auto h-20 w-20 text-green-500" />

        <h1 className="mt-6 text-3xl font-bold">Demo Booked Successfully!</h1>

        <p className="mt-4 text-gray-600">
          Thank you for booking a demo with
          <span className="font-semibold">CarePlus</span>. Our team will contact
          you shortly to confirm your appointment.
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
