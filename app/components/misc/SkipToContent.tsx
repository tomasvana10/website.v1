"use client";
import Link from "next/link";

export default function SkipToContent() {
  return (
    <Link
      href="#about"
      onClick={() => document.getElementById("firstFocusableContent")?.focus()}
      className="absolute top-0 right-full z-50 focus:right-auto focus:bg-black focus:text-white focus:border-white focus:p-4">
      Skip to content
    </Link>
  );
}
