import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animations";

function ShowcaseSection({ products, highlights, partnerLogos, onAddToCart }) {
  return (
    <motion.section
      id="shop"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-[3rem] bg-white px-6 py-16 shadow-[0_35px_85px_rgba(203,213,225,0.55)] ring-1 ring-slate-100 sm:px-10 lg:px-14"
    >
      <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="font-display text-[clamp(2.2rem,4vw,3rem)] font-semibold text-slate-900">
            Live fresh, the <span className="italic text-rose-500">Frooos</span> way
            </h2>
            <p className="max-w-lg text-base text-slate-600">
            Stay chill with Frooos crafted bowls and juices made to refresh your day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                whileHover={{ y: -12 }}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-[2.75rem] border border-slate-100 bg-white/80 p-8 shadow-[0_32px_65px_rgba(203,213,225,0.45)] transition-shadow duration-300 hover:shadow-[0_40px_80px_rgba(203,213,225,0.55)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <span className="absolute -right-14 top-8 h-52 w-52 rounded-full bg-rose-200/55 blur-[90px]" />
                  <span className="absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-purple-200/40 blur-[95px]" />
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_60%)]" />
                </div>

                <div className="relative flex flex-col gap-3">
                  <div className="relative mx-auto flex h-[220px] w-full items-center justify-center rounded-[2.25rem] bg-[radial-gradient(circle_at_center,#fdf2f8_0%,#fef9c3_45%,transparent_75%)]">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="h-[260px] w-auto object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:translate-y-[-10px]"
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-slate-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600">{product.description}</p>
                </div>

                <div className="relative flex items-center justify-between text-slate-900">
                  <span className="text-lg font-semibold">${product.price}</span>
                  <button
                    type="button"
                    onClick={(event) => onAddToCart(product, event)}
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12">
          <div className="space-y-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[2.5rem] border border-slate-100 bg-white/90 px-6 py-5 shadow-[0_18px_38px_rgba(203,213,225,0.35)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {item.icon}
                </span>
                <div className="space-y-1 text-left">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
                <span className="text-slate-300">↗</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-[2.5rem] border border-slate-100 bg-white/80 px-6 py-8 text-center shadow-[0_25px_45px_rgba(203,213,225,0.35)]">
            <p className="font-display text-2xl font-semibold text-slate-900">
              Out Best selling product on <span className="text-rose-500">worldwide</span>
            </p>
            <p className="text-sm text-slate-600">
              Perfect for a summer day when the sun is shining, don’t forget your mint leaves! Add your choice of spirit and enjoy!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              {partnerLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ShowcaseSection;
