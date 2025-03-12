"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          company: data.company,
          objective: data.projectDetails,
          isCourseUser: false
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      router.push("/contact/success");
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  });

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
        <div className="mx-auto max-w-2xl text-center" data-aos="zoom-y-out">
          <h1 className="h2 ">
            Get in Touch with Our AI Solution Experts Today
          </h1>
          <p className="mt-2 text-xl leading-8 text-gray-600 ">
            Unlock the Power of AI for Your Business with SiliconMind AI
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact/success"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div data-aos="zoom-y-out" data-aos-delay="100">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <input
                {...register("firstName", {
                  required: { value: true, message: "First name is required" },
                })}
                type="text"
                id="firstName"
                autoComplete="given-name"
                className=" mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName && (
                <ErrorMessage>
                  {errors.firstName.message as string}
                </ErrorMessage>
              )}
            </div>
            <div data-aos="zoom-y-out" data-aos-delay="150">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>

              <input
                {...register("lastName", {
                  required: { value: true, message: "Last name is required" },
                })}
                type="text"
                id="lastName"
                autoComplete="family-name"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.lastName && (
                <ErrorMessage>{errors.lastName.message as string}</ErrorMessage>
              )}
            </div>
            <div
              className="sm:col-span-2"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>

              <input
                {...register("company", {
                  required: {
                    value: true,
                    message: "Company name is required",
                  },
                  maxLength: {
                    value: 200,
                    message: "Must be less than 200 characters.",
                  },
                })}
                type="text"
                id="company"
                autoComplete="organization"
                className=" mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.company && (
                <ErrorMessage>{errors.company.message as string}</ErrorMessage>
              )}
            </div>
            <div
              className="sm:col-span-2"
              data-aos="zoom-y-out"
              data-aos-delay="200"
            >
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>

              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "A contact email is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email",
                  },
                })}
                type="email"
                id="email"
                autoComplete="email"
                className=" mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message as string}</ErrorMessage>
              )}
            </div>
            <div
              className="sm:col-span-2"
              data-aos="zoom-y-out"
              data-aos-delay="250"
            >
              <label
                htmlFor="projectDetails"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Project Details
              </label>
              <textarea
                {...register("projectDetails", {
                  required: {
                    value: true,
                    message: "Project details is required",
                  },
                  minLength: {
                    value: 10,
                    message: "Must be more than 10 characters",
                  },
                  maxLength: {
                    value: 2000,
                    message: "Must be less than 2000 characters",
                  },
                })}
                rows={4}
                id="projectDetails"
                className=" mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
              {errors.projectDetails && (
                <ErrorMessage>
                  {errors.projectDetails.message as string}
                </ErrorMessage>
              )}
            </div>
          </div>
          <button
            type="submit"
            data-aos="zoom-y-out"
            data-aos-delay="250"
            className=" mt-10 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </form>
      </div>
    </section>
  );
}

function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-4 text-sm font-semibold leading-6 text-red-600">
      {children}
    </span>
  );
}
