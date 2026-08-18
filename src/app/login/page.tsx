import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/src/components/auth/login-form";
import { getPlan } from "@/lib/plans";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const plan = getPlan((await searchParams).plan);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex text-3xl items-center justify-center">
            Welcome Back
          </CardTitle>

          <CardDescription className="flex  items-center justify-center">
            {plan
              ? `Login to continue with the ${plan.name}.`
              : "Login to your Healthcare account."}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm planId={plan?.id} />

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link
              href={plan ? `/signup?plan=${plan.id}` : "/signup"}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
