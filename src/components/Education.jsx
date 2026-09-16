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
        bg-[#0f0f0f]
        px-5
        py-10
        pb-20
        text-white

       sm:px-8
        

        md:px-12
      

        lg:px-20
       
      "
    >
      {/* ================= BACKGROUND GRID ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
          opacity-[0.055]
        "
      />

      {/* ================= BACKGROUND GLOW ================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/[0.025]
          blur-3xl
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-white/[0.02]
          blur-3xl
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="
            mb-8

            sm:mb-10

            md:mb-12
          "
        >
          {/* MY JOURNEY */}

          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-white/50" />

            <p
              className="
      text-xs
      font-bold
      uppercase
      tracking-[0.3em]
      text-white/50
    "
            >
              MY JOURNEY
            </p>
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-4
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              text-white

              sm:text-6xl

              md:text-7xl

              lg:text-[80px]

              xl:text-[90px]
            "
          >
            Education
          </h2>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12

            sm:gap-16

            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-center
            lg:gap-14

            xl:gap-20
          "
        >
          {/* ================= EDUCATION CARDS ================= */}

          <div className="w-full space-y-4 sm:space-y-5">
            {educationData.map((education, index) => (
              <motion.div
                key={education.title}
                initial={{
                  opacity: 0,
                  x: -40,
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
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{
                  x: 6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-5
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:border-white/20
                  hover:bg-white/[0.045]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]

                  sm:p-6

                  md:p-7
                "
              >
                {/* ================= HOVER LINE ================= */}

                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    bg-white
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

                <div
                  className="
                    flex
                    items-start
                    gap-4

                    sm:gap-5
                  "
                >
                  {/* ================= ICON ================= */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/[0.06]
                      text-white
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:bg-white
                      group-hover:text-black

                      sm:h-12
                      sm:w-12
                    "
                  >
                    <GraduationCap size={21} strokeWidth={1.7} />
                  </div>

                  {/* ================= TEXT ================= */}

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        mb-1.5
                        text-[9px]
                        font-bold
                        tracking-[0.2em]
                        text-neutral-600

                        sm:text-[10px]
                        sm:text-neutral-500
                      "
                    >
                      {education.year}
                    </p>

                    <h3
                      className="
                        text-base
                        font-bold
                        leading-tight
                        text-white

                        sm:text-lg

                        md:text-xl
                      "
                    >
                      {education.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        max-w-xl
                        text-xs
                        leading-5
                        text-neutral-500

                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      {education.institution}
                    </p>
                  </div>

                  {/* ================= ARROW ================= */}

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="
                      hidden
                      text-neutral-600
                      transition-colors
                      duration-300
                      group-hover:text-white

                      sm:block
                    "
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= RIGHT VISUAL ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              delay: 0.15,
            }}
            className="
              relative
              flex
              min-h-[280px]
              w-full
              items-center
              justify-center

              sm:min-h-[340px]

              md:min-h-[380px]

              lg:min-h-[420px]
            "
          >
            {/* ================= OUTER ROTATING CIRCLE ================= */}

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
                h-48
                w-48
                rounded-full
                border
                border-dashed
                border-white/10

                sm:h-60
                sm:w-60

                md:h-72
                md:w-72

                lg:h-80
                lg:w-80
              "
            />

            {/* ================= SECOND CIRCLE ================= */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-36
                w-36
                rounded-full
                border
                border-white/[0.08]

                sm:h-52
                sm:w-52

                md:h-60
                md:w-60

                lg:h-64
                lg:w-64
              "
            />

            {/* ================= THIRD CIRCLE ================= */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-28
                w-28
                rounded-full
                border
                border-white/10

                sm:h-40
                sm:w-40
              "
            />

            {/* ================= MAIN CIRCLE ================= */}

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
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-[0_0_70px_rgba(255,255,255,0.08)]
                transition-transform
                duration-500

                sm:h-36
                sm:w-36

                md:h-44
                md:w-44

                lg:h-48
                lg:w-48
              "
            >
              <GraduationCap
                size={48}
                strokeWidth={1}
                className="
                  text-black

                  sm:h-[58px]
                  sm:w-[58px]

                  md:h-[68px]
                  md:w-[68px]

                  lg:h-[75px]
                  lg:w-[75px]
                "
              />

              {/* CENTER TOP DOT */}

              <motion.span
                animate={{
                  y: [0, -7, 0],
                  scale: [1, 1.2, 1],
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
                  bg-black/30

                  sm:right-7
                  sm:top-7
                  sm:h-2.5
                  sm:w-2.5
                "
              />

              {/* CENTER BOTTOM DOT */}

              <motion.span
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  h-2
                  w-2
                  rounded-full
                  bg-black/20

                  sm:bottom-7
                  sm:left-7
                "
              />
            </motion.div>

            {/* ================= ORBIT DOT ================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-48
                w-48

                sm:h-60
                sm:w-60

                md:h-72
                md:w-72

                lg:h-80
                lg:w-80
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-2
                  w-2
                  -translate-x-1/2
                  rounded-full
                  bg-white
                  shadow-[0_0_15px_rgba(255,255,255,0.7)]

                  sm:h-2.5
                  sm:w-2.5
                "
              />
            </motion.div>

            {/* ================= FLOATING DOT LEFT ================= */}

            <motion.span
              animate={{
                y: [0, -12, 0],
                x: [0, 5, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[12%]
                top-[20%]
                h-2
                w-2
                rounded-full
                bg-white

                sm:h-3
                sm:w-3
              "
            />

            {/* ================= FLOATING DOT RIGHT ================= */}

            <motion.span
              animate={{
                y: [0, 12, 0],
                x: [0, -5, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[18%]
                right-[12%]
                h-1.5
                w-1.5
                rounded-full
                bg-neutral-500

                sm:h-2
                sm:w-2
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;
