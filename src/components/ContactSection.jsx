import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animations";

function ContactSection() {
  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="grid gap-10 rounded-[2.5rem] bg-white p-10 shadow-[0_30px_60px_rgba(203,213,225,0.55)] ring-1 ring-slate-100 md:grid-cols-2 md:items-center"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-rose-400">
          Let’s Talk
        </p>
        <h2 className="font-display text-3xl font-semibold text-slate-900">
          Planning an event or need a custom fruit flight?
        </h2>
        <p className="text-sm text-slate-600">
          Share the details and our fruit sommeliers will curate a tasting that
          matches your vibe. From corporate lounges to wedding brunch bars, we
          love bringing a splash of color to every occasion.
        </p>
      </div>
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-rose-200"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-rose-200"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
            Message
          </label>
          <textarea
            required
            rows={4}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-rose-200"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}

export default ContactSection;

