import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animations";

function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="grid gap-10 rounded-[2.5rem] bg-white p-10 shadow-[0_30px_60px_rgba(203,213,225,0.55)] ring-1 ring-slate-100 md:grid-cols-2 md:items-center"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-rose-400">
          Our Story
        </p>
        <h2 className="font-display text-3xl font-semibold text-slate-900">
          From orchard sunrise to your chilled bottle.
        </h2>
        <p className="text-sm text-slate-600">
          Frooos started as a micro-press on the coast, blending tropical fruit
          crates for friends and local cafés. Today we source directly from
          regenerative farms, cold-press in small batches, and deliver a
          flavor-first experience that preserves every vitamin and whisper of
          sunshine.
        </p>
        <p className="text-sm text-slate-600">
          Whether you crave a citrus wake-up call or a berry bowl for brunch,
          our mission is simple: keep you energized, glowing, and inspired to
          celebrate nature’s sweetest offerings.
        </p>
      </div>
      <motion.img
        whileHover={{ scale: 1.02 }}
        src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80"
        alt="Pouring fresh juice"
        className="h-full w-full rounded-[2rem] object-cover shadow-[0_25px_70px_rgba(203,213,225,0.55)]"
      />
    </motion.section>
  );
}

export default AboutSection;

