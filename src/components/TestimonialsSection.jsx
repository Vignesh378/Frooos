import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animations";

function TestimonialsSection({ testimonials }) {
  return (
    <motion.section
      id="testimonials"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-[2.5rem] bg-white p-10 shadow-[0_30px_60px_rgba(203,213,225,0.55)] ring-1 ring-slate-100"
    >
      <div className="space-y-4 md:text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-rose-400">
          Testimonials
        </p>
        <h2 className="font-display text-3xl font-semibold text-slate-900">
          Loved by customers everywhere.
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <motion.figure
            key={testimonial.name}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex h-full flex-col gap-4 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-inner shadow-slate-100"
          >
            <div className="flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <figcaption className="font-semibold text-slate-900">
                  {testimonial.name}
                </figcaption>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <blockquote className="text-sm text-slate-600">
              “{testimonial.quote}”
            </blockquote>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}

export default TestimonialsSection;

