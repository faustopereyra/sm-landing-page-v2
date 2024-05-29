import Image from "next/image";
import AImage from "/public/images/integration.png";

export default function Onboarding() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute right-3/4 transform-x-1/2 z-0 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-50">
        <div className="py-12 md:py-20 z-50">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4 relative">Tailored to your Needs</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              How does it work? Our approach is simple. You tell us your
              business goals and challenges, and we devise an AI solution
              specifically tailored to meet those needs.
            </p>
          </div>
        </div>
        <div className="pt-12 md:pt-20 z-50 relative">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 mb-4 relative">
              Simplify{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                AI Integration
              </span>{" "}
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              We handle the entire development process, from the initial design
              to the final deployment and even provide support to ensure your AI
              application is always running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
