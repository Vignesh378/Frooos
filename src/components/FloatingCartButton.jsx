import { forwardRef } from "react";
import { ShoppingCart } from "lucide-react";

const FloatingCartButton = forwardRef(({ count, onClick }, ref) => (
  <button
    ref={ref}
    type="button"
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-500 transition-transform duration-300 hover:-translate-y-1 hover:bg-slate-800"
  >
    <ShoppingCart className="h-5 w-5" />
    <span>{count}</span>
  </button>
));

FloatingCartButton.displayName = "FloatingCartButton";

export default FloatingCartButton;

