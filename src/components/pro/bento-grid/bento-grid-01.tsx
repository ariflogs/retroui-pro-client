"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Triangle, Square, Hash, Star } from "lucide-react";

export default function BentoGridOne() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "Bold & Raw Features",
      description: "Uncompromising design with raw aesthetic appeal.",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-yellow-200",
      expandedContent:
        "Neo-brutalism embraces bold, unfiltered design elements that stand out. We use high-contrast colors, sharp edges, and unapologetic visuals to create memorable experiences that leave a lasting impression.",
    },
    {
      id: 2,
      title: "Raw Elements",
      description: "Embracing imperfection in design.",
      icon: <Square className="w-8 h-8" />,
      color: "bg-blue-200",
      expandedContent:
        "Our design philosophy celebrates the beauty in imperfection. We intentionally incorporate raw, unpolished elements that give our interfaces character and authenticity, creating a refreshing contrast to overly polished digital experiences.",
    },
    {
      id: 3,
      title: "Geometric Patterns",
      description: "Structured chaos in visual form.",
      icon: <Triangle className="w-8 h-8" />,
      color: "bg-green-200",
      expandedContent:
        "Geometric patterns form the backbone of our neo-brutalist approach. We use bold shapes, grids, and unexpected arrangements to create visual interest and guide the user's eye through the interface in surprising ways.",
    },
    {
      id: 4,
      title: "Playful Interactions",
      description: "Unexpected moments of delight.",
      icon: <Star className="w-8 h-8" />,
      color: "bg-purple-200",
      expandedContent:
        "We believe digital experiences should be fun. Our interfaces incorporate playful interactions, surprising animations, and unexpected elements that bring joy to everyday tasks and keep users engaged with your product.",
    },
    {
      id: 5,
      title: "Typographic Contrast",
      description: "Bold statements through text.",
      icon: <Hash className="w-8 h-8" />,
      color: "bg-pink-200",
      expandedContent:
        "Typography plays a central role in our neo-brutalist designs. We use dramatic size contrasts, unexpected placements, and bold font choices to create hierarchy and visual interest that commands attention and improves readability.",
    },
  ];

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`container-neo-${item.id}`}
              className={`${item.color} p-6 border-4 shadow-lg cursor-pointer overflow-hidden relative ${
                index === 0 ? "col-span-1 md:col-span-2 row-span-1" : ""
              }`}
              onClick={() => setExpandedId(item.id)}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                {index === 0 && (
                  <div className="absolute -top-32 -right-28 w-60 h-60 border-[16px] border-black/25 bg-transparent flex items-center justify-center rounded-full " />
                )}

                <motion.div
                  layoutId={`icon-neo-${item.id}`}
                  className="mb-6 bg-white p-3 rounded-none inline-block border-2 border-black transform"
                >
                  {item.icon}
                </motion.div>

                <motion.h3
                  layoutId={`title-neo-${item.id}`}
                  className="text-2xl font-bold mb-2"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-neo-${item.id}`}
                  className="font-medium text-sm text-muted-foreground mt-3 border-l-5 pl-2"
                >
                  {item.description}
                </motion.p>
              </div>

              {/* Popup indication dots */}
              <div className="absolute bottom-3 right-3 flex space-x-1">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-10"
              onClick={() => setExpandedId(null)}
            />

            <motion.div
              layoutId={`container-neo-${expandedId}`}
              className={`${items.find((item) => item.id === expandedId)?.color} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-none border-4 border-black shadow-xl z-20 w-11/12 max-w-2xl overflow-hidden`}
            >
              <div className="relative z-10">
                <motion.div
                  layoutId={`icon-neo-${expandedId}`}
                  className="mb-4 bg-white p-4 rounded-none inline-block border-2 transform"
                >
                  {items.find((item) => item.id === expandedId)?.icon}
                </motion.div>
                <motion.h3
                  layoutId={`title-neo-${expandedId}`}
                  className="text-2xl font-bold mb-6"
                >
                  {items.find((item) => item.id === expandedId)?.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-4 border-l-4 border-black pl-3"
                >
                  {
                    items.find((item) => item.id === expandedId)
                      ?.expandedContent
                  }
                </motion.p>

                <motion.button
                  className="absolute top-0 right-0 bg-white p-2 border-2 border-black transform rotate-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedId(null);
                  }}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
