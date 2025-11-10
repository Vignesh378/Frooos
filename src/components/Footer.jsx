import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

function Footer({ logoSrc }) {
  return (
    <footer className="relative mt-10 rounded-t-[3rem] bg-white px-6 py-14 text-slate-700 shadow-[0_-30px_60px_rgba(203,213,225,0.55)] ring-1 ring-slate-100">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <img
              src={logoSrc}
              alt="Frooos"
              className="h-14 w-auto drop-shadow-[0_12px_24px_rgba(148,163,184,0.45)]"
            />
            <div className="max-w-lg space-y-3">
              <h3 className="font-display text-2xl font-semibold text-slate-900 drop-shadow-[0_12px_24px_rgba(148,163,184,0.45)]">
                Live the Frooos ritual day & night.
              </h3>
              <p className="text-sm text-slate-600">
                Inspired by premium juice lounges, Frooos keeps the experience
                friendly, fruity, and unforgettable. Join the community for
                seasonal drops and tasting events.
              </p>
            </div>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 outline-none transition-colors duration-300 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/60"
            />
            <button
              type="submit"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
            >
              Join now
            </button>
          </form>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              About
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#about" className="transition-opacity hover:opacity-80">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#shop" className="transition-opacity hover:opacity-80">
                  Shop
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-opacity hover:opacity-80">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Support
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="transition-opacity hover:opacity-80">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-80">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-80">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Visit
            </p>
            <p className="text-sm text-slate-600">
              88 Orchard Lane, Freshville
              <br />
              Daily · 7am — 10pm
              <br />
              hello@frooos.studio
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Social
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon) => (
                <a
                  key={Icon.displayName ?? Icon.name}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:-translate-y-1 hover:bg-slate-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-slate-200 pt-6">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-slate-400">
            <span className="text-slate-500">Partnered with</span>
            {["Coca-Cola", "Kellogg's", "Nutella", "Starbucks", "Whole Foods"].map(
              (brand) => (
                <span
                  key={brand}
                  className="rounded-full bg-slate-100 px-4 py-2 text-slate-600 shadow-inner shadow-slate-200"
                >
                  {brand}
                </span>
              )
            )}
          </div>
          <div className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Frooos · Crafted with fruit, joy, and
              premium pours.
            </p>
            <div className="flex gap-4">
              <a href="#" className="transition-opacity hover:opacity-80">
                Privacy
              </a>
              <a href="#" className="transition-opacity hover:opacity-80">
                Terms
              </a>
              <a href="#" className="transition-opacity hover:opacity-80">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

