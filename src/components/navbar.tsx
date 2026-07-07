"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spotlight } from "./ui/spotlight-new";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      {/* <Spotlight
        width={800}
        height={1000}
        duration={8}
        xOffset={7}
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%,   rgba(59,130,246,0.15) 50%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(6,182,212,0.2) 0%, transparent 100%)"
      /> */}
      <header className="relative z-50 mt-2  mx-auto max-w-5xl rounded-lg border bg-white shadow-md border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Image src="/Plus.png" alt="icon" width={25} height={25} />

            <h1 className="text-3xl font-bold">
              <span className="text-blue-400">Care</span>
              <span className="text-black">Plus</span>
            </h1>
          </div>
          <nav className="hidden md:flex justify-center gap-4 font-semibold">
            <Link href="/" className="text-black-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="#about" className="text-black-700 hover:text-blue-600">
              About
            </Link>

            <Link
              href="#features"
              className="text-black-700 hover:text-blue-600"
            >
              Features
            </Link>

            <Link href="#price" className="text-black-700 hover:text-blue-600">
              Pricing
            </Link>

            <Link href="#blogs" className="text-black-700 hover:text-blue-600">
              Blogs
            </Link>
          </nav>
          <div className="flex justify-end items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 md:hidden"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
                <div className="flex flex-col p-6 gap-4">
                  <Link href="#about">About</Link>
                  <Link href="#features">Features</Link>
                  <Link href="#price">Pricing</Link>
                  <Link href="#blogs">Blogs</Link>
                </div>
              </div>
            )}
            <div className="flex items-center justify-center md:justify-end gap-4">
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="px-3 py-2 md:px-4 md:py-4 bg-black text-white"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
