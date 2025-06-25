// import React, { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { motion } from "framer-motion";

// const demoVideos = [
//    {
//     id: 1,
//     src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812002/gbht7p6zhb08wf8od6kl.mp4",
//     title: "Video Samples",
//     tag: "",
//   },
//   {
//     id: 2,
//     src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812002/aoxtkf9xrwlzn62p4rtt.mp4",
//     title: "Video Samples",
//     tag: "",
//   },
//   {
//     id: 3,
//     src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812001/dqn75zmvkbm3tmrtgyvr.mp4",
//     title: "Video Samples",
//     tag: "",
//   },
//    {
//     id: 5,
//     src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812002/gbht7p6zhb08wf8od6kl.mp4",
//     title: "Video Samples",
//     tag: "",
//   },
//   {
//     id: 4,
//     src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812002/aoxtkf9xrwlzn62p4rtt.mp4",
//     title: "Video Samples",
//     tag: "",
//   },
//   {
//     id: 6,
//     src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812001/dqn75zmvkbm3tmrtgyvr.mp4",
//     title: "Video Samples",
//     tag: "",
//   },
// ];

// export default function EditorDemos() {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   return (
//     <div className="p-6 ">
//       <h2 className="text-3xl font-bold mb-2">🎬 Video Demos</h2>
//       <p className="text-gray-600 mb-6">Vertical edits for Reels, Shorts, and TikTok</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {demoVideos.map((video) => (
//           <motion.div
//             key={video.id}
//             className="aspect-[9/14] w-full rounded-xl overflow-hidden shadow-lg cursor-pointer relative border border-gray-50"
//             whileHover={{ scale: 1.03 }}
//             onClick={() => setSelectedVideo(video)}
//           >
//             <video
//               src={video.src}
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover"
//                onMouseEnter={(e) => e.currentTarget.play()}
//               onMouseLeave={(e) => e.currentTarget.pause()}
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2">
//               <span className="font-semibold">{video.title}</span> · {video.tag}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal View */}
//       {selectedVideo && (
//         <Dialog open={true} onClose={() => setSelectedVideo(null)} className="fixed z-50 inset-0 bg-black bg-opacity-80 flex items-center justify-center">
//           <div className="bg-black rounded-xl p-4 w-[90vw] max-w-[400px] aspect-[9/16] relative">
//             <video
//               src={selectedVideo.src}
//               controls
//               autoPlay
//               className="w-full h-full object-contain rounded-lg"
//               pl
//             />
//             <button
//               onClick={() => setSelectedVideo(null)}
//               className="absolute top-2 right-2 bg-white text-black rounded-full px-2 py-1 text-sm"
//             >
//               ✕
//             </button>
//           </div>
//         </Dialog>
//       )}
//     </div>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const demoVideos = [
   {
    id: 1,
    src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812002/gbht7p6zhb08wf8od6kl.mp4",
    title: "Video Samples",
    tag: "",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812002/aoxtkf9xrwlzn62p4rtt.mp4",
    title: "Video Samples",
    tag: "",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812001/dqn75zmvkbm3tmrtgyvr.mp4",
    title: "Video Samples",
    tag: "",
  },
   {
    id: 5,
    src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812002/gbht7p6zhb08wf8od6kl.mp4",
    title: "Video Samples",
    tag: "",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812002/aoxtkf9xrwlzn62p4rtt.mp4",
    title: "Video Samples",
    tag: "",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dsbqmtwnv/video/upload/v1750812001/dqn75zmvkbm3tmrtgyvr.mp4",
    title: "Video Samples",
    tag: "",
  },
];

export default function EditorDemos() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [centerIndex, setCenterIndex] = useState(2); // Start from center
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === centerIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [centerIndex]);

  const shiftLeft = () => {
    setCenterIndex((prev) => (prev - 1 + demoVideos.length) % demoVideos.length);
  };

  const shiftRight = () => {
    setCenterIndex((prev) => (prev + 1) % demoVideos.length);
  };

  const getVideoAt = (offset) => {
    const index = (centerIndex + offset + demoVideos.length) % demoVideos.length;
    return demoVideos[index];
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-2">🎬 Video Demos</h2>
      <p className="text-gray-600 mb-6">Vertical edits for Reels, Shorts, and TikTok</p>

      <div className="relative flex items-center justify-center">
        <button
          onClick={shiftLeft}
          className="absolute left-0 z-10 bg-white shadow p-2 rounded-full hover:text-black"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-4 items-center">
          {[-1, 0, 1].map((offset) => {
            const video = getVideoAt(offset);
            const index = (centerIndex + offset + demoVideos.length) % demoVideos.length;
            const isCenter = offset === 0;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: isCenter ? 1 : 0.85 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl overflow-hidden shadow-lg relative border border-gray-50 ${
                  isCenter ? "aspect-[9/16] w-64" : "aspect-[9/16] w-40 opacity-60"
                }`}
                onClick={() => setSelectedVideo(video)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2">
                  <span className="font-semibold">{video.title}</span> · {video.tag}
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={shiftRight}
          className="absolute right-0 z-10 bg-white shadow p-2 rounded-full hover:text-black"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Modal View */}
      {selectedVideo && (
        <Dialog
          open={true}
          onClose={() => setSelectedVideo(null)}
          className="fixed z-50 inset-0 bg-black bg-opacity-80 flex items-center justify-center"
        >
          <div className="bg-black rounded-xl p-4 w-[90vw] max-w-[400px] aspect-[9/16] relative">
            <video
              src={selectedVideo.src}
              controls
              autoPlay
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full px-2 py-1 text-sm"
            >
              ✕
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
}
