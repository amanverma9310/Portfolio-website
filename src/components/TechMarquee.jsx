import { marqueeSkills } from "../data/skills";

export default function TechMarquee() {
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#0a0b0d] py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0b0d] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0b0d] to-transparent z-10" />

      <div className="flex w-max animate-marquee">
        {items.map(({ name, Icon, color }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex flex-col items-center gap-2 px-8"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10"
              style={{ backgroundColor: "#0f1114" }}
            >
              <Icon size={24} color={color} />
            </div>
            <span className="text-xs text-white/50">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
