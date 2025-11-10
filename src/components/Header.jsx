import { motion, AnimatePresence } from "framer-motion";
import { LogIn, LogOut, Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

function Header({
  logoSrc,
  navLinks,
  cartCount,
  isLoggedIn,
  onLinkClick,
  onToggleCart,
  navCartRef,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center rounded-full bg-white p-2 shadow-inner shadow-slate-200 md:hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-slate-700" />
            ) : (
              <Menu className="h-5 w-5 text-slate-700" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-20 z-40 overflow-hidden rounded-3xl bg-white/95 shadow-[0_20px_50px_rgba(148,163,184,0.4)] backdrop-blur-xl ring-1 ring-slate-100 md:hidden"
          >
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id === "home" ? "" : link.id}`}
                  onClick={(event) => {
                    if (["cart", "login", "logout"].includes(link.id)) {
                      event.preventDefault();
                      onLinkClick(link.id);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="rounded-2xl px-5 py-3 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 active:bg-slate-200"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onLinkClick("login");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                >
                  <User className="h-4 w-4" />
                  Profile
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onToggleCart();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Cart {cartCount > 0 && `(${cartCount})`}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

