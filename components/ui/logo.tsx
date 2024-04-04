import Link from "next/link";

interface LogoProps {
  small?: boolean;
}

export default function Logo({ small }: LogoProps) {

  return (
    <Link href="/" className="block" aria-label="Silicon Mind AI">
      <span className={`font-medium ${small ? "text-xl" : "text-2xl"} tracking-[0.18rem] cursor-pointer`}>
        SiliconMind AI
      </span>
    </Link>
  );
}
