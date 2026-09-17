import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Play, ExternalLink } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// =====================================================
// PROJECT DATA
// =====================================================

const projects = [
  {
    id: 1,
    category: "CONTENT CREATION",
    type: "video",
    title: "Content Creation 01",
    video: "/projects/content-1.mp4",
  },

  {
    id: 2,
    category: "CONTENT CREATION",
    type: "video",
    title: "Content Creation 02",
    video: "/projects/content-2.mp4",
  },

  {
    id: 3,
    category: "CONTENT CREATION",
    type: "video",
    title: "Content Creation 03",
    video: "/projects/content-3.mp4",
  },

  {
    id: 4,
    category: "CLIENT PROJECTS",
    type: "video",
    title: "Client Project 01",
    video: "/projects/client work-1.MP4",
  },

  {
    id: 5,
    category: "CLIENT PROJECTS",
    type: "video",
    title: "Client Project 02",
    video: "/projects/client work-2.MP4",
  },

  {
    id: 6,
    category: "THEATRICAL MASHUPS",
    type: "video",
    title: "Theatrical Mashup 01",
    video: "/projects/theatrical-mashup-1.mp4",
  },

  {
    id: 7,
    category: "ACTING PERFORMANCES",
    type: "video",
    title: "Acting Performance 01",
    video: "/projects/acting-1.mp4",
  },

  {
    id: 8,
    category: "ACTING PERFORMANCES",
    type: "video",
    title: "Acting Performance 02",
    video: "/projects/acting-2.mp4",
  },
];

// =====================================================
// MORE WORK LINKS
// =====================================================

const driveLinks = {
  "CONTENT CREATION":
    "https://drive.google.com/drive/folders/1bhFY15QmC8O3P8iRXGD1go2jodu92x9C",

  "CLIENT PROJECTS":
    "https://drive.google.com/drive/folders/1iZzWzfaHozMbLSeAuahqslzSwpU5sDKC",

  "THEATRICAL MASHUPS":
    "https://drive.google.com/drive/folders/1Tf_CRuOwgs-rhUeG7GJpqrfLKy-nrHtf",
};
function ProjectVideo({ src, className }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "150px 0px",
        threshold: 0.1,
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      muted
      loop
      playsInline
      preload="auto"
      onCanPlay={(event) => {
        event.currentTarget.play().catch(() => {});
      }}
      className={className}
    />
  );
}
// =====================================================
// COMPONENT
// =====================================================

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  // =====================================================
  // FILTERS
  // =====================================================

  const filters = [
    "ALL",
    "CONTENT CREATION",
    "CLIENT PROJECTS",
    "THEATRICAL MASHUPS",
    "ACTING PERFORMANCES",
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // =====================================================
  // OPEN PROJECT
  // =====================================================

  const openProject = (project) => {
    setActiveProject(project);
  };

  // =====================================================
  // CLOSE PROJECT
  // =====================================================

  const closeProject = () => {
    setActiveProject(null);
  };

  // =====================================================
  // ESC KEY
  // =====================================================

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  // =====================================================
  // LOCK BODY SCROLL
  // =====================================================

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#0f0f0f]
        px-4
        py-10
        text-white

        sm:px-6
        sm:py-12

        md:px-8
        md:py-14

        lg:px-14
        lg:py-16

        xl:px-20
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
          className="mb-10 sm:mb-12 md:mb-14"
        >
          {/* SECTION LABEL */}

          <div className="mb-4 flex items-center gap-3 sm:gap-4">
            <span className="h-px w-7 bg-white/50 sm:w-10" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-white/50
              "
            >
              Projects
            </p>
          </div>

          {/* TITLE */}

          <div
            className="
              flex
              flex-col
              gap-6

              sm:gap-8

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <h2
              className="
                text-5xl
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.06em]

                sm:text-6xl

                md:text-7xl

                lg:text-8xl
              "
            >
              Creative
              <br />
              <span className="text-white/25">Works.</span>
            </h2>
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
            mb-8
            border-y
            border-white/10
            py-3

            sm:mb-10
            sm:py-4
          "
        >
          <div
            className="
              flex
              w-full
              gap-1.5
              overflow-x-auto
              pb-1

              sm:flex-wrap
              sm:justify-center
              sm:gap-2
              sm:overflow-visible
              sm:pb-0

              lg:justify-start
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`
                  shrink-0
                  whitespace-nowrap
                  rounded-full
                  px-3
                  py-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  transition-all
                  duration-300

                  sm:px-4
                  sm:py-2
                  sm:text-[9px]
                  sm:tracking-[0.15em]

                  md:px-5
                  md:py-2.5
                  md:text-[10px]

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
          </div>
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
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-3
            lg:gap-5
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
                  rounded-xl
                  border
                  border-white/10
                  bg-[#181818]
                  transition-all
                  duration-500

                  sm:rounded-2xl

                  hover:-translate-y-1
                  hover:border-white/25

                  lg:hover:-translate-y-2
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
                  {/* LOOPING MUTED VIDEO */}
                  <ProjectVideo
                    src={project.video}
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

                  {/* SOFT OVERLAY */}

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

                  {/* LARGE NUMBER */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      z-10
                      text-5xl
                      font-black
                      tracking-[-0.08em]
                      text-white/[0.08]

                      sm:left-6
                      sm:top-6
                      sm:text-7xl
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* PLAY BUTTON */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-10
                      flex
                      h-12
                      w-12
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

                      sm:h-14
                      sm:w-14

                      md:h-16
                      md:w-16

                      group-hover:scale-110
                      group-hover:bg-white
                      group-hover:text-black
                    "
                  >
                    <Play
                      className="
                        ml-0.5
                        h-4
                        w-4

                        sm:h-5
                        sm:w-5

                        md:h-6
                        md:w-6
                      "
                      fill="currentColor"
                    />
                  </div>

                  {/* VIDEO LABEL */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      z-10
                      rounded-full
                      border
                      border-white/10
                      bg-black/40
                      px-2.5
                      py-1
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white/70
                      backdrop-blur-md

                      sm:right-5
                      sm:top-5
                      sm:px-3
                      sm:py-1.5
                      sm:text-[8px]
                      sm:tracking-[0.2em]
                    "
                  >
                    VIDEO
                  </div>

                  {/* BOTTOM GRADIENT */}

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

                  {/* BOTTOM CONTENT */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-20
                      flex
                      items-center
                      justify-between
                      p-4

                      sm:p-5
                    "
                  >
                    <motion.p
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white

                        sm:text-[10px]
                        sm:tracking-[0.25em]
                      "
                    >
                      {project.category}
                    </motion.p>

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-black
                        transition-transform
                        duration-500

                        sm:h-9
                        sm:w-9

                        group-hover:rotate-45
                      "
                    >
                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5

                          sm:h-4
                          sm:w-4
                        "
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =====================================================
            EXPLORE MORE
            CONTENT + CLIENT PROJECTS + THEATRICAL MASHUPS
        ===================================================== */}

        {driveLinks[activeFilter] && (
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
              duration: 0.5,
            }}
            className="
              mt-7
              flex
              justify-center

              sm:mt-8
            "
          >
            <a
              href={driveLinks[activeFilter]}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                px-5
                py-2.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white/60
                transition-all
                duration-300

                sm:gap-3
                sm:px-6
                sm:py-3
                sm:text-[10px]
                sm:tracking-[0.18em]

                hover:border-white/30
                hover:bg-white
                hover:text-black
              "
            >
              <span>
                {activeFilter === "CONTENT CREATION"
                  ? "Explore More Content"
                  : activeFilter === "CLIENT PROJECTS"
                    ? "Explore More Client Work"
                    : "Explore More Theatrical Mashups"}
              </span>

              <ExternalLink
                className="
                  h-3
                  w-3

                  sm:h-3.5
                  sm:w-3.5

                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </motion.div>
        )}
      </div>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      <AnimatePresence>
        {activeProject && (
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
              p-2
              backdrop-blur-md

              sm:p-4

              md:p-6

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
                h-[94vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-[#0f0f0f]

                sm:h-[92vh]
                sm:rounded-2xl
              "
            >
              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-end
                  border-b
                  border-white/10
                  bg-[#111111]
                  p-4

                  sm:p-5
                  md:p-6
                "
              >
                {/* CLOSE BUTTON */}

                <motion.button
                  type="button"
                  onClick={closeProject}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 90,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    text-white/70
                    transition-colors
                    duration-300

                    hover:border-white
                    hover:bg-white
                    hover:text-black

                    sm:h-10
                    sm:w-10
                  "
                  aria-label="Close project"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </div>

              {/* =================================================
                  VIDEO AREA
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
                    key={activeProject.video}
                    src={activeProject.video}
                    controls
                    autoPlay
                    playsInline
                    preload="none"
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
                  items-center
                  justify-end
                  border-t
                  border-white/10
                  bg-[#111111]
                  p-3

                  sm:p-4

                  md:p-5
                "
              >
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white/30

                    sm:text-[9px]
                    sm:tracking-[0.2em]
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
