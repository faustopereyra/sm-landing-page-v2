interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon?: JSX.Element;
}

export default function FeatureCard({
  title,
  subtitle,
  icon,
}: FeatureCardProps) {
  return (
    <div className="relative flex flex-col h-full items-center p-6 bg-white rounded shadow-xl">
      <div className="flex items-center justify-center w-16 h-16 mt-1 mb-2 bg-blue-600 rounded-full">
        {icon}
      </div>
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
        {title}
      </h4>
      <p className="text-gray-600 text-center">{subtitle}</p>
    </div>
  );
}