/** @format */

import { useEffect, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-around items-center lg:px-22 p-[12px_22px] font-semibold bg-[#0a0f1e] ${
        hasScrolled
          ? "fixed top-0 left-0 w-full border-b border-[#042c4f] backdrop-blur-sm transition-all duration-200 z-[999]"
          : "border-none"
      }`}
    >
      <div className="flex items-center gap-3 " aria-hidden>
        <div
          className="w-10 h-10 rounded-md flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#6f7bea,#4fc3f7)" }}
        >
          <span className="text-[#061022] font-extrabold text-sm">CCU</span>
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-white font-bold text-sm">
            Charles Chinedu Uchendu
          </span>
          <span className="text-[11px] text-[#9fb7d4] font-medium">
            Full‑Stack Developer
          </span>
        </div>

        <span className="sr-only">CCU — Charles Chinedu Uchendu</span>
      </div>

      <div className="flex-1 flex justify-center">
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-6 pl-[18px] text-center">
          {navItems.map(({ title, href }) => (
            <li key={title} className="inline-block text-center">
              <a href={href} className="no-underline text-base text-white hover:text-[#5a67d8]">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {/* Mobile hamburger at extreme right */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(s => !s)}
            className="p-2 rounded-md text-white hover:bg-[#072033]/40"
          >
            {mobileOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <a
          href="#contact"
          className="ml-2 hidden md:inline-block bg-[#6f7bea] hover:bg-[#5a67d8] text-[#061022] px-3 py-1 rounded-md font-medium text-sm"
        >
          Let's Talk
        </a>

        {/* Mobile menu panel (slides from right) */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-[998] md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 z-[999] md:hidden">
              <div className="w-[80vw] max-w-sm h-full bg-[#061428] border-l border-[#0f2336] shadow-xl p-4 transform transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white font-semibold">Menu</div>
                  <button
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-md text-white hover:bg-[#072033]/40"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <nav>
                  <ul className="flex flex-col gap-2">
                    {navItems.map(({ title, href }) => (
                      <li key={title}>
                        <a
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded text-white hover:bg-[#0b2a42] no-underline"
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
