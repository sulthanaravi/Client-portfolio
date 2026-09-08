import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="
  overflow-hidden
  bg-[#f5f5f5]
  px-6
  pt-20
  pb-8
  text-[#111111]
  transition-colors
  duration-500
  dark:bg-[#181818]
  dark:text-white
  sm:px-10
  md:px-14
  lg:px-20
"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
            duration: 0.8,
          }}
          className="mb-14"
        >
          <p
            className="
              mb-3
              text-sm
              font-bold
              tracking-[0.3em]
              text-neutral-500
              dark:text-neutral-400
            "
          >
            ABOUT ME
          </p>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Creativity meets
            <br />
            <span className="text-neutral-400 dark:text-neutral-600">
              meaningful storytelling.
            </span>
          </h2>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ================= ABOUT TEXT ================= */}

          <motion.div
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
              duration: 0.8,
            }}
          >
            <p
              className="
                text-lg
                leading-8
                text-neutral-600
                dark:text-neutral-400
              "
            >
              I’m Mohamed Sharuk, a passionate Video Editor, Content Creator,
              and aspiring Digital Marketer with a strong interest in creative
              communication. With 2 years of experience in video editing and
              content creation, I also have a strong ability in storytelling and
              content writing, allowing me to turn ideas into engaging and
              impactful content.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-neutral-600
                dark:text-neutral-400
              "
            >
              As a fresher in Digital Marketing, I’m eager to apply my
              creativity, learn new strategies, and grow within the industry.
              I’m driven by passion, curiosity, and a constant desire to improve
              — and given the right opportunity, I’m ready to create, learn, and
              make a meaningful impact.
            </p>

            {/* ================= BUTTON ================= */}

            <motion.a
              whileHover={{ x: 6 }}
              href="#contact"
              className="
    mt-8
    inline-flex
    items-center
    gap-2
    text-sm
    font-bold
    uppercase
    tracking-[0.12em]
    text-[#111111]
    transition-all
    duration-300
    dark:text-white
  "
            >
              Get In Touch
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

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
              delay: 0.15,
            }}
            className="
    flex
    w-full
    items-center
    justify-center
    lg:justify-end
  "
          >
            <div
              className="
      relative
      flex
      h-64
      w-full
      max-w-sm
      items-center
      justify-center
      overflow-hidden
      transition-all
      duration-500
    
      sm:h-72
      sm:max-w-md
      sm:rounded-[2rem]
      lg:h-80
      lg:max-w-md
    "
            >
              {/* ================= OUTER ROTATING CIRCLE ================= */}

              <motion.div
                animate={{
                  rotate: 360,
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
        border-dashed
        border-neutral-300

        dark:border-neutral-600

        sm:h-52
        sm:w-52

        lg:h-60
        lg:w-60
      "
              />

              {/* ================= INNER CIRCLE ================= */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
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
        bg-black
        text-center
        shadow-2xl

        dark:bg-white

        sm:h-32
        sm:w-32

        lg:h-36
        lg:w-36
      "
              >
                <span
                  className="
          px-3
          text-[10px]
          font-black
          uppercase
          leading-5
          tracking-[0.15em]
          text-white

          dark:text-black

          sm:text-xs
          sm:tracking-widest
        "
                >
                  Create.
                  <br />
                  Learn.
                  <br />
                  Grow.
                </span>
              </motion.div>

              {/* ================= TOP DOT ================= */}

              <motion.span
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
        absolute
        left-8
        top-8
        h-2
        w-2
        rounded-full
        bg-black

        dark:bg-white

        sm:left-10
        sm:top-10
        sm:h-3
        sm:w-3
      "
              />

              {/* ================= BOTTOM DOT ================= */}

              <motion.span
                animate={{
                  y: [0, 8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
        absolute
        bottom-8
        right-8
        h-1.5
        w-1.5
        rounded-full
        bg-neutral-400

        dark:bg-neutral-500

        sm:bottom-10
        sm:right-10
        sm:h-2
        sm:w-2
      "
              />

              {/* ================= EXTRA DECORATIVE DOT ================= */}

              <motion.span
                animate={{
                  x: [0, 6, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
        absolute
        bottom-12
        left-12
        h-1.5
        w-1.5
        rounded-full
        bg-neutral-300

        dark:bg-neutral-600

        sm:bottom-14
        sm:left-14
      "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
