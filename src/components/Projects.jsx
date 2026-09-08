import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Play } from "lucide-react";
import { useState } from "react";

const projects = [
  // ================= ACTING CONTENT =================

  {
    id: 1,
    category: "ACTING CONTENT",
    title: "Acting Performance",
    description:
      "A performance-focused video showcasing acting, expressions, and storytelling through visual direction.",
    type: "video",
    video: "/projects/acting-1.MOV",
  },

  {
    id: 2,
    category: "ACTING CONTENT",
    title: "Character Performance",
    description:
      "A character-based acting project focused on emotion, screen presence, and natural performance.",
    type: "video",
    video: "/projects/acting-2.MOV",
  },

  // ================= CONTENT WORKS =================

  {
    id: 3,
    category: "CONTENT WORKS",
    title: "Social Media Edit",
    description:
      "A short-form content edit created for social media with engaging cuts, pacing, and visual storytelling.",
    type: "video",
    video: "/projects/content-1.MOV",
  },

  {
    id: 4,
    category: "CONTENT WORKS",
    title: "Creative Content Edit",
    description:
      "A creative video edit combining storytelling, transitions, music, and visual elements.",
    type: "video",
    video: "/projects/content-2.MOV",
  },

  {
    id: 5,
    category: "CONTENT WORKS",
    title: "Branding Content",
    description:
      "A promotional content piece designed to communicate a brand idea through visual storytelling.",
    type: "video",
    video: "/projects/content-3.MOV",
  },

  {
    id: 6,
    category: "CONTENT WORKS",
    title: "Reels Edit",
    description:
      "A dynamic short-form video created for social media platforms.",
    type: "video",
    video: "/projects/content-4.MOV",
  },

  {
    id: 7,
    category: "CONTENT WORKS",
    title: "Promotional Video",
    description:
      "A promotional video focused on creative visuals and engaging storytelling.",
    type: "video",
    video: "/projects/content-5.MOV",
  },

  {
    id: 8,
    category: "CONTENT WORKS",
    title: "Creative Reel",
    description:
      "A creative reel combining transitions, music, effects, and storytelling.",
    type: "video",
    video: "/projects/content-6.MOV",
  },

  {
    id: 9,
    category: "CONTENT WORKS",
    title: "Storytelling Edit",
    description:
      "A storytelling-focused edit created through visuals, pacing, and sound.",
    type: "video",
    video: "/projects/content-7.MOV",
  },

  {
    id: 10,
    category: "CONTENT WORKS",
    title: "Digital Content",
    description:
      "A creative digital content project designed for audience engagement.",
    type: "video",
    video: "/projects/content-8.MOV",
  },

  {
    id: 11,
    category: "CONTENT WORKS",
    title: "Social Content",
    description:
      "An engaging social media video created with creative editing techniques.",
    type: "video",
    video: "/projects/content-9.MOV",
  },

  {
    id: 12,
    category: "CONTENT WORKS",
    title: "Visual Story",
    description:
      "A visual storytelling project combining creative shots and editing.",
    type: "video",
    video: "/projects/content-10.MOV",
  },

  {
    id: 13,
    category: "CONTENT WORKS",
    title: "Short Form Content",
    description:
      "A short-form video created with engaging cuts and dynamic pacing.",
    type: "video",
    video: "/projects/content-11.MOV",
  },

  {
    id: 14,
    category: "CONTENT WORKS",
    title: "Creative Video",
    description:
      "A creative video edit focused on visuals, transitions, and storytelling.",
    type: "video",
    video: "/projects/content-12.MOV",
  },

  {
    id: 15,
    category: "CONTENT WORKS",
    title: "Content Campaign",
    description:
      "A creative content piece developed for digital media and audience engagement.",
    type: "video",
    video: "/projects/content-13.MOV",
  },

  {
    id: 16,
    category: "CONTENT WORKS",
    title: "Media Edit",
    description:
      "A polished media edit combining creative visuals, music, and pacing.",
    type: "video",
    video: "/projects/content-14.MOV",
  },

  {
    id: 17,
    category: "CONTENT WORKS",
    title: "Final Content Work",
    description:
      "A complete content project showcasing creative editing and visual storytelling.",
    type: "video",
    video: "/projects/content-15.MOV",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "ACTING CONTENT", "CONTENT WORKS"];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#111111]
        px-6
        py-20
        text-white
        transition-colors
        duration-500
        sm:px-10
        md:px-14
        lg:px-20
        lg:py-28
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[85%]
            -translate-x-1/2
            bg-white/10
          "
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -right-40
            top-20
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-white/[0.04]
          "
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-20
            left-[10%]
            h-1.5
            w-1.5
            rounded-full
            bg-white
          "
        />
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">
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
            duration: 0.8,
          }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-white" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              Selected Work
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2
              className="
                text-5xl
                font-black
                uppercase
                leading-[0.85]
                tracking-[-0.06em]
                sm:text-6xl
                lg:text-8xl
              "
            >
              Creative
              <br />
              <span className="text-white/25">Works.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
              A collection of acting performances, creative edits, and content
              projects crafted through storytelling and visual creativity.
            </p>
          </div>
        </motion.div>

        {/* ================= FILTER ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-10
            flex
            flex-wrap
            gap-2
            border-y
            border-white/10
            py-4
          "
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                rounded-full
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]
                transition-all
                duration-300
                ${
                  activeFilter === filter
                    ? "bg-white text-black"
                    : "text-white/40 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <motion.div
          layout
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                onClick={() => setSelectedProject(project)}
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#181818]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-white/25
                "
              >
                {/* ================= VIDEO PREVIEW ================= */}

                <div className="relative aspect-[4/5] overflow-hidden bg-[#222222]">
                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="
                      h-full
                      w-full
                      object-cover
                      opacity-70
                      transition-all
                      duration-700
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />

                  {/* Dark overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/10
                      to-transparent
                      opacity-90
                    "
                  />

                  {/* Play Icon */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-14
                      w-14
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-black/30
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:bg-white
                      group-hover:text-black
                    "
                  >
                    <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                  </div>

                  {/* Project Number */}

                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-white/50
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Bottom Content */}

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p
                      className="
                        mb-2
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-white/45
                      "
                    >
                      {project.category}
                    </p>

                    <div className="flex items-end justify-between gap-4">
                      <h3
                        className="
                          text-xl
                          font-bold
                          leading-tight
                          tracking-tight
                          sm:text-2xl
                        "
                      >
                        {project.title}
                      </h3>

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-black
                          transition-transform
                          duration-500
                          group-hover:rotate-45
                        "
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= BOTTOM TEXT ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-6
          "
        >
          <p className="text-xs uppercase tracking-[0.15em] text-white/30">
            Video Editing · Acting · Content
          </p>

          <p className="text-xs text-white/30">
            {filteredProjects.length} Projects
          </p>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* ================= PROJECT MODAL ========================= */}
      {/* ========================================================= */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              backdrop-blur-md
              sm:p-8
            "
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                flex
                max-h-[92vh]
                w-full
                max-w-4xl
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-[#111111]
                shadow-2xl
              "
            >
              {/* ================= MODAL HEADER ================= */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-6
                  border-b
                  border-white/10
                  p-5
                  sm:p-7
                "
              >
                <div>
                  <p
                    className="
                      mb-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-white/40
                    "
                  >
                    {selectedProject.category}
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      sm:text-3xl
                    "
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Close */}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    text-white/70
                    transition-all
                    duration-300
                    hover:rotate-90
                    hover:bg-white
                    hover:text-black
                  "
                  aria-label="Close project"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* ================= VIDEO ================= */}

              <div className="bg-black">
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  playsInline
                  className="
                    mx-auto
                    max-h-[60vh]
                    w-full
                    object-contain
                  "
                />
              </div>

              {/* ================= MODAL FOOTER ================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  border-t
                  border-white/10
                  p-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:p-7
                "
              >
                <p className="max-w-2xl text-sm leading-6 text-white/45">
                  {selectedProject.description}
                </p>

                <span
                  className="
                    shrink-0
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Mohamed Sharuk
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
