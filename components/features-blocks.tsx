import FeatureCard from "./ui/feature_card";
import { LiaLanguageSolid } from "react-icons/lia";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { IoMdInfinite } from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";

const IconsSetting = { size: "36px", color: "white" };

const FeatureData = [
  {
    title: "Be There 24/7",
    subtitle: "Chatbots ensure you're always online, ready to engage.",
    icon: <IoMdInfinite size={"48px"} color="white" />,
  },
  {
    title: "Smarter, Faster Support",
    subtitle: "Deliver faster and accurate answers",
    icon: <HiSparkles {...IconsSetting} />,
  },
  {
    title: "Break Barriers",
    subtitle: "Speaks your customers' language, no matter where they are.",
    icon: <LiaLanguageSolid {...IconsSetting} />,
  },
  {
    title: "Cost-Effective Growth",
    subtitle: "Boosts efficiency and saves you money.",
    icon: <TbReportMoney {...IconsSetting} />,
  },
  {
    title: "Workload Release",
    subtitle: "Automates tasks, frees your experts for what matters.",
    icon: <FaHandsHoldingCircle {...IconsSetting} />,
  },
  {
    title: "Reflect Your Brand",
    subtitle: "Personality and goals aligned with your brand.",
    icon: <RiCustomerService2Fill {...IconsSetting} />,
  },
];

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Revolutionizing your Business</h2>
            <p className="text-xl text-gray-600">
              Integrating chatbots into your business offers numerous benefits,
              which make them a game-changer for your operations.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {FeatureData.map((feature) => (
              <FeatureCard {...feature} key={feature.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
