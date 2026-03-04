"use client";

export default function MobileCTA() {

  return (

    <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur border-t border-zinc-800 p-4 flex gap-4 z-50">

      <a
        href="/cv.pdf"
        className="
          flex-1
          text-center
          py-3
          rounded-md
          bg-gradient-to-r
          from-blue-500
          to-blue-700
          font-medium
        "
      >
        Download CV
      </a>

      <a
        href="https://linkedin.com"
        className="
          flex-1
          text-center
          py-3
          border border-zinc-700
          rounded-md
        "
      >
        LinkedIn
      </a>

    </div>

  );
}