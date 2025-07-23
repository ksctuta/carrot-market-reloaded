"use client";

import Link from "next/link";

export default function TailwindSampleList() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
        <div className="group flex flex-col">
          <Link
            href="/tailwind-sample/01_darkmode"
            className="text-gray-500 font-semibold hover:text-cyan-500"
          >
            01_darkmode
          </Link>
          <Link
            href="/tailwind-sample/02_modifiers"
            className="text-gray-500 font-semibold hover:text-cyan-500"
          >
            02_modifiers
          </Link>
          <Link
            href="/tailwind-sample/03_responsive1"
            className="text-gray-500 font-semibold hover:text-cyan-500"
          >
            03_responsive1
          </Link>
          <Link
            href="/tailwind-sample/04_gradation"
            className="text-gray-500 font-semibold hover:text-cyan-500"
          >
            04_gradation
          </Link>
          <Link
            href="/tailwind-sample/05_invalid"
            className="text-gray-500 font-semibold hover:text-cyan-500"
          >
            05_invalid
          </Link>
          <Link
            href="/tailwind-sample/06_state_modifiers"
            className="text-gray-500 font-semibold hover:text-cyan-500"
          >
            06_state_modifiers
          </Link>
          <Link
            href="/tailwind-sample/07_list_animations"
            className="text-gray-500 font-semibold hover:text-cyan-500"
          >
            07_list_animations
          </Link>
          <Link
            href="/tailwind-sample/08_group_modifiers"
            className="text-gray-500 font-semibold hover:text-cyan-500"
          >
            08_group_modifiers
          </Link>
        </div>
      </div>
    </main>
  );
}
