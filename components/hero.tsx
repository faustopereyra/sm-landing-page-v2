"use client";
import Link from "next/link";
import Image from "next/image";
import heroImage from "public/images/heroImage.png";

export default function Hero() {
  const openChatbot = () => {
    //@ts-ignore
    window.botpressWebChat.sendEvent({ type: "toggle" });
  };
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0  -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1172" cy="238" r="138" />
            <circle cx="231" cy="113" r="90" />
            <circle cx="165" cy="343" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-[72px] lg:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-center md:text-left"
              data-aos="zoom-y-out"
            >
              Revolutionize Your Business with Cutting-Edge{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                AI Chatbots
              </span>
            </h1>
            <div className="flex flex-col items-center md:items-start">
              {" "}
              {/* Alinea los elementos en el centro en dispositivos pequeños y a la izquierda en dispositivos medianos y más grandes */}
              <p
                className="text-xl text-gray-600 mb-8 text-center md:text-left"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Smart AI Solutions for Smarter Business Operations
              </p>
              <div className="max-w-xs sm:max-w-none flex flex-col md:flex-row items-start">
                {" "}
                {/* Alinea los elementos a la izquierda en dispositivos medianos y más grandes */}
                <div>
                  <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 md:mb-0 md:w-auto min-w-48"
                    href="/contact"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Get started today
                  </Link>
                </div>
                <div
                  onClick={openChatbot}
                  className="btn text-white bg-gray-900 hover:bg-gray-800 w-full md:w-auto md:ml-4 min-w-48 cursor-pointer"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Try our demo
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <Image
            data-aos="zoom-y-out"
            className="mx-auto hidden md:block pointer-events-none"
            src={heroImage}
            alt="hero image"
            width={600}
            height={500}
          />
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
