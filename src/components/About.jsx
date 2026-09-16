import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#0f0f0f]
        px-5
        py-10
        text-white

        sm:px-8

        md:px-12

        lg:px-20
      "
    >
      {/* GRID BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
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
              ABOUT ME
            </p>
          </div>
          <h2
            className="
              max-w-4xl
              text-3xl
              font-black
              leading-[1.05]
              tracking-tight

              sm:text-5xl

              md:text-6xl

              lg:text-7xl

              xl:text-[80px]
            "
          >
            Creativity meets
            <br />
            <span className="text-neutral-500">meaningful storytelling.</span>
          </h2>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div
          className="
            flex
            flex-col
            gap-14

            sm:gap-16

            md:gap-20

            lg:gap-24

            xl:flex-row
            xl:items-center
            xl:gap-16
          "
        >
          {/* ================= LEFT TEXT ================= */}

          <div className="w-full xl:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="
                  max-w-2xl
                  text-sm
                  leading-7
                  text-neutral-400

                  sm:text-base
                  sm:leading-8

                  md:text-lg
                  md:leading-9

                  lg:text-xl
                "
              >
                I’m Mohamed Sharuk, a passionate Digital Marketer, Video Editor,
                and aspiring Content Creator with a strong interest in creative
                communication. With 2 years of experience in video editing and
                content creation, I also have a strong ability in storytelling
                and content writing, allowing me to turn ideas into engaging and
                impactful content.
              </p>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-neutral-400

                  sm:mt-7
                  sm:text-base
                  sm:leading-8

                  md:text-lg
                  md:leading-9

                  lg:text-xl
                "
              >
                As a fresher in Digital Marketing, I’m eager to apply my
                creativity, learn new strategies, and grow within the industry.
                I’m driven by passion, curiosity, and a constant desire to
                improve — and given the right opportunity, I’m ready to create,
                learn, and make a meaningful impact.
              </p>

              {/* GET IN TOUCH */}

              <motion.a
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-neutral-600
                  pb-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300

                  sm:text-xs

                  md:text-sm
                "
              >
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-base"
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>

          {/* ================= RIGHT ANIMATION ================= */}

          <div
            className="
              flex
              w-full
              items-center
              justify-center

              xl:w-1/2
            "
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="
                relative
                flex
                h-64
                w-full
                max-w-[300px]
                items-center
                justify-center

                sm:h-72
                sm:max-w-[360px]

                md:h-80
                md:max-w-[400px]

                lg:h-96
                lg:max-w-[460px]
              "
            >
              {/* OUTER ROTATING CIRCLE */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
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
                  border-neutral-700

                  sm:h-56
                  sm:w-56

                  md:h-64
                  md:w-64

                  lg:h-72
                  lg:w-72
                "
              />

              {/* SECOND CIRCLE */}

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-36
                  w-36
                  rounded-full
                  border
                  border-neutral-800

                  sm:h-44
                  sm:w-44

                  md:h-52
                  md:w-52

                  lg:h-60
                  lg:w-60
                "
              />

              {/* CENTER */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.04, 1],
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
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-center
                  shadow-2xl

                  sm:h-28
                  sm:w-28

                  md:h-32
                  md:w-32

                  lg:h-36
                  lg:w-36
                "
              >
                <span
                  className="
                    px-2
                    text-[9px]
                    font-black
                    uppercase
                    leading-4
                    tracking-[0.15em]
                    text-black

                    sm:text-[10px]

                    md:text-xs
                  "
                >
                  Create.
                  <br />
                  Learn.
                  <br />
                  Grow.
                </span>
              </motion.div>

              {/* TOP DOT */}

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
                  left-5
                  top-5
                  h-2
                  w-2
                  rounded-full
                  bg-white

                  sm:left-8
                  sm:top-8

                  md:h-3
                  md:w-3
                "
              />

              {/* RIGHT DOT */}

              <motion.span
                animate={{
                  x: [0, 8, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-4
                  top-1/2
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-neutral-400

                  sm:right-8

                  md:h-2
                  md:w-2
                "
              />

              {/* BOTTOM DOT */}

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
                  bottom-5
                  right-6
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-neutral-500

                  sm:bottom-8
                  sm:right-10

                  md:h-2
                  md:w-2
                "
              />
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
              {/* LEFT BOTTOM DOT */}

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
                  bottom-10
                  left-8
                  h-1
                  w-1
                  rounded-full
                  bg-neutral-600

                  sm:bottom-12
                  sm:left-12
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
