import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animations";

const toneStyles = {
  amber: {
    panelBg: "bg-[#fff9df]",
    glowPrimary: "bg-amber-200/60",
    glowSecondary: "bg-amber-100/60",
    shadow: "shadow-[0_40px_70px_rgba(255,220,150,0.35)]",
    hoverShadow: "hover:shadow-[0_45px_80px_rgba(240,200,140,0.45)]",
  },
  rose: {
    panelBg: "bg-[#ffe8f3]",
    glowPrimary: "bg-rose-200/65",
    glowSecondary: "bg-rose-100/55",
    shadow: "shadow-[0_40px_70px_rgba(255,180,210,0.35)]",
    hoverShadow: "hover:shadow-[0_45px_82px_rgba(255,150,200,0.45)]",
  },
  violet: {
    panelBg: "bg-[#f3ecff]",
    glowPrimary: "bg-violet-200/60",
    glowSecondary: "bg-indigo-200/55",
    shadow: "shadow-[0_40px_70px_rgba(190,180,255,0.32)]",
    hoverShadow: "hover:shadow-[0_45px_82px_rgba(170,160,255,0.45)]",
  },
};

function BestSellersSection({
  products,
  onAddToCart,
  heading = "Out Best selling product on worldwide",
  description = "Perfect for a summer day when the sun is shining, don’t forget your mint leaves! Add your choice of spirit and enjoy!",
  accentTone = "amber",
}) {
  const tone = toneStyles[accentTone] ?? toneStyles.amber;

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-[3rem] bg-white px-6 py-16 shadow-[0_40px_90px_rgba(214,188,250,0.35)] ring-1 ring-slate-100 sm:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
          {heading}
        </h2>
        <p className="text-sm text-slate-600 sm:text-base">{description}</p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            whileHover={{ y: -12 }}
            className={`group relative flex flex-col gap-6 overflow-hidden rounded-[3rem] border border-white/40 ${tone.panelBg} p-10 text-left ${tone.shadow} transition-shadow duration-300 ${tone.hoverShadow}`}
          >
            <span className="pointer-events-none absolute inset-0 opacity-50">
              <span className={`absolute left-6 top-8 h-36 w-36 rounded-full ${tone.glowPrimary} blur-[70px]`} />
              <span className={`absolute right-10 bottom-10 h-24 w-24 rounded-full ${tone.glowSecondary} blur-[60px]`} />
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.85),transparent_60%)]" />
            </span>

            <div className="relative flex justify-center">
              <motion.img
                src={product.image}
                alt={product.name}
                className="h-[320px] w-auto rounded-lg object-contain drop-shadow-[0_42px_45px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-105 "
                transition={{ duration: 0.5, delay: index * 0.05 }}
              />
            </div>

            <div className="relative space-y-4">
              <div className="flex items-start justify-between text-slate-900">
                <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.12em]">
                  {product.name}
                </h3>
                <span className="text-lg font-semibold">${product.price}</span>
              </div>
              <p className="text-sm text-slate-600 sm:text-base">
                {product.description}
              </p>
            </div>

            <button
              type="button"
              onClick={(event) => onAddToCart(product, event)}
              className="relative mt-auto inline-flex h-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Add to Cart
            </button>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default BestSellersSection;
