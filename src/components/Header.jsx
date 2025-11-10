import { motion } from "framer-motion";
import { LogIn, LogOut, Search, Heart, User, ShoppingCart } from "lucide-react";

function Header({
  logoSrc,
  navLinks,
  cartCount,
  isLoggedIn,
  onLinkClick,
  onToggleCart,
  navCartRef,
}) {
  return (
    <header className="sticky top-4 z-50 flex justify-center px-4 py-2">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full max-w-7xl items-center justify-between rounded-full bg-white/90 px-6 py-3 shadow-[0_18px_45px_rgba(148,163,184,0.35)] backdrop-blur-xl ring-1 ring-slate-100"
      >
        <div className="flex items-center gap-3">
          <motion.img
            src={logoSrc}
            alt="Frooos logo"
            className="h-12 w-auto"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="hidden flex-col sm:flex">
            <span className="font-display text-lg font-semibold">Frooos</span>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Freshness Lab
            </span>
          </div>
        </div>

        <div className="hidden items-center rounded-full bg-slate-100 px-1 py-1 shadow-inner shadow-white/60 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id === "home" ? "" : link.id}`}
              ref={link.id === "cart" ? navCartRef : undefined}
              onClick={(event) => {
                if (["cart", "login", "logout"].includes(link.id)) {
                  event.preventDefault();
                  onLinkClick(link.id);
                }
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-white hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full bg-white/70 p-2 text-slate-600 transition hover:bg-white md:flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden rounded-full bg-white/70 p-2 text-slate-600 transition hover:bg-white md:flex"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => onLinkClick("login")}
            className="hidden rounded-full bg-white/70 p-2 text-slate-600 transition hover:bg-white md:flex"
            aria-label="Profile"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onToggleCart}
            className="hidden rounded-full bg-white/70 p-2 text-slate-600 transition hover:bg-white md:flex"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:flex"
            onClick={() => onLinkClick(isLoggedIn ? "logout" : "login")}
          >
            {isLoggedIn ? (
              <>
                <LogOut className="h-5 w-5" />
                Logout
              </>
            ) : (
              <>
                <LogIn className="h-5 w-5" />
                Sign Up
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => onLinkClick("login")}
            className="flex items-center justify-center rounded-full bg-white p-2 shadow-inner shadow-slate-200 md:hidden"
          >
            <LogIn className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;

