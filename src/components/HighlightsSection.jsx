import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animations";

const toneStyles = {
  rose: "bg-rose-100 text-rose-700",
  blue: "bg-sky-100 text-sky-700",
};

function HighlightsSection({ content }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid gap-10 rounded-[2.5rem] bg-white p-10 shadow-[0_30px_60px_rgba(203,213,225,0.55)] ring-1 ring-slate-100 md:grid-cols-[1.1fr_0.9fr] md:items-start"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
          Why choose Frooos
        </p>
        <h2 className="font-display text-3xl font-semibold text-slate-900">
          {content.heading}
        </h2>
        <ul className="space-y-3 text-sm text-slate-600">
          {content.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="text-lg">✔</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-4">
        {content.cards.map((card) => (
          <div
            key={card.title}
            className={`rounded-2xl px-6 py-5 shadow-inner shadow-slate-200 ${
              toneStyles[card.tone] ?? "bg-slate-50 text-slate-700"
            }`}
          >
            <h3 className="font-display text-lg font-semibold">{card.title}</h3>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default HighlightsSection;
