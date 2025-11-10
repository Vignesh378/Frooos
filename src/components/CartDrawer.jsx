import { motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { formatCurrency } from "../utils/format";

function CartDrawer({ items, subtotal, onClose, onUpdateQuantity, onRemove }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[55] bg-slate-900/10 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-md flex-col overflow-hidden rounded-l-[2.5rem] bg-white shadow-[0_0_45px_rgba(203,213,225,0.65)] ring-1 ring-slate-100"
      >
        <div className="flex items-center justify-between bg-white/90 px-6 py-5 shadow-lg shadow-slate-200">
          <div>
            <h3 className="font-display text-2xl font-semibold text-slate-900">
              Your Cart
            </h3>
            <p className="text-sm text-slate-500">
              {items.length} {items.length === 1 ? "item" : "items"} selected
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto bg-white px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-slate-400">
              <ShoppingCart className="mb-3 h-12 w-12 text-rose-400" />
              <p className="text-sm">
                Your cart is feeling light. Add some fruity goodness!
              </p>
            </div>
          ) : (
            items.map((item) => (
              <motion.div
                key={item.name}
                layout
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-inner shadow-slate-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-2xl object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-rose-500">
                      {formatCurrency(item.price)}
                    </span>
                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.name, -1)}
                        className="h-7 w-7 rounded-full bg-white text-slate-600 shadow hover:bg-slate-200"
                      >
                        –
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.name, 1)}
                        className="h-7 w-7 rounded-full bg-white text-slate-600 shadow hover:bg-slate-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.name)}
                  className="self-start rounded-full bg-slate-100 p-2 text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:bg-slate-200"
                >
                  Remove
                </button>
              </motion.div>
            ))
          )}
        </div>

        <div className="space-y-4 border-t border-slate-200 bg-white px-6 py-5 shadow-inner shadow-slate-100">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900">
              {formatCurrency(subtotal)}
            </span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-slate-900 py-3 font-semibold text-white shadow-lg shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
          >
            Checkout
          </button>
            <p className="text-center text-xs text-slate-400">
            Secure checkout · Free delivery over $25
          </p>
        </div>
      </motion.aside>
    </>
  );
}

export default CartDrawer;

