import { motion } from "framer-motion";
import { LogIn, X } from "lucide-react";

function LoginModal({ onClose, onSubmit, isLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/10 backdrop-blur"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-full max-w-md rounded-[2.5rem] bg-white p-8 shadow-[0_35px_60px_rgba(203,213,225,0.65)] ring-1 ring-slate-100 backdrop-blur-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
            <LogIn className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-semibold text-slate-900">
              {isLoggedIn ? "Stay logged in" : "Welcome back to Frooos"}
            </h3>
            <p className="text-sm text-slate-600">
              Access your favorite blends, track your rewards, and checkout faster.
            </p>
          </div>
          <form
            className="space-y-4 text-left"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@frooos.com"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition-all duration-300 focus:border-slate-400 focus:ring-2 focus:ring-rose-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition-all duration-300 focus:border-slate-400 focus:ring-2 focus:ring-rose-200"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 py-3 font-semibold text-white shadow-lg shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
            >
              {isLoggedIn ? "Stay Signed In" : "Login"}
            </button>
          </form>
          <button
            type="button"
            className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 transition hover:text-slate-700"
            onClick={onClose}
          >
            Continue as guest
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default LoginModal;

