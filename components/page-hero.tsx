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
    <section className="relative isolate grain overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-cyan/20 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-brand-orange/10 blur-[110px]" />
      <div className="container-x relative pb-16 pt-36 lg:pb-20 lg:pt-44">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">{subtitle}</p>
      </div>
    </section>
  );
}
