"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spotlight } from "./ui/spotlight-new";
import { UserButton, useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Spotlight
        width={800}
        height={1500}
        duration={8}
        xOffset={7}
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%,   rgba(59,130,246,0.15) 50%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(6,182,212,0.2) 0%, transparent 100%)"
      />
      <header className="relative z-50 mt-2  mx-auto max-w-5xl rounded-lg border bg-white shadow-md border-white/10">
        <div className="flex items-center justify-between px-3 py-1">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-600">Care</span>
            <span className="text-black">Plus</span>
          </h1>
          <nav className="flex gap-4  items-center ">
            <Link href="/" className="text-black-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-black-700 hover:text-blue-600">
              About
            </Link>

            <Link
              href="/feature"
              className="text-black-700 hover:text-blue-600"
            >
              Features
            </Link>

            <Link href="/price" className="text-black-700 hover:text-blue-600">
              Pricing
            </Link>

            <Link href="/blogs" className="text-black-700 hover:text-blue-600">
              Blogs
            </Link>
          </nav>
          <div className="flex items-center justify-center md:justify-end gap-4">
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="bg-black text-white py-4 px-4"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
