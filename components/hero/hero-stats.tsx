const stats = [
  {
    value: "150+",
    label: "Businesses",
  },
  {
    value: "50+",
    label: "Years",
  },
  {
    value: "Prime",
    label: "Location",
  },
  {
    value: "Metro",
    label: "Nearby",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-12 md:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="text-4xl font-medium tracking-tight">
            {item.value}
          </h2>

          <p className="mt-3 text-neutral-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}