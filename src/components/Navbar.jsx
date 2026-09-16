import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  {
    name: "Responses",
    children: [
      {
        name: "Viewer's Feedback",
        href: "#viewers-feedback",
      },
      {
        name: "Theatre Response",
        href: "#theatre-response",
      },
    ],
  },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [responsesOpen, setResponsesOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
    setResponsesOpen(false);
    setHovered(null);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR BUTTON
      ===================================================== */}

      <header
        className="
          fixed
          right-0
          top-0
          z-[9999]
          px-6
          py-6

          sm:px-8
          sm:py-8

          lg:px-10
          lg:py-9
        "
      >
        <motion.button
          type="button"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setResponsesOpen(false);
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full

            text-black
            dark:text-white

            transition-all
            duration-300

            hover:bg-black/10
            dark:hover:bg-white/10
          "
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.5,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <X size={34} strokeWidth={1.8} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.5,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Menu size={34} strokeWidth={1.8} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </header>

      {/* =====================================================
          MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -35,
              scale: 0.96,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              left-4
              right-4
              top-[76px]
              z-[9998]

              max-h-[calc(100vh-95px)]
              overflow-y-auto
              overflow-x-hidden

              rounded-3xl

              border
              border-white/10

              bg-[#101010]/95

              shadow-2xl
              shadow-black/50

              backdrop-blur-2xl

              sm:left-6
              sm:right-6
              sm:top-[82px]

              lg:left-5
              lg:right-5
              lg:top-[106px]

              lg:h-[520px]
              lg:max-h-none
              lg:overflow-hidden

              lg:rounded-[32px]
            "
          >
            {/* =================================================
                BACKGROUND DETAILS
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute

                -right-32
                -top-32

                h-[430px]
                w-[430px]

                rounded-full

                border
                border-white/[0.04]

                lg:block
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[radial-gradient(circle_at_70%_45%,rgba(255,255,255,0.07),transparent_35%)]
              "
            />

            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                relative
                z-10

                flex
                items-center
                justify-between

                px-5
                pt-5

                sm:px-7
                sm:pt-7

                lg:px-12
                lg:pt-9
              "
            >
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 35 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.4,
                  }}
                  className="h-px bg-white/50"
                />

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-white/40

                    lg:text-[10px]
                  "
                >
                  Navigation
                </motion.span>
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="
                  hidden
                  text-[9px]
                  tracking-[0.25em]
                  text-white/30

                  sm:block
                "
              >
                MENU
              </motion.span>
            </div>

            {/* =================================================
                NAV LINKS
            ================================================= */}

            <nav
              className="
                relative
                z-10

                flex
                flex-col

                px-5
                pb-5
                pt-3

                sm:px-7

                lg:px-12
                lg:pt-5
              "
            >
              {menuItems.map((item, index) => {
                const hasChildren = item.children?.length > 0;

                return (
                  <div key={item.name} className="relative">
                    {/* =========================================
                        NORMAL NAV ITEM
                    ========================================= */}

                    {!hasChildren ? (
                      <motion.a
                        href={item.href}
                        onClick={handleMenuClose}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        initial={{
                          opacity: 0,
                          x: -25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.08 + index * 0.07,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          group
                          relative
                          flex
                          items-center

                          border-b
                          border-white/[0.07]

                          py-3

                          sm:py-4

                          lg:py-3
                        "
                      >
                        {/* NUMBER */}

                        <motion.span
                          animate={{
                            opacity:
                              hovered === null || hovered === index ? 1 : 0.2,
                            x: hovered === index ? 8 : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            mr-5
                            w-7

                            text-[10px]
                            font-medium
                            tracking-widest
                            text-white/30

                            lg:mr-8
                            lg:w-8
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.span>

                        {/* LINK */}

                        <motion.span
                          animate={{
                            x: hovered === index ? 12 : 0,
                            opacity:
                              hovered === null || hovered === index ? 1 : 0.45,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                          className="
                            text-base
                            font-bold
                            tracking-[0.14em]
                            text-white

                            sm:text-lg

                            lg:text-[18px]
                            lg:tracking-[0.12em]
                          "
                        >
                          {item.name.toUpperCase()}
                        </motion.span>

                        {/* ARROW */}

                        <motion.div
                          initial={{
                            opacity: 0,
                            x: -10,
                            rotate: -20,
                          }}
                          animate={{
                            opacity: hovered === index ? 1 : 0,
                            x: hovered === index ? 12 : -10,
                            rotate: hovered === index ? 0 : -20,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="ml-2 text-white"
                        >
                          <ArrowUpRight size={19} strokeWidth={1.8} />
                        </motion.div>

                        {/* HOVER LINE */}

                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: hovered === index ? "100%" : "0%",
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="
                            pointer-events-none
                            absolute
                            bottom-[-1px]
                            left-0
                            h-px
                            bg-white/60
                          "
                        />

                        {/* ACTIVE DOT */}

                        <motion.div
                          initial={{
                            scale: 0,
                            opacity: 0,
                          }}
                          animate={{
                            scale: hovered === index ? 1 : 0,
                            opacity: hovered === index ? 1 : 0,
                          }}
                          className="
                            absolute
                            right-2
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-white
                          "
                        />
                      </motion.a>
                    ) : (
                      /* =======================================
                         RESPONSES
                      ======================================= */

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.08 + index * 0.07,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          border-b
                          border-white/[0.07]
                        "
                      >
                        {/* RESPONSES MAIN BUTTON */}

                        <button
                          type="button"
                          onClick={() => setResponsesOpen((prev) => !prev)}
                          onMouseEnter={() => setHovered(index)}
                          onMouseLeave={() => setHovered(null)}
                          className="
                            group
                            relative
                            flex
                            w-full
                            items-center

                            py-3

                            sm:py-4

                            lg:py-3
                          "
                        >
                          {/* NUMBER */}

                          <motion.span
                            animate={{
                              opacity:
                                hovered === null || hovered === index ? 1 : 0.2,
                              x: hovered === index ? 8 : 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="
                              mr-5
                              w-7

                              text-left
                              text-[10px]
                              font-medium
                              tracking-widest
                              text-white/30

                              lg:mr-8
                              lg:w-8
                            "
                          >
                            {String(index + 1).padStart(2, "0")}
                          </motion.span>

                          {/* RESPONSES TEXT */}

                          <motion.span
                            animate={{
                              x: hovered === index ? 12 : 0,
                              opacity:
                                hovered === null || hovered === index
                                  ? 1
                                  : 0.45,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeOut",
                            }}
                            className="
                              text-base
                              font-bold
                              tracking-[0.14em]
                              text-white

                              sm:text-lg

                              lg:text-[18px]
                              lg:tracking-[0.12em]
                            "
                          >
                            RESPONSES
                          </motion.span>

                          {/* CHEVRON */}

                          <motion.div
                            animate={{
                              rotate: responsesOpen ? 180 : 0,
                              x: hovered === index ? 8 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="
                              ml-3
                              text-white/50
                            "
                          >
                            <ChevronDown size={18} strokeWidth={1.8} />
                          </motion.div>

                          {/* HOVER ARROW */}

                          <motion.div
                            initial={{
                              opacity: 0,
                              x: -10,
                              rotate: -20,
                            }}
                            animate={{
                              opacity: hovered === index ? 1 : 0,
                              x: hovered === index ? 12 : -10,
                              rotate: hovered === index ? 0 : -20,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="ml-2 text-white"
                          >
                            <ArrowUpRight size={19} strokeWidth={1.8} />
                          </motion.div>

                          {/* ACTIVE DOT */}

                          <motion.div
                            initial={{
                              scale: 0,
                              opacity: 0,
                            }}
                            animate={{
                              scale: hovered === index ? 1 : 0,
                              opacity: hovered === index ? 1 : 0,
                            }}
                            className="
                              absolute
                              right-2
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-white
                            "
                          />
                        </button>

                        {/* =====================================
                            RESPONSE SUBMENU
                        ===================================== */}

                        <AnimatePresence initial={false}>
                          {responsesOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div
                                className="
                                  mb-3
                                  ml-12
                                  border-l
                                  border-white/10
                                  pl-5

                                  sm:ml-14

                                  lg:ml-16
                                  lg:pl-6
                                "
                              >
                                {item.children.map((child, childIndex) => (
                                  <motion.a
                                    key={child.name}
                                    href={child.href}
                                    onClick={handleMenuClose}
                                    initial={{
                                      opacity: 0,
                                      x: -15,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    transition={{
                                      delay: childIndex * 0.08,
                                      duration: 0.3,
                                    }}
                                    className="
                                        group/sub
                                        relative
                                        flex
                                        items-center
                                        gap-3
                                        py-2.5

                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-[0.16em]
                                        text-white/45

                                        transition-colors
                                        duration-300

                                        hover:text-white

                                        sm:text-sm

                                        lg:py-2
                                        lg:text-[11px]
                                      "
                                  >
                                    {/* SMALL NUMBER */}

                                    <span
                                      className="
                                          text-[8px]
                                          tracking-widest
                                          text-white/20

                                          lg:text-[9px]
                                        "
                                    >
                                      0{childIndex + 1}
                                    </span>

                                    {/* CHILD NAME */}

                                    <span>{child.name}</span>

                                    {/* CHILD ARROW */}

                                    <ArrowUpRight
                                      className="
                                          h-3.5
                                          w-3.5
                                          opacity-0
                                          transition-all
                                          duration-300
                                          group-hover/sub:translate-x-1
                                          group-hover/sub:-translate-y-1
                                          group-hover/sub:opacity-100
                                        "
                                    />
                                  </motion.a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* =================================================
                BOTTOM TEXT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.4,
              }}
              className="
                absolute
                bottom-6
                right-8

                hidden

                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/25

                lg:block
              "
            >
              Creative / Visual / Digital
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
