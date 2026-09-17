import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Play, X } from "lucide-react";
import { useEffect, useState } from "react";

const theatreResponse = {
  title: "Theatrical Response",
  category: "THEATRE RESPONSE",
  video: "/projects/theatre response.MOV",
  driveLink:
    " https://drive.google.com/drive/folders/1HNE3cl7pHOPwAqwPklc2WNGg8O9qlz6_",
};

function TheatreResponse() {
  const [selectedVideo, setSelectedVideo] = useState(false);

  const closeVideo = () => {
    setSelectedVideo(false);
  };

  useEffect(() => {
    if (!selectedVideo) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <section
      id="theatre-response"
      className="
        relative
        overflow-hidden
        bg-[#0f0f0f]
        px-6
        py-10
        text-white
      
      "
    >
      {/* BACKGROUND */}
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
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-4">
            <p
              className="
               text-xs
      font-bold
      uppercase
      tracking-[0.3em]
      text-white/50
              "
            >
              Audience Reception
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
              Theatre
              <br />
              <span className="text-white/25">Response.</span>
            </h2>
          </div>
        </motion.div>

        {/* VIDEO CARD */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          onClick={() => setSelectedVideo(true)}
          className="
            group
            relative
            mx-auto
            w-full
            max-w-4xl
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
          <div
            className="
              relative
              aspect-video
              w-full
              overflow-hidden
              bg-black
            "
          >
            {/* VIDEO */}
            <video
              src={theatreResponse.video}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
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

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-black/25
                transition-all
                duration-500
                group-hover:bg-black/10
              "
            />

            {/* NUMBER */}
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
              01
            </div>

            {/* PLAY BUTTON */}
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

            {/* VIDEO LABEL */}
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

            {/* TITLE */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-20
                p-5
                sm:p-7
              "
            >
              <div className="flex items-end justify-between gap-4">
                <h3
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
                  {theatreResponse.title}
                </h3>

                <div
                  className="
                    flex
                    h-10
                    w-10
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

        {/* EXPLORE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <a
            href={theatreResponse.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              bg-white/[0.03]
              px-6
              py-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white/60
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-white
              hover:text-black
            "
          >
            <span>Explore More Theatre Response</span>

            <ExternalLink
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </motion.div>
      </div>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              bg-black/95
              p-3
              backdrop-blur-md
              sm:p-6
              lg:p-8
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
                max-h-[90vh]
                w-full
                max-w-6xl
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0f0f0f]
              "
            >
              {/* MODAL HEADER */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  bg-[#111111]
                  p-5
                  sm:p-6
                "
              >
                <div>
                  <h3
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
                    Theatrical Response
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeVideo}
                  aria-label="Close video"
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
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* VIDEO */}
              <div
                className="
                  flex
                  min-h-0
                  flex-1
                  items-center
                  justify-center
                  bg-black
                "
              >
                <video
                  key={theatreResponse.video}
                  src={theatreResponse.video}
                  controls
                  autoPlay
                  playsInline
                  preload="none"
                  className="
                    max-h-[calc(90vh-90px)]
                    w-full
                    object-contain
                  "
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default TheatreResponse;
