import { motion, useTransform } from "framer-motion";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { heroBackgroundVariants } from "../utils/animations";
import drgonfruit from "../assets/dragon-image.png"
function Hero({ heroParallax, heroContent }) {
  const plateFloat = {
    initial: { y: 0 },
    animate: {
      y: [0, -16, 0],
      transition: { repeat: Infinity, duration: 5.2, ease: "easeInOut" },
    },
  };

  const plateScrollShift = useTransform(heroParallax, (value) => value * -0.25);
  const textScrollShift = useTransform(heroParallax, (value) => value * 0.18);

  const headingParts = heroContent.heading
    ? heroContent.heading.split("·").map((part) => part.trim())
    : [heroContent.heading ?? ""];
  const leftHeading = headingParts[0] ?? heroContent.heading ?? "";
  const rightHeading = headingParts[1] ?? "";

  const socialLinks = [
    { href: "#", Icon: Facebook, label: "Facebook" },
    { href: "#", Icon: Twitter, label: "Twitter" },
    { href: "#", Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section
      id="home"
      className="relative mt-10 overflow-hidden rounded-[3.25rem] bg-white px-6 py-20 shadow-[0_45px_95px_rgba(148,163,184,0.35)] ring-1 ring-slate-100 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          variants={heroBackgroundVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-y-[-35%] left-1/2 h-[160%] w-[165%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle_at_center,#f4f4f5_5%,#e5e7eb_45%,transparent_78%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(244,114,182,0.18),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(192,132,252,0.15),transparent_60%),radial-gradient(circle_at_55%_90%,rgba(251,191,36,0.12),transparent_62%)]" />
      </div>

      <div className="relative flex flex-col gap-16">
        <div className="relative grid items-center gap-12 text-center lg:grid-cols-[1fr_auto_1fr] lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 flex flex-col items-center gap-6 text-slate-700 lg:order-1 lg:items-start"
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-rose-500 shadow-sm shadow-rose-100 backdrop-blur">
              <span className="text-lg">🍓</span>
              Sports+
            </span>
            <h1 className="font-display text-[clamp(2.75rem,6vw,4.6rem)] font-semibold leading-[1.07] text-slate-900">
              {leftHeading}
            </h1>
            <p className="max-w-md text-base text-slate-600 lg:text-lg">
              {heroContent.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href={heroContent.primaryCta.href}
                className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(15,23,42,0.3)]"
              >
                {heroContent.primaryCta.label}
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="rounded-full border border-slate-200/80 bg-white px-8 py-3 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:text-slate-900"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
          </motion.div>

          <div className="order-1 flex justify-center lg:order-2">
            <motion.span
              style={{ x: textScrollShift }}
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[clamp(3.5rem,12vw,8rem)] font-semibold uppercase tracking-[0.5em] text-slate-200/70"
            >
              {heroContent.backgroundText}
            </motion.span>
            <motion.div
              style={{ x: plateScrollShift }}
              variants={plateFloat}
              initial="initial"
              animate="animate"
              className="relative flex h-full items-center justify-center"
            >
              <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full bg-gradient-to-br from-white via-rose-50 to-violet-100 shadow-[0_55px_110px_rgba(148,163,184,0.42)]">
                <span className="pointer-events-none absolute -top-16 left-12 h-40 w-40 rounded-full bg-rose-200/45 blur-[80px]" />
                <span className="pointer-events-none absolute bottom-6 right-6 h-32 w-32 rounded-full bg-indigo-200/35 blur-[70px]" />
                <motion.img
                  src={drgonfruit}
                  alt={heroContent.heading}
                  style={{ rotate: -8 }}
                  whileHover={{ rotate: 4, y: -18 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="h-[420px] w-auto object-contain drop-shadow-[0_45px_45px_rgba(244,114,182,0.32)]"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="order-3 flex flex-col items-center gap-6 text-slate-700 lg:items-end"
          >
            {rightHeading ? (
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.08] text-slate-900">
                {rightHeading}
              </h2>
            ) : null}
            <p className="max-w-xs text-sm text-slate-600 lg:max-w-sm lg:text-base">
              {heroContent.description}
            </p>
            <div className="flex items-center gap-3 text-slate-600">
              <span className="text-xs uppercase tracking-[0.32em] text-slate-500">
                Follow
              </span>
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:text-slate-900"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-4 rounded-3xl border border-white/60 bg-white/70 px-6 py-6 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur sm:flex-row sm:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Top 60% company partner · our brand
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-500/80">
            <span>Coca-Cola</span>
            <span>Kellogg&apos;s</span>
            <span>Nestlé</span>
            <span>Nutella</span>
            <span>KFC</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

