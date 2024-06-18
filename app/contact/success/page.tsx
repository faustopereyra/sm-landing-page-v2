"use client";

import Link from "next/link";

export const metadata = {
  title: "SiliconMind AI - Contact",
  description: "SiliconMind AI success registration page",
};

export default function FormSuccessPage() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          className="mx-auto max-w-2xl text-center"
          data-aos="zoom-y-out"
          data-aos-delay="500"
        >
          <h1 className="h2 ">Thank you so much. We'll be in touch soon!</h1>
          <p className="mt-4 text-xl leading-8 text-gray-600 ">
            Best regard, SiliconMind AI's Team
          </p>
          <Link
            href={"/"}
            className="btn mt-16 text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 md:mb-0 md:w-auto min-w-48"
          >
            Go to HomePage
          </Link>
        </div>
      </div>
    </section>
  );
}
