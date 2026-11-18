import { DecoDivider, FanMotif } from "./Ornaments";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  id,
  intro,
}: {
  eyebrow: string;
  title: string;
  id: string;
  intro?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
      <FanMotif className="mx-auto mb-4" />
      <p className="deco-eyebrow">{eyebrow}</p>
      <h2 id={id} className="deco-heading mt-4 text-4xl text-gold-metal sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <DecoDivider className="mt-6" />
      {intro && <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-silver sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
