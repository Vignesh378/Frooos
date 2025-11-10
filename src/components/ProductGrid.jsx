import { motion } from "framer-motion";
import { cardHover, sectionVariants } from "../utils/animations";
import { formatCurrency } from "../utils/format";

function ProductGrid({ id, title, description, products, onAddToCart }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-[2.5rem] bg-white p-10 shadow-[0_30px_60px_rgba(203,213,225,0.55)] ring-1 ring-slate-100"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.32em] text-rose-400">
            {title}
          </p>
          <h2 className="font-display text-3xl font-semibold text-slate-900">
            {description}
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <motion.article
            key={product.id}
            {...cardHover}
            className="group flex flex-col rounded-[2rem] border border-slate-100 bg-white p-6 shadow-inner shadow-slate-100 transition-transform"
          >
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100/60">
              <motion.img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 space-y-3">
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600">{product.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900">
                  {formatCurrency(product.price)}
                </span>
                <span className="text-xl">{product.icon}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={(event) => onAddToCart(product, event)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-slate-400 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Add to Cart
            </button>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default ProductGrid;

