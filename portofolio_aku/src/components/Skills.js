'use client';

import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaMicrochip, FaLeaf, FaPaintBrush } from 'react-icons/fa';
import { SiNextdotjs, SiBlender } from 'react-icons/si';
import { GiPaintBrush } from 'react-icons/gi';

export default function Skills() {
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 size={40} className="text-orange-500" />,
      description: 'Mampu membuat struktur web kompleks dengan semantik HTML5 dan aksesibilitas.',
      bgColor: 'bg-purple-500/50',
      glowColor: 'shadow-[0_0_20px_#c084fc,0_0_30px_#c084fc]', // Neon purple
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
      description: 'Menguasai styling responsif, animasi CSS, dan framework seperti Tailwind.',
      bgColor: 'bg-cyan-500/50',
      glowColor: 'shadow-[0_0_20px_#22d3ee,0_0_30px_#22d3ee]', // Neon cyan
    },
    {
      name: 'Java',
      icon: <FaJava size={40} className="text-red-600" />,
      description: 'Berpengalaman dalam pemrograman berorientasi objek dan aplikasi sederhana.',
      bgColor: 'bg-blue-500/50',
      glowColor: 'shadow-[0_0_20px_#3b82f6,0_0_30px_#3b82f6]', // Neon blue
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={40} className="text-white" />,
      description: 'Memahami dasar pengembangan web modern dengan Next.js dan React.',
      bgColor: 'bg-purple-600/50',
      glowColor: 'shadow-[0_0_20px_#a855f7,0_0_30px_#a855f7]', // Neon purple
    },
    {
      name: 'IoT',
      icon: <FaMicrochip size={40} className="text-gray-400" />,
      description: 'Mampu mengembangkan sistem IoT dengan sensor dan mikrokontroler seperti ESP32.',
      bgColor: 'bg-green-500/50',
      glowColor: 'shadow-[0_0_20px_#22c55e,0_0_30px_#22c55e]', // Neon green
    },
    {
      name: 'Desain Vivarium',
      icon: <FaLeaf size={40} className="text-green-500" />,
      description: 'Merancang ekosistem mini dengan flora-fauna dan teknologi otomatisasi.',
      bgColor: 'bg-green-600/50',
      glowColor: 'shadow-[0_0_20px_#10b981,0_0_30px_#10b981]', // Neon emerald
    },
    {
      name: 'Blender',
      icon: <SiBlender size={40} className="text-orange-400" />,
      description: 'Membuat animasi 3D, render realistis, dan model untuk proyek kreatif.',
      bgColor: 'bg-yellow-500/50',
      glowColor: 'shadow-[0_0_20px_#facc15,0_0_30px_#facc15]', // Neon yellow
    },
    {
      name: 'Desain',
      icon: <FaPaintBrush size={40} className="text-purple-500" />,
      description: 'Menguasai prinsip desain grafis untuk UI/UX dan visualisasi proyek.',
      bgColor: 'bg-purple-500/50',
      glowColor: 'shadow-[0_0_20px_#c084fc,0_0_30px_#c084fc]', // Neon purple
    },
    {
      name: 'Seni Lukis',
      icon: <GiPaintBrush size={40} className="text-yellow-400" />,
      description: 'Berpengalaman dalam melukis dengan gaya realis dan ekspresif.',
      bgColor: 'bg-yellow-600/50',
      glowColor: 'shadow-[0_0_20px_#eab308,0_0_30px_#eab308]', // Neon yellow
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  if (!selectedSkill) {
    return <div className="text-white text-center">Loading skills...</div>;
  }

  return (
    <section
      id="skills"
      className="relative bg-gray-950 text-white py-4 px-6 sm:px-8 lg:px-16 pt-16 overflow-hidden"
    >
      {/* Animated Neon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-cyan-900/50 to-pink-900/50 animate-[gradient_10s_ease_infinite] bg-[length:400%_400%] z-0"></div>
      {/* Neon Lines Decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-cyan-400 animate-[pulse_5s_ease_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-blue-400 to-green-400 animate-[pulse_7s_ease_infinite]"></div>
        <div className="absolute top-1/4 right-0 w-1 h-1/2 bg-gradient-to-b from-pink-400 to-purple-400 animate-[pulse_6s_ease_infinite]"></div>
      </div>
      {/* Neon Particle Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-20 w-2 h-2 bg-purple-400 rounded-full animate-[float_8s_ease_infinite]"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-[float_10s_ease_infinite_1s]"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-[float_9s_ease_infinite_2s]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-[float_7s_ease_infinite_3s]"></div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-20px); opacity: 0.8; }
          100% { transform: translateY(0); opacity: 0.5; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 font-mono text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Keterampilan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Kolom Kiri: Ikon Segi Enam 3x3 Miring */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto pb-4"
              style={{ transform: 'skewY(-10deg)' }}
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="relative group cursor-pointer"
                  style={{ transform: 'skewY(10deg)' }}
                  onClick={() => setSelectedSkill(skill)}
                  data-aos="fade-up"
                  data-aos-delay={100 + (index % 3) * 100}
                >
                  <div
                    className={`w-20 h-20 flex items-center justify-center relative transition-all duration-300 border-2 ${
                      selectedSkill.name === skill.name
                        ? `${skill.bgColor} border-purple-400 ${skill.glowColor} scale-105`
                        : `bg-gray-800/50 border-transparent group-hover:${skill.bgColor} group-hover:${skill.glowColor} group-hover:animate-[wobble_1s_ease-in-out]`
                    }`}
                    style={{
                      clipPath:
                        'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-center text-gray-300 text-xs font-mono mt-2">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Deskripsi */}
          <div className="flex-1 min-w-0 w-full">
            <div
              className="bg-gray-900/50 backdrop-blur-md p-6 rounded-lg border border-purple-500/30 shadow-[0_0_10px_#a855f7]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                {selectedSkill.icon && (
                  <div className="mr-3">{React.cloneElement(selectedSkill.icon, { size: 24 })}</div>
                )}
                <h3 className="text-2xl font-semibold text-white font-mono">
                  {selectedSkill.name}
                </h3>
              </div>
              <p className="text-purple-300 text-base font-mono">
                {selectedSkill.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}