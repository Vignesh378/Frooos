import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animations";

function SpotlightTestimonial({ testimonial }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-[2.5rem] bg-rose-100 p-10 text-rose-700 shadow-[0_30px_60px_rgba(244,143,177,0.35)] ring-1 ring-rose-200"
    >
      <p className="text-sm leading-relaxed">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 text-sm font-semibold">
        {testimonial.name}
        <span className="ml-2 font-normal text-rose-600">· {testimonial.role}</span>
      </div>
    </motion.section>
  );
}

export default SpotlightTestimonial;
