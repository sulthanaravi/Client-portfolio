import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Play } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  // ================= ACTING CONTENT =================

  {
    id: 1,
    category: "ACTING CONTENT",
    type: "video",
    title: "Acting Performance 01",
    description: "Acting performance and creative visual content.",
    video: "/projects/acting-1.MOV",
  },

  {
    id: 2,
    category: "ACTING CONTENT",
    type: "video",
    title: "Acting Performance 02",
    description: "Acting performance and creative visual content.",
    video: "/projects/acting-2.MOV",
  },

  // ================= CONTENT WORKS =================

  {
    id: 3,
    category: "CONTENT WORKS",
    type: "video",
    title: "Content Work 01",
    description: "Creative video editing and content production.",
    video: "/projects/content-1.MOV",
  },

  {
    id: 4,
    category: "CONTENT WORKS",
    type: "video",
    title: "Content Work 02",
    description: "Creative video editing and content production.",
    video: "/projects/content-2.MOV",
  },

  {
    id: 5,
    category: "CONTENT WORKS",
    type: "video",
    title: "Content Work 03",
    description: "Creative video editing and content production.",
    video: "/projects/content-3.MOV",
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

  // =====================================================
  // OPEN PROJECT
  // =====================================================

  const openProject = (project) => {
    setSelectedProject(project);
  };

  // =====================================================
  // CLOSE PROJECT
  // =====================================================

  const closeProject = () => {
    setSelectedProject(null);
  };

  // =====================================================
  // ESC KEY
  // =====================================================

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // =====================================================
  // BODY SCROLL LOCK
  // =====================================================

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#0f0f0f]
        px-6
        py-20
        text-white
        sm:px-10
        md:px-14
        lg:px-20
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      >
        {/* Top Line */}

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

        {/* Rotating Circle */}

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

        {/* Floating Dot */}

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

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

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

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-white/50
              "
            >
              Selected Work
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              justify-between
              gap-8
              lg:flex-row
              lg:items-end
            "
          >
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

            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-white/45
                sm:text-base
              "
            >
              A collection of acting performances, creative edits, and content
              projects crafted through storytelling and visual creativity.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            FILTERS
        ===================================================== */}

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
              type="button"
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

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <motion.div
          layout
          className="
            grid
            w-full
            grid-cols-1
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
                onClick={() => openProject(project)}
                className="
                  group
                  relative
                  w-full
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
                {/* =================================================
                    VIDEO CARD
                ================================================= */}

                <div
                  className="
                    relative
                    aspect-[4/5]
                    w-full
                    overflow-hidden
                    bg-[#222222]
                  "
                >
                  {/* =================================================
                      LOOPING MUTED VIDEO
                  ================================================= */}

                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Dark Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/20
                      transition-all
                      duration-500
                      group-hover:bg-black/10
                    "
                  />

                  {/* Large Number */}

                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      z-10
                      text-7xl
                      font-black
                      tracking-[-0.08em]
                      text-white/[0.08]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Center Play Button */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-10
                      flex
                      h-16
                      w-16
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-black/50
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:bg-white
                      group-hover:text-black
                    "
                  >
                    <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
                  </div>

                  {/* Video Label */}

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      z-10
                      rounded-full
                      border
                      border-white/10
                      bg-black/40
                      px-3
                      py-1.5
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-white/70
                      backdrop-blur-md
                    "
                  >
                    VIDEO
                  </div>

                  {/* Bottom Gradient */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      h-1/2
                      bg-gradient-to-t
                      from-black
                      via-black/60
                      to-transparent
                    "
                  />

                  {/* Bottom Content */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-20
                      p-5
                    "
                  >
                    <p
                      className="
                        mb-2
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-white/60
                      "
                    >
                      {project.category}
                    </p>

                    <div
                      className="
                        flex
                        items-end
                        justify-between
                        gap-4
                      "
                    >
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

        {/* =====================================================
            BOTTOM TEXT
        ===================================================== */}

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
          <p
            className="
              text-xs
              uppercase
              tracking-[0.15em]
              text-white/30
            "
          >
            Video Editing · Acting · Content
          </p>

          <p className="text-xs text-white/30">
            {filteredProjects.length} Projects
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

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
              z-[9999]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/95
              p-3
              backdrop-blur-md
              sm:p-6
              lg:p-8
            "
            onClick={closeProject}
          >
            {/* =================================================
                MODAL CONTAINER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                flex
                h-[90vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0f0f0f]
              "
            >
              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div
                className="
                  relative
                  z-20
                  flex
                  shrink-0
                  items-start
                  justify-between
                  gap-5
                  border-b
                  border-white/10
                  bg-[#111111]
                  p-5
                  sm:p-6
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      mb-2
                      text-[9px]
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
                      text-xl
                      font-bold
                      tracking-tight
                      sm:text-2xl
                    "
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Close Button */}

                <button
                  type="button"
                  onClick={closeProject}
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

              {/* =================================================
                  MODAL VIDEO
              ================================================= */}

              <div
                className="
                  relative
                  min-h-0
                  flex-1
                  overflow-hidden
                  bg-black
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black
                  "
                >
                  <video
                    key={selectedProject.video}
                    src={selectedProject.video}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="
                      block
                      h-full
                      w-full
                      object-contain
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  MODAL FOOTER
              ================================================= */}

              <div
                className="
                  relative
                  z-20
                  flex
                  shrink-0
                  flex-col
                  gap-3
                  border-t
                  border-white/10
                  bg-[#111111]
                  p-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:p-6
                "
              >
                <p
                  className="
                    max-w-2xl
                    text-sm
                    leading-6
                    text-white/45
                  "
                >
                  {selectedProject.description}
                </p>

                <span
                  className="
                    shrink-0
                    text-[9px]
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
