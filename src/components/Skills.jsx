import { motion } from "framer-motion";
import { Camera, PenLine, BookOpen, ArrowUpRight } from "lucide-react";

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
        relative
        overflow-hidden
        bg-[#0f0f0f]
        px-5
        py-20
        text-white

        sm:px-8
        sm:py-24

        md:px-10
        md:py-28

        lg:px-14
        lg:py-32

        xl:px-20
      "
    >
      {/* ================= GRID BACKGROUND ================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mb-10
            flex
            flex-col
            gap-6

            sm:mb-14

            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* ================= HEADER LEFT ================= */}

          <div>
            <div
              className="
                mb-4
                flex
                items-center
                gap-3
                text-xs
                font-bold
                tracking-[0.3em]
                text-neutral-500
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-neutral-500
                "
              />
              MY SKILLS
            </div>

            <h2
              className="
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.045em]

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              Tools that bring
              <br />
              <span className="text-neutral-500">ideas to life.</span>
            </h2>
          </div>

          {/* ================= HEADER DESCRIPTION ================= */}

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-neutral-500

              md:text-right
            "
          >
            A combination of creative software, visual skills, and storytelling
            techniques used to create engaging content.
          </p>
        </motion.div>

        {/* ================= SKILLS GRID ================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="
            grid
            w-full
            grid-cols-1
            gap-4

            sm:grid-cols-3
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
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.97,
        },

        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        min-h-[310px]
        w-full
        min-w-0
        overflow-hidden
        rounded-[26px]
        border
        border-neutral-800
        bg-[#191919]
        p-5
        text-white
        transition-all
        duration-500

        hover:border-white
        hover:bg-white
        hover:text-black
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]

        sm:min-h-[320px]
        sm:p-6

        md:min-h-[330px]
        md:p-6

        lg:min-h-[350px]
        lg:p-7
      "
    >
      {/* ================= TOP ================= */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
          gap-2
        "
      >
        {/* NUMBER */}

        <span
          className="
            text-xs
            font-bold
            tracking-[0.25em]
            text-neutral-500
            transition-colors
            duration-500
            group-hover:text-neutral-500
          "
        >
          {number}
        </span>

        {/* CATEGORY */}

        <span
          className="
            whitespace-nowrap
            rounded-full
            border
            border-neutral-700
            px-2.5
            py-1
            text-[7px]
            font-bold
            tracking-[0.15em]
            text-neutral-500
            transition-all
            duration-500

            group-hover:border-neutral-400
            group-hover:text-neutral-500
          "
        >
          {category}
        </span>
      </div>

      {/* ================= ICON ================= */}

      <motion.div
        whileHover={{
          rotate: -7,
          scale: 1.08,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          z-10
          mt-9
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-white
          text-black
          shadow-lg
          transition-all
          duration-500

          group-hover:bg-black
          group-hover:text-white

          sm:h-16
          sm:w-16
        "
      >
        <SkillIcon type={icon} />
      </motion.div>

      {/* ================= TITLE ================= */}

      <h3
        className="
          relative
          z-10
          mt-6
          pr-2
          text-xl
          font-black
          leading-tight
          tracking-[-0.03em]
          transition-transform
          duration-500

          group-hover:translate-x-1

          sm:text-2xl

          lg:text-[25px]
        "
      >
        {title}
      </h3>

      {/* ================= DESCRIPTION ================= */}

      <p
        className="
          relative
          z-10
          mt-3
          pr-2
          text-xs
          leading-5
          text-neutral-500
          transition-colors
          duration-500

          group-hover:text-neutral-500

          sm:text-sm
          sm:leading-6
        "
      >
        {description}
      </p>

      {/* ================= ARROW ================= */}

      <motion.div
        whileHover={{
          rotate: 45,
        }}
        className="
          absolute
          bottom-5
          right-5
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-neutral-700
          text-neutral-500
          transition-all
          duration-500

          group-hover:border-black
          group-hover:bg-black
          group-hover:text-white
        "
      >
        <ArrowUpRight size={17} strokeWidth={1.8} />
      </motion.div>

      {/* ================= DECORATION CIRCLE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-24
          h-48
          w-48
          rounded-full
          border
          border-neutral-700
          opacity-0
          transition-all
          duration-700

          group-hover:scale-150
          group-hover:opacity-20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-12
          -right-12
          h-24
          w-24
          rounded-full
          border
          border-neutral-700
          opacity-0
          transition-all
          duration-700

          group-hover:scale-150
          group-hover:opacity-10
        "
      />
    </motion.article>
  );
}

/* =====================================================
   ICONS
===================================================== */

function SkillIcon({ type }) {
  /* ================= CAPCUT ================= */

  if (type === "capcut") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
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

  /* ================= DAVINCI ================= */

  if (type === "davinci") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
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

  /* ================= ALIGHT MOTION ================= */

  if (type === "alight") {
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
        <circle cx="12" cy="12" r="8.5" />

        <path d="M7.5 15.5 12 7l4.5 8.5" />

        <path d="M9.5 13h5" />
      </svg>
    );
  }

  /* ================= CONTENT WRITING ================= */

  if (type === "writing") {
    return <PenLine size={29} strokeWidth={1.8} />;
  }

  /* ================= STORYTELLING ================= */

  if (type === "story") {
    return <BookOpen size={29} strokeWidth={1.8} />;
  }

  /* ================= VIDEOGRAPHY ================= */

  if (type === "video") {
    return <Camera size={29} strokeWidth={1.8} />;
  }

  return null;
}

export default Skills;
