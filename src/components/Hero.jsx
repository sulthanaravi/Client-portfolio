import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        // bg-[#e8e8e6]
        text-[#111]
        dark:bg-[#101010]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}
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
    left-1/2
    top-1/2
    z-0
    h-full
    w-full
    -translate-x-1/2
    -translate-y-1/2
    object-contain
    opacity-100
  "
      />

      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#e8e8e6]/70
          dark:bg-[#101010]/75
        "
      />

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          opacity-[0.035]
          dark:opacity-[0.055]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* =====================================================
          SOCIAL LINKS
          POSITIONED BELOW NAVBAR
      ===================================================== */}
      <header
        className="
          absolute
          left-0
          right-0
          top-14
          z-20
          flex
          items-center
          justify-center
          px-5
          py-3

          sm:top-16
          sm:justify-start
          sm:px-8

          lg:top-16
          lg:px-12
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex items-center gap-3"
        >
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
              duration: 0.7,
              delay: 0.6,
            }}
            className="
              flex
              items-center
              gap-2
            "
          >
            {/* =================================================
                INSTAGRAM
            ================================================= */}
            <a
              href="https://www.instagram.com/sharuk_editz"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="
                group
                flex
                h-9
                items-center
                gap-2
                rounded-full
                border
                border-black/15
                bg-black/[0.03]
                px-3
                text-black/60
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-black
                hover:bg-black
                hover:text-white
                hover:shadow-lg

                dark:border-white/15
                dark:bg-white/[0.03]
                dark:text-white/60
                dark:hover:border-white
                dark:hover:bg-white
                dark:hover:text-black
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

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                "
              >
                Instagram
              </span>
            </a>

            {/* =================================================
                YOUTUBE
            ================================================= */}
            <a
              href="https://youtube.com/@sharukeditz1"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="
                group
                flex
                h-9
                items-center
                gap-2
                rounded-full
                border
                border-black/15
                bg-black/[0.03]
                px-3
                text-black/60
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-black
                hover:bg-black
                hover:text-white
                hover:shadow-lg

                dark:border-white/15
                dark:bg-white/[0.03]
                dark:text-white/60
                dark:hover:border-white
                dark:hover:bg-white
                dark:hover:text-black
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

                <path d="M9.6 15.5 15.8 12 9.6 8.5v7Z" fill="white" />
              </svg>

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                "
              >
                YouTube
              </span>
            </a>
          </motion.div>
        </motion.div>
      </header>

      {/* =====================================================
          MAIN HERO
          MOBILE / TABLET = STACKED
          XL = SIDE BY SIDE
      ===================================================== */}
      <main
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          items-center
          justify-center
          gap-12
          px-5
          pb-12
          pt-36

          sm:gap-14
          sm:px-8
          sm:pt-40

          md:gap-16

          lg:gap-20
          lg:px-12
          lg:pt-40

          xl:flex-row
          xl:items-center
          xl:justify-center
          xl:gap-14
          xl:px-16
          xl:pb-10
          xl:pt-24
        "
      >
        {/* =================================================
            PHOTO SECTION
        ================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            shrink-0
            items-center
            justify-center

            xl:w-[40%]
          "
        >
          <div className="relative shrink-0">
            {/* Rotating Ring */}
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
                -inset-5
                rounded-full
                border
                border-dashed
                border-black/15

                sm:-inset-6

                dark:border-white/15
              "
            />

            {/* Decorative Dot */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-4
                top-5
                z-20
                h-3
                w-3
                rounded-full
                bg-black

                dark:bg-white
              "
            />

            {/* Photo */}
            <motion.div
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                h-[230px]
                w-[230px]
                shrink-0
                overflow-hidden
                rounded-full
                border-[7px]
                border-[#e8e8e6]
                shadow-[0_25px_60px_rgba(0,0,0,0.15)]

                sm:h-[250px]
                sm:w-[250px]
                sm:border-[8px]

                md:h-[270px]
                md:w-[270px]

                lg:h-[280px]
                lg:w-[280px]

                xl:h-[290px]
                xl:w-[290px]

                dark:border-[#101010]
              "
            >
              <img
                src="/images/Profile.jpeg"
                alt="Mohamed Sharuk"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale-[15%]
                  transition-all
                  duration-700
                  hover:scale-105
                  hover:grayscale-0
                "
              />
            </motion.div>

            {/* Number */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="
                absolute
                -bottom-3
                -left-3
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-black
                text-[9px]
                font-bold
                text-white
                shadow-lg

                dark:bg-white
                dark:text-black
              "
            >
              01
            </motion.div>
          </div>
        </motion.div>

        {/* =================================================
            CONTENT SECTION
        ================================================= */}
        <div
          className="
            w-full
            max-w-[680px]
            shrink-0
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
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
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
                w-8
                shrink-0
                bg-black/40

                sm:w-10

                dark:bg-white/40
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-black/50

                sm:text-[9px]
                sm:tracking-[0.3em]

                dark:text-white/50
              "
            >
              Video Editor & Content Creator
            </span>
          </motion.div>

          {/* NAME — MOHAMED */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
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
              whitespace-nowrap
              text-[12vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.065em]

              sm:text-[11vw]

              md:text-[9vw]

              lg:text-[7.5vw]

              xl:text-[5.3rem]

              2xl:text-[6.2rem]
            "
          >
            Mohamed
          </motion.h1>

          {/* NAME — SHARUK */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
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
              whitespace-nowrap
              text-[12vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.065em]
              text-transparent
              [-webkit-text-stroke:1px_#111]

              sm:text-[11vw]

              md:text-[9vw]

              lg:text-[7.5vw]

              xl:text-[5.3rem]

              2xl:text-[6.2rem]

              dark:[-webkit-text-stroke:1px_white]
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
              mt-6
              max-w-[560px]
              border-l
              border-black/20
              pl-4
              text-xs
              leading-5
              text-black/60

              sm:mt-6
              sm:pl-5
              sm:text-sm
              sm:leading-6

              xl:mx-0

              dark:border-white/20
              dark:text-white/60
            "
          >
            I turn ideas into engaging visual stories through cinematic editing,
            creative content, and meaningful digital experiences.
          </motion.p>

          {/* ACTION BUTTONS */}
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
              flex-row
              items-center
              justify-center
              gap-3

              sm:mt-7

              xl:mx-0
              xl:max-w-none
              xl:justify-start
            "
          >
            {/* Download CV */}
            <a
              href="/resume/Mohamed-Sharuk-CV.pdf"
              download="Mohamed-Sharuk-CV.pdf"
              className="
                group
                flex
                h-12
                flex-1
                items-center
                justify-center
                gap-2
                rounded-full
                bg-black
                px-3
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]

                sm:flex-none
                sm:min-w-[180px]
                sm:px-5
                sm:text-[9px]
                sm:tracking-[0.18em]

                dark:bg-white
                dark:text-black
                dark:hover:shadow-[0_12px_30px_rgba(255,255,255,0.12)]
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
                  bg-white/15
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:translate-x-1

                  dark:bg-black/10
                "
              >
                ↓
              </span>
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="
                group
                flex
                h-12
                flex-1
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-black/25
                px-3
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-black
                hover:text-white

                sm:flex-none
                sm:min-w-[145px]
                sm:px-4
                sm:text-[9px]
                sm:tracking-[0.18em]

                dark:border-white/25
                dark:text-white
                dark:hover:bg-white
                dark:hover:text-black
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

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}
      <div
        className="
          absolute
          bottom-5
          left-6
          hidden
          items-center
          gap-3
          text-[7px]
          uppercase
          tracking-[0.3em]
          text-black/30

          sm:left-8
          sm:flex

          lg:left-12

          dark:text-white/30
        "
      >
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>
    </section>
  );
}

export default Hero;
