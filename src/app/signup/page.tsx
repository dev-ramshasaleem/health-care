import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "@/src/components/auth/signup-form";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex text-3xl items-center justify-center">
            Create Account
          </CardTitle>

          <CardDescription className="flex  items-center justify-center">
            Create your Healthcare account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignupForm />

          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
