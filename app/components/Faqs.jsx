"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "../data";
import Image from "next/image";

export default function Faqs() {
  const [click, setClick] = useState(false);

  const getClickedButton = (index) => {
    setClick(index);
  };
  return (
    <section className=" bg-black px-10 py-28">
      <h1 className=" tracking-tighter max-w-sm md:max-w-4xl md:text-8xl text-4xl">
        Frequently asked questions
      </h1>

      <div className="mt-16 flex flex-col gap-6">
        {questions.map((item, index) => (
          <div
            key={index}
            onClick={() => getClickedButton(index)}
            className=" flex flex-col border-b border-gray-400 pb-2 h-auto cursor-pointer w-full"
          >
            <div className="flex items-center w-full justify-between">
              <h1 className=" sm:text-lg text-[7px]">{item.title}</h1>
              <Image
                src={item.svg}
                className="md:w-5 w-3 h-3 md:h-5 fill-white text-white "
              />
            </div>

            <AnimatePresence>
              {click === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  exit={{ height: 0, opacity: 0 }}
                  className=" overflow-hidden text-[10px] sm:text-lg"
                >
                  <p className=" mt-4">{item.p}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
