import Image, { StaticImageData } from "next/image";
import exampleImage from "public/images/heroImage.png";
import clientMeeting from "public/images/undraw_conversation.svg";
import requirementAnalysis from "public/images/undraw_segment_analysis.svg";
import preliminaryDesign from "public/images/undraw_our_solution.svg";
import clientApproval from "public/images/undraw_check.svg";
import chatbotDevelopment from "public/images/undraw_programming.svg";
import chatbotDebug from "public/images/undraw_chatbot_debug.svg";
import chatbotDellivery from "public/images/undraw_chat_bot.svg";
import clientSupport from "public/images/undraw_team_collaboration.svg";
import CtaBanner from "@/components/cta-banner";

const stages = [
  {
    title: "Initial Client Meeting",
    content:
      "At this stage, we hold a meeting with the client to understand their needs and objectives. Details such as the chatbot's purpose, desired features, the platform it will be implemented on and any specific client requirements are discussed.",
    image: clientMeeting,
  },
  {
    title: "Requirement Analysis",
    content:
      "A detailed analysis of the client's requirements is conducted to fully understand what is needed and how it can be achieved. This results in a document specifying the necessary information for development and integration.",
    image: requirementAnalysis,
  },
  {
    title: "Preliminary Chatbot Design",
    content:
      "A preliminary design of the chatbot is created. This includes a flowchart for the chatbot's conversation flow, defining the chatbot's responses, and tasks it will perform at each event.",
    image: preliminaryDesign,
  },
  {
    title: "Review and Approval of Design by Client",
    content:
      "The preliminary chatbot design is presented for review and approval. Modifications are made as needed.",
    image: clientApproval,
  },
  {
    title: "Chatbot Development",
    content: "Once the design is approved, chatbot development begins.",
    image: chatbotDevelopment,
  },
  {
    title: "Review and Adjustments",
    content:
      "Comprehensive testing of the chatbot is conducted to ensure it functions correctly and adheres to the approved workflow. Based on test results, necessary adjustments are made.",
    image: chatbotDebug,
  },
  {
    title: "Delivery and Integration of Chatbot",
    content:
      "Once the chatbot has passed all tests and required adjustments have been made, it is delivered to the client and integrated into their system.",
    image: chatbotDellivery,
  },
  {
    title: "Client Training and Support",
    content:
      "Client training on how to use and manage the chatbot is provided. Additionally, post-sales support is offered to resolve any issues that may arise.",
    image: clientSupport,
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-gradient-to-b mx-auto max-w-6xl from-gray-100 to-white">
        <div className="isolate flex flex-col gap-12 bg-white px-6 py-24 sm:py-32 lg:px-8">
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
          <div className="mx-auto max-w-4xl text-center" data-aos="zoom-y-out">
            <h1 className="h2 ">Our Work Process</h1>
            <p className="mt-4 text-xl leading-8 tracking-wide text-gray-600 ">
              At SiliconMind AI, we harness the unmatched capabilities of
              language models to create state-of-the-art chatbots that deliver
              human-like interactions.
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-16 md:gap-8 lg:gap-14">
            {stages.map((stage, i) => (
              <ProcessStage
                key={i}
                title={stage.title}
                content={stage.content}
                index={i + 1}
                image={stage.image}
              />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

interface ProcessStageProps {
  title: string;
  content: string;
  image: string | StaticImageData;
  index: number;
}

function ProcessStage({
  title,
  content,
  image = exampleImage,
  index,
}: ProcessStageProps) {
  return (
    <div
      className={`flex md:h-80 lg:h-96 w-full gap-10 items-center justify-around ${
        index % 2 != 0 && "flex-row-reverse"
      }`}
      data-aos={index % 2 != 0 ? "fade-right" : "fade-left"}
    >
      <div className="flex max-w-xl flex-col gap-4 text-left">
        <h3 className="h3 text-2xl md:text-3xl">
          <span className="md:hidden bg-clip-text mr-3 text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {`${index}.`}
          </span>
          {title}
        </h3>
        <p className="text-left text-xl tracking-wide leading-8 text-gray-600 ">
          {content}
        </p>
      </div>
      <Image
        className="hidden md:block w-2/5"
        src={image}
        alt={`image stage ${index}`}
        width={400}
        height={350}
      />
    </div>
  );
}
