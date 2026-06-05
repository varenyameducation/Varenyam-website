export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-brand-teal text-white">
      <div className="container-x py-16 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
      </div>
    </section>
  );
}
