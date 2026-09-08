import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="absolute right-0 top-0 z-[100] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
        <motion.button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className={`
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      transition-all
      duration-300

      ${
        darkMode
          ? "text-white hover:bg-white/10"
          : "text-[#111111] hover:bg-black/5"
      }
    `}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
              >
                <X size={34} strokeWidth={2} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
              >
                <Menu size={34} strokeWidth={2} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`
              fixed
              left-4
              right-4
              top-[76px]
              z-[90]
              rounded-3xl
              border
              p-4
              shadow-2xl
              backdrop-blur-2xl

              sm:top-[82px]

              ${
                darkMode
                  ? `
                    border-white/10
                    bg-[#111111]/95
                    shadow-black/50
                  `
                  : `
                    border-black/10
                    bg-white/95
                    shadow-black/15
                  `
              }

              lg:hidden
            `}
          >
            <nav className="flex flex-col gap-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className={`
                    rounded-2xl
                    px-5
                    py-4
                    text-sm
                    font-bold
                    tracking-[0.15em]
                    transition-all
                    duration-300

                    ${
                      darkMode
                        ? `
                          text-white
                          hover:bg-white
                          hover:text-black
                        `
                        : `
                          text-black
                          hover:bg-black
                          hover:text-white
                        `
                    }
                  `}
                >
                  {item.name.toUpperCase()}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
