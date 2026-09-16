import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#0f0f0f]
        text-white
      "
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/bg-video/background.MOV"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
        "
      />

      {/* VIDEO OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#0f0f0f]/35
        "
      />

      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          opacity-[0.08]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* SOCIAL LINKS */}
      <header
        className="
          relative
          z-30
          flex
          w-full
          items-center
          justify-center
          px-4
          pt-5

          sm:px-6
          sm:pt-6

          md:px-8
          md:pt-6

          lg:justify-start
          lg:px-10
          lg:pt-7

          xl:px-14
          xl:pt-7
        "
      >
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/sharuk_editz"
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              h-9
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/[0.03]
              px-3
              text-white/60
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white
              hover:bg-white
              hover:text-black
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[15px] w-[15px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />
            </svg>

            <span className="text-[8px] font-semibold uppercase tracking-[0.12em]">
              Instagram
            </span>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com/@sharukeditz1"
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              h-9
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/[0.03]
              px-3
              text-white/60
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white
              hover:bg-white
              hover:text-black
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[15px] w-[15px]"
              fill="currentColor"
            >
              <path
                d="
                  M23.5 6.2
                  a3 3 0 0 0-2.1-2.1
                  C19.5 3.5 12 3.5 12 3.5
                  s-7.5 0-9.4.6
                  A3 3 0 0 0 .5 6.2
                  C0 8.1 0 12 0 12
                  s0 3.9.5 5.8
                  a3 3 0 0 0 2.1 2.1
                  c1.9.6 9.4.6 9.4.6
                  s7.5 0 9.4-.6
                  a3 3 0 0 0 2.1-2.1
                  c.5-1.9.5-5.8.5-5.8
                  s0-3.9-.5-5.8Z
                "
              />

              <path d="M9.6 15.5 15.8 12 9.6 8.5v7Z" fill="black" />
            </svg>

            <span className="text-[8px] font-semibold uppercase tracking-[0.12em]">
              YouTube
            </span>
          </a>
        </motion.div>
      </header>

      {/* MAIN */}
      <main
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-col
          items-center
          px-4
          pb-12
          pt-12

          sm:px-6
          sm:pb-14
          sm:pt-14

          md:px-8
          md:pb-16
          md:pt-16

          lg:px-10

          xl:flex-row
          xl:items-center
          xl:justify-center
          xl:gap-14
          xl:px-14
          xl:pb-20
          xl:pt-16
        "
      >
        {/* =================================================
            MOBILE / TABLET PROFILE
        ================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.75,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
            scale: 1,
            rotate: 0,
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: 0.2,
            },
            scale: {
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            },
            rotate: {
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            flex
            w-full
            items-center
            justify-center
            xl:hidden
          "
        >
          <div className="relative">
            {/* OUTER ROTATING RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-full
                border
                border-dashed
                border-white/20

                sm:-inset-5
                md:-inset-6
              "
            />

            {/* SECOND ROTATING RING */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                -inset-8
                rounded-full
                border
                border-white/[0.06]

                sm:-inset-10
                md:-inset-12
              "
            />

            {/* TOP DOT */}
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-1
                top-1
                z-30
                h-2
                w-2
                rounded-full
                bg-white
                shadow-[0_0_15px_rgba(255,255,255,0.8)]

                sm:-right-2
                sm:h-2.5
                sm:w-2.5
              "
            />

            {/* BOTTOM DOT */}
            <motion.span
              animate={{
                y: [0, 7, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-2
                left-5
                z-30
                h-1.5
                w-1.5
                rounded-full
                bg-white/70
              "
            />

            {/* PROFILE */}
            <motion.div
              whileHover={{
                scale: 1.06,
              }}
              animate={{
                boxShadow: [
                  "0 20px 50px rgba(0,0,0,0.55)",
                  "0 25px 65px rgba(255,255,255,0.12)",
                  "0 20px 50px rgba(0,0,0,0.55)",
                ],
              }}
              transition={{
                scale: {
                  duration: 0.4,
                },
                boxShadow: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                z-10
                h-[145px]
                w-[145px]
                overflow-hidden
                rounded-full
                border-[6px]
                border-[#0f0f0f]
                bg-[#0f0f0f]

                sm:h-[175px]
                sm:w-[175px]
                sm:border-[7px]

                md:h-[200px]
                md:w-[200px]
              "
            >
              <motion.img
                src="/images/Profile.jpeg"
                alt="Mohamed Sharuk"
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale-[15%]
                  transition-all
                  duration-700
                  hover:grayscale-0
                "
              />

              {/* IMAGE SHINE */}
              <motion.div
                initial={{
                  x: "-120%",
                }}
                animate={{
                  x: "120%",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  w-1/3
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                "
              />
            </motion.div>
          </div>
        </motion.div>

        {/* MOBILE SPACING */}
        <div
          className="
            h-10
            sm:h-12
            md:h-14
            xl:hidden
          "
        />

        {/* =================================================
            DESKTOP PROFILE
        ================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: -70,
            scale: 0.75,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            hidden
            xl:flex
            xl:w-[40%]
            xl:shrink-0
            xl:items-center
            xl:justify-center
          "
        >
          <div className="relative shrink-0">
            {/* OUTER RING */}
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
                pointer-events-none
                absolute
                -inset-6
                rounded-full
                border
                border-dashed
                border-white/20
              "
            />

            {/* SECOND RING */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                -inset-12
                rounded-full
                border
                border-white/[0.06]
              "
            />

            {/* TOP GLOW DOT */}
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-4
                top-3
                z-30
                h-3
                w-3
                rounded-full
                bg-white
                shadow-[0_0_20px_rgba(255,255,255,0.8)]
              "
            />

            {/* BOTTOM DOT */}
            <motion.span
              animate={{
                y: [0, 9, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-3
                left-8
                z-30
                h-2
                w-2
                rounded-full
                bg-white/70
              "
            />

            {/* PROFILE */}
            <motion.div
              whileHover={{
                scale: 1.06,
              }}
              animate={{
                y: [0, -10, 0],
                boxShadow: [
                  "0 25px 60px rgba(0,0,0,0.5)",
                  "0 30px 75px rgba(255,255,255,0.12)",
                  "0 25px 60px rgba(0,0,0,0.5)",
                ],
              }}
              transition={{
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.4,
                },
                boxShadow: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                z-10
                h-[290px]
                w-[290px]
                overflow-hidden
                rounded-full
                border-[7px]
                border-[#0f0f0f]
                bg-[#0f0f0f]
              "
            >
              <motion.img
                src="/images/Profile.jpeg"
                alt="Mohamed Sharuk"
                animate={{
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale-[15%]
                  transition-all
                  duration-700
                  hover:grayscale-0
                "
              />

              {/* IMAGE SHINE */}
              <motion.div
                initial={{
                  x: "-120%",
                }}
                animate={{
                  x: "120%",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  w-1/3
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                "
              />
            </motion.div>
          </div>
        </motion.div>

        {/* =================================================
            CONTENT
        ================================================= */}
        <div
          className="
            relative
            z-20
            w-full
            max-w-[680px]
            text-center

            xl:w-[60%]
            xl:max-w-none
            xl:text-left
          "
        >
          {/* ROLE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3

              sm:mb-5

              xl:justify-start
            "
          >
            <span
              className="
                h-px
                w-7
                shrink-0
                bg-white/50

                sm:w-10
              "
            />

            <span
              className="
                text-[7px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/60

                sm:text-[9px]
                sm:tracking-[0.3em]
              "
            >
              Digital Marketer, Video Editor & Content Creator
            </span>
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              text-[16vw]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.07em]
              text-white

              sm:text-[13vw]

              md:text-[11vw]

              lg:text-[9vw]

              xl:text-[5.3rem]

              2xl:text-[6.2rem]
            "
          >
            Mohamed
          </motion.h1>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              text-[16vw]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.07em]
              text-transparent
              [-webkit-text-stroke:1px_white]

              sm:text-[13vw]

              md:text-[11vw]

              lg:text-[9vw]

              xl:text-[5.3rem]

              2xl:text-[6.2rem]
            "
          >
            Sharuk
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="
              mx-auto
              mt-5
              max-w-[560px]
              border-l
              border-white/25
              pl-3
              text-[10px]
              leading-5
              text-white/65

              sm:mt-6
              sm:pl-4
              sm:text-sm
              sm:leading-6

              md:mt-7
              md:text-base

              xl:mx-0
            "
          >
            I turn ideas into engaging visual stories through cinematic editing,
            creative content, and meaningful digital experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="
              mx-auto
              mt-6
              flex
              w-full
              max-w-[430px]
              flex-col
              items-stretch
              justify-center
              gap-3

              sm:flex-row
              sm:items-center

              xl:mx-0
              xl:max-w-none
              xl:justify-start
            "
          >
            {/* DOWNLOAD CV */}
            <a
              href="/resume/Mohamed-Sharuk-CV.pdf"
              download="Mohamed-Sharuk-CV.pdf"
              className="
                group
                flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-4
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(255,255,255,0.15)]

                sm:h-12
                sm:w-auto
                sm:min-w-[170px]
                sm:px-5
                sm:text-[9px]
                sm:tracking-[0.18em]
              "
            >
              <span>Download CV</span>

              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-black/10
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↓
              </span>
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="
                group
                flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/30
                px-4
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-black

                sm:h-12
                sm:w-auto
                sm:min-w-[140px]
                sm:px-4
                sm:text-[9px]
                sm:tracking-[0.18em]
              "
            >
              <span>Contact Me</span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </motion.div>
        </div>
      </main>
    </section>
  );
}

export default Hero;
