import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";

const feedbackImages = [
  {
    id: 1,
    image: "/images/feedback-1.jpg",
  },
  {
    id: 2,
    image: "/images/feedback-2.jpg",
  },
  {
    id: 3,
    image: "/images/feedback-3.jpg",
  },
  {
    id: 4,
    image: "/images/feedback-4.jpg",
  },
  {
    id: 5,
    image: "/images/feedback-5.jpg",
  },
  {
    id: 6,
    image: "/images/feedback-6.jpg",
  },
];

function ViewersFeedback() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <section
      id="viewers-feedback"
      className="
        relative
        overflow-hidden
        bg-[#0f0f0f]
        px-4
        py-12
        text-white

        sm:px-6
        sm:py-14

        md:px-8
        md:py-16

        lg:px-14
        lg:py-20

        xl:px-20
      "
    >
      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Decorative Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
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

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-12 md:mb-14"
        >
          {/* Small Label */}
          <div className="mb-4 flex items-center gap-3 sm:gap-4">
            <span className="h-px w-7 bg-white sm:w-10 bg-white/50" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-white/50

                sm:text-xs
                sm:tracking-[0.3em]
              "
            >
              Viewer Feedback
            </p>
          </div>

          {/* Heading */}
          <div
            className="
              flex
              flex-col
              gap-5

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
              What They
              <br />
              <span className="text-white/25">Said.</span>
            </h2>
          </div>
        </motion.div>

        {/* ================= IMAGE GRID ================= */}
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-3
          "
        >
          {feedbackImages.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActiveImage(item)}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-[#181818]
                text-left
                outline-none
                transition-all
                duration-500

                sm:rounded-2xl

                hover:border-white/25
              "
            >
              {/* Screenshot */}
              <div className="relative w-full overflow-hidden bg-[#181818]">
                <img
                  src={item.image}
                  alt={`Viewer feedback ${item.id}`}
                  loading="lazy"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-[1.025]
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/0
                    transition-all
                    duration-500
                    group-hover:bg-black/30
                  "
                />

                {/* Number */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    z-10
                    text-4xl
                    font-black
                    tracking-[-0.08em]
                    text-white/20

                    sm:left-5
                    sm:top-5
                    sm:text-5xl
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Open Icon */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    z-10
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-black
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:rotate-45
                    group-hover:opacity-100

                    sm:bottom-5
                    sm:right-5
                    sm:h-10
                    sm:w-10
                  "
                >
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ================= FULLSCREEN VIEWER ================= */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/95
              p-3
              backdrop-blur-md

              sm:p-6

              md:p-8
            "
          >
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
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                flex
                max-h-[94vh]
                max-w-5xl
                items-center
                justify-center
              "
            >
              <img
                src={activeImage.image}
                alt={`Viewer feedback ${activeImage.id}`}
                className="
                  max-h-[94vh]
                  max-w-full
                  rounded-xl
                  object-contain
                  shadow-2xl

                  sm:rounded-2xl
                "
              />

              {/* Close */}
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                aria-label="Close image"
                className="
                  absolute
                  right-2
                  top-2
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/70
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:bg-white
                  hover:text-black

                  sm:-right-4
                  sm:-top-4
                "
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ViewersFeedback;
