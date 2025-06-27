import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { motion } from 'framer-motion'

const pictures = [
  
  "B2",
  "B3",
  "B4",
  "B5",
  "B6",
  "B7",
  "B8",
  "B9",
  "B10",
  "B11",
  "B12",
  "B13",
  "B14",
  "B15",
  "B16",
  "B17",
  "B18",
  "B19",
  "B20",
  "B21",
  "B22",
  "B23",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
  
    const tryPlayAudio = () => {
      audio.play().catch((err) => {
        console.warn("Autoplay blocked, waiting for interaction...");
      });
    };
  
    // Check if user already interacted
    if (document.readyState === 'complete') {
      tryPlayAudio();
    }
  
    // Wait for first user interaction
    const enableAudio = () => {
      tryPlayAudio();
      window.removeEventListener('click', enableAudio);
    };
  
    window.addEventListener('click', enableAudio);
  
    return () => {
      window.removeEventListener('click', enableAudio);
    };
  }, [page]);
  
  return (
    <>
      {/* <div className=" flex items-center justify-center -rotate-2 select-none overflow-hidden">
        <div className="relative w-full">
          <motion.div
            className="flex items-center gap-8 w-max px-8 whitespace-nowrap"
            animate={{ x: ['20%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
            }}
          >
           
            <h1 className="shrink-0 text-white text-[10rem] font-black">Mid-Valley</h1>
            <h2 className="shrink-0 text-white text-[8rem] italic font-light">College</h2>
            <h2 className="shrink-0 text-white text-[12rem] font-bold">Your</h2>
            <h2 className="shrink-0 text-transparent text-[12rem] font-bold italic outline-text">Journey</h2>
            <h2 className="shrink-0 text-white text-[9rem] font-medium">to</h2>
            <h2 className="shrink-0 text-white text-[9rem] font-extralight italic">be</h2>
            <h2 className="shrink-0 text-white text-[13rem] font-bold">a</h2>
            <h2 className="shrink-0 text-transparent text-[13rem] font-bold italic outline-text">Champion</h2>
 
            <h1 className="shrink-0 text-white text-[10rem] font-black">Mid-Valley</h1>
            <h2 className="shrink-0 text-white text-[8rem] italic font-light">College</h2>
            <h2 className="shrink-0 text-white text-[12rem] font-bold">Your</h2>
            <h2 className="shrink-0 text-transparent text-[12rem] font-bold italic outline-text">Journey</h2>
            <h2 className="shrink-0 text-white text-[9rem] font-medium">to</h2>
            <h2 className="shrink-0 text-white text-[9rem] font-extralight italic">be</h2>
            <h2 className="shrink-0 text-white text-[13rem] font-bold">a</h2>
            <h2 className="shrink-0 text-transparent text-[13rem] font-bold italic outline-text">Champion</h2>
          </motion.div>
        </div>
      </div>
      */}
    </>
  );
};
