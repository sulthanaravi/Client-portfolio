import { motion } from "framer-motion";
import { Camera, PenLine, BookOpen, Play } from "lucide-react";

/* =====================================================
   SKILLS DATA
===================================================== */

const skills = [
  {
    number: "01",
    category: "SOFTWARE",
    title: "CapCut",
    description:
      "Creating engaging videos with smooth transitions, effects, and creative edits.",
    icon: "capcut",
  },
  {
    number: "02",
    category: "SOFTWARE",
    title: "DaVinci Resolve",
    description:
      "Professional video editing, color grading, and visual storytelling.",
    icon: "davinci",
  },
  {
    number: "03",
    category: "SOFTWARE",
    title: "Alight Motion",
    description:
      "Creating dynamic motion graphics, animations, and engaging visual effects.",
    icon: "alight",
  },
  {
    number: "04",
    category: "CREATIVE",
    title: "Content Writing",
    description:
      "Writing clear, creative, and engaging content that connects with audiences.",
    icon: "writing",
  },
  {
    number: "05",
    category: "CREATIVE",
    title: "Storytelling",
    description:
      "Turning ideas into meaningful stories that capture attention and emotion.",
    icon: "story",
  },
  {
    number: "06",
    category: "CREATIVE",
    title: "Videography",
    description:
      "Capturing visual moments and creating compelling content through video.",
    icon: "video",
  },
];

/* =====================================================
   MAIN COMPONENT
===================================================== */

function Skills() {
  return (
    <section
      id="skills"
      className="
        overflow-hidden
        bg-[#e9e9e9]
        px-6
        py-20
        text-[#111111]
        transition-colors
        duration-500

        dark:bg-[#111111]
        dark:text-white

        sm:px-10
        md:px-14
        lg:px-20
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
            ease: "easeOut",
          }}
          className="
            mb-14
            grid
            gap-8
            lg:grid-cols-2
            lg:items-end
          "
        >
          <div>
            <motion.p
              initial={{
                opacity: 0,
                letterSpacing: "0.1em",
              }}
              whileInView={{
                opacity: 1,
                letterSpacing: "0.3em",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="
                mb-4
                text-sm
                font-bold
                text-neutral-500
                dark:text-neutral-400
              "
            >
              MY SKILLS
            </motion.p>

            <h2
              className="
                text-4xl
                font-black
                leading-tight
                tracking-tight

                sm:text-5xl
                lg:text-6xl
              "
            >
              Creative tools
              <br />
              <span
                className="
                  text-neutral-400
                  dark:text-neutral-600
                "
              >
                behind my work.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* =================================================
            SKILL CARDS
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            grid
            gap-4

            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skills.map((skill) => (
            <SkillCard key={skill.number} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   SKILL CARD
===================================================== */

function SkillCard({ number, category, title, description, icon }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },

        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        group
        relative
        min-h-[300px]
        overflow-hidden
        rounded-3xl
        border
        border-neutral-300
        bg-[#f5f5f5]
        p-7
        shadow-sm
        transition-all
        duration-500

        hover:border-black
        hover:bg-black
        hover:text-white
        hover:shadow-2xl

        dark:border-neutral-800
        dark:bg-[#191919]
        dark:hover:border-white
        dark:hover:bg-white
        dark:hover:text-black

        sm:p-8
      "
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileHover={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-neutral-800
          opacity-0
          dark:bg-neutral-200
        "
      />

      {/* =================================================
          TOP ROW
      ================================================= */}

      <div className="relative z-10 flex items-center justify-between">
        {/* Number */}

        <span
          className="
            text-xs
            font-bold
            tracking-[0.25em]
            text-neutral-400
            transition-colors
            duration-300

            group-hover:text-neutral-500
          "
        >
          {number}
        </span>

        {/* Category */}

        <span
          className="
            rounded-full
            border
            border-neutral-300
            px-3
            py-1
            text-[9px]
            font-bold
            tracking-[0.2em]
            text-neutral-500
            transition-all
            duration-300

            group-hover:border-neutral-600
            group-hover:text-neutral-400

            dark:border-neutral-700
            dark:text-neutral-500

            dark:group-hover:border-neutral-300
            dark:group-hover:text-neutral-600
          "
        >
          {category}
        </span>
      </div>

      {/* =================================================
          ICON
      ================================================= */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        className="
          relative
          z-10
          mt-10
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-black
          text-white
          shadow-lg
          transition-all
          duration-500

          group-hover:bg-white
          group-hover:text-black

          dark:bg-white
          dark:text-black

          dark:group-hover:bg-black
          dark:group-hover:text-white
        "
      >
        <SkillIcon type={icon} />
      </motion.div>

      {/* =================================================
          TITLE
      ================================================= */}

      <h3
        className="
          relative
          z-10
          mt-8
          text-2xl
          font-black
          tracking-tight
        "
      >
        {title}
      </h3>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <p
        className="
          relative
          z-10
          mt-3
          max-w-sm
          text-sm
          leading-6
          text-neutral-500
          transition-colors
          duration-300

          group-hover:text-neutral-400

          dark:text-neutral-500
          dark:group-hover:text-neutral-600
        "
      >
        {description}
      </p>

      {/* =================================================
          BOTTOM LINE
      ================================================= */}

      <motion.div
        initial={{
          width: "0%",
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-1
          bg-white

          dark:bg-black
        "
      />
    </motion.div>
  );
}

/* =====================================================
   SKILL ICONS
===================================================== */

function SkillIcon({ type }) {
  /* CAPCUT */

  if (type === "capcut") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 7h6l8 10h-6L5 7Z" />
        <path d="M5 17h6l8-10h-6L5 17Z" />
      </svg>
    );
  }

  /* DAVINCI RESOLVE */

  if (type === "davinci") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8.5" />

        <path d="M8 15c1.5-2.5 3-4.5 4-7" />

        <path d="M16 15c-1.5-2.5-3-4.5-4-7" />

        <path d="M7.5 12h9" />
      </svg>
    );
  }

  /* ALIGHT MOTION */

  if (type === "alight") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8.5" />

        <path d="M7.5 15.5 12 7l4.5 8.5" />

        <path d="M9.5 13h5" />
      </svg>
    );
  }

  /* CONTENT WRITING */

  if (type === "writing") {
    return <PenLine size={32} strokeWidth={1.8} />;
  }

  /* STORYTELLING */

  if (type === "story") {
    return <BookOpen size={32} strokeWidth={1.8} />;
  }

  /* VIDEOGRAPHY */

  if (type === "video") {
    return <Camera size={32} strokeWidth={1.8} />;
  }

  return <Play size={32} />;
}

export default Skills;
