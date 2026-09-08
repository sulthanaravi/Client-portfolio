import { GraduationCap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "HIGHER SECONDARY",
    title: "Higher Secondary",
    institution: "Wisdom Matric Hr. Sec. School, Kadayanallur",
  },
  {
    year: "BACHELOR DEGREE",
    title: "Bachelor Degree",
    institution: "VELS University, Chennai",
  },
  {
    year: "COURSE CERTIFICATION",
    title: "Course Certification",
    institution: "Stay In Digital, Prusavakkam",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        bg-gray-100
        px-5
        py-14
        transition-colors
        duration-500
        dark:bg-[#111111]
        sm:px-8
        lg:px-12
        lg:py-20
      "
    >
      {/* Background decoration */}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-gray-300/40
          blur-3xl
          dark:bg-white/[0.03]
        "
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-gray-300/30
          blur-3xl
          dark:bg-white/[0.02]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-14"
        >
          <p
            className="
              mb-3
              text-xs
              font-bold
              tracking-[0.3em]
              text-gray-500
              dark:text-gray-400
            "
          >
            MY JOURNEY
          </p>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-black
              dark:text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Education
          </h2>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* ================= EDUCATION CARDS ================= */}

          <div className="space-y-5">
            {educationData.map((education, index) => (
              <motion.div
                key={education.title}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  x: 8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-500
                  hover:shadow-xl
                  dark:border-white/10
                  dark:bg-[#1a1a1a]
                  dark:hover:border-white/20
                  sm:p-7
                "
              >
                {/* Hover line */}

                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    bg-black
                    dark:bg-white
                  "
                  initial={{
                    scaleY: 0,
                  }}
                  whileHover={{
                    scaleY: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  style={{
                    transformOrigin: "bottom",
                  }}
                />

                <div className="flex items-start gap-5">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gray-100
                      text-black
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:bg-black
                      group-hover:text-white
                      dark:bg-white/10
                      dark:text-white
                      dark:group-hover:bg-white
                      dark:group-hover:text-black
                    "
                  >
                    <GraduationCap size={22} strokeWidth={1.8} />
                  </div>

                  {/* Text */}

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        mb-1
                        text-[10px]
                        font-bold
                        tracking-[0.2em]
                        text-gray-400
                        dark:text-gray-500
                      "
                    >
                      {education.year}
                    </p>

                    <h3
                      className="
                        text-lg
                        font-bold
                        text-black
                        dark:text-white
                        sm:text-xl
                      "
                    >
                      {education.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      {education.institution}
                    </p>
                  </div>

                  {/* Arrow */}

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="
                      hidden
                      text-gray-400
                      transition-colors
                      group-hover:text-black
                      dark:group-hover:text-white
                      sm:block
                    "
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= RIGHT SIDE VISUAL ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
    relative
    flex
    min-h-[300px]
    w-full
    items-center
    justify-center
    sm:min-h-[340px]
    md:min-h-[380px]
    lg:min-h-[420px]
  "
          >
            {/* Outer rotating circle */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
      absolute
      h-56
      w-56
      rounded-full
      border
      border-dashed
      border-black/20
      dark:border-white/10

      sm:h-64
      sm:w-64

      md:h-72
      md:w-72
    "
            />

            {/* Second decorative circle */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
      absolute
      h-44
      w-44
      rounded-full
      border
      border-black/10
      dark:border-white/10

      sm:h-52
      sm:w-52
    "
            />

            {/* Main circle */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="
      relative
      z-10
      flex
      h-36
      w-36
      items-center
      justify-center
      rounded-full
      bg-black
      shadow-2xl
      transition-transform
      duration-500
      dark:bg-white

      sm:h-44
      sm:w-44

      md:h-52
      md:w-52
    "
            >
              <GraduationCap
                size={55}
                strokeWidth={1}
                className="
        text-white
        sm:h-[65px]
        sm:w-[65px]
        md:h-[80px]
        md:w-[80px]
        dark:text-black
      "
              />

              {/* Top dot */}

              <motion.span
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
        absolute
        right-5
        top-5
        h-2
        w-2
        rounded-full
        bg-white/60
        sm:right-7
        sm:top-7
        sm:h-3
        sm:w-3
        dark:bg-black/40
      "
              />

              {/* Bottom dot */}

              <motion.span
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
        absolute
        bottom-6
        left-5
        h-2
        w-2
        rounded-full
        bg-white/40
        sm:bottom-8
        sm:left-7
        dark:bg-black/30
      "
              />
            </motion.div>

            {/* Floating dot 1 */}

            <motion.span
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
      absolute
      left-[15%]
      top-[20%]
      h-3
      w-3
      rounded-full
      bg-black
      dark:bg-white
    "
            />

            {/* Floating dot 2 */}

            <motion.span
              animate={{
                y: [0, 12, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
      absolute
      bottom-[20%]
      right-[15%]
      h-2
      w-2
      rounded-full
      bg-neutral-400
      dark:bg-neutral-500
    "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;
