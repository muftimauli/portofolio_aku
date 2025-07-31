'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJava, FaMicrochip, FaLeaf, FaPaintBrush, FaDog, FaSeedling, FaFlask, FaCube, FaFutbol } from 'react-icons/fa';
import { SiNextdotjs, SiBlender } from 'react-icons/si';
import { GiPaintBrush, GiGuitar } from 'react-icons/gi';

const icons = [
  { icon: <FaHtml5 size={32} className="text-orange-500" /> },
  { icon: <FaCss3Alt size={32} className="text-blue-500" /> },
  { icon: <FaJava size={32} className="text-red-600" /> },
  { icon: <SiNextdotjs size={32} className="text-white" /> },
  { icon: <FaMicrochip size={32} className="text-gray-400" /> },
  { icon: <FaLeaf size={32} className="text-green-500" /> },
  { icon: <SiBlender size={32} className="text-orange-400" /> },
  { icon: <FaPaintBrush size={32} className="text-purple-500" /> },
  { icon: <GiPaintBrush size={32} className="text-yellow-400" /> },
  { icon: <GiGuitar size={32} className="text-red-500" /> },
  { icon: <FaDog size={32} className="text-amber-500" /> },
  { icon: <FaSeedling size={32} className="text-green-600" /> },
  { icon: <FaFlask size={32} className="text-blue-600" /> },
  { icon: <FaCube size={32} className="text-stone-400" /> },
  { icon: <FaFutbol size={32} className="text-white" /> },
];

export default function IconGilir() {
  return (
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="overflow-hidden border-2 border-cyan-400/30 animate-pulse rounded-lg h-fit">
        <div className="flex animate-scroll whitespace-nowrap">
          {icons.map((item, index) => (
            <motion.div
              key={`icon-${index}`}
              className="flex flex-col items-center mx-2 sm:mx-3"
              animate={{
                rotate: [0, 5, -5, 0],
                transition: { repeat: Infinity, duration: 0.3 },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="bg-gray-900/50 backdrop-blur-md p-1 rounded-lg border-2 border-cyan-500 shadow-[0_0_8px_#22d3ee] hover:shadow-[0_0_12px_#22d3ee] transition-all duration-200"
              >
                {item.icon}
              </div>
            </motion.div>
          ))}
          {icons.map((item, index) => (
            <motion.div
              key={`icon-duplicate-${index}`}
              className="flex flex-col items-center mx-2 sm:mx-3"
              animate={{
                rotate: [0, 5, -5, 0],
                transition: { repeat: Infinity, duration: 0.3 },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="bg-gray-900/50 backdrop-blur-md p-1 rounded-lg border-2 border-cyan-500 shadow-[0_0_8px_#22d3ee] hover:shadow-[0_0_12px_#22d3ee] transition-all duration-200"
              >
                {React.cloneElement(item.icon, {
                  size: item.icon.props.size,
                  className: item.icon.props.className,
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          .max-w-6xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .animate-scroll > div {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }
          .animate-scroll > div > div > svg {
            width: 24px;
            height: 24px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-scroll > div {
            margin-left: 0.75rem;
            margin-right: 0.75rem;
          }
          .animate-scroll > div > div > svg {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </div>
  );
}