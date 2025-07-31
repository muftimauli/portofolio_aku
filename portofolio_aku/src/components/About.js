'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaHtml5, FaCss3Alt, FaJava, FaMicrochip, FaLeaf, FaPaintBrush, FaDog, FaSeedling, FaFlask, FaTools, FaCube } from 'react-icons/fa';
import { SiNextdotjs, SiBlender } from 'react-icons/si';
import { GiPaintBrush, GiGuitar } from 'react-icons/gi';
import Image from 'next/image';
import IconGilir from './IconGilir';

export default function About() {
  const [activeTab, setActiveTab] = useState('latar-belakang');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedHobby, setSelectedHobby] = useState(null);
  
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 size={24} className="text-orange-500" />,
      description: 'Mampu membuat struktur web kompleks dengan semantik HTML5 dan aksesibilitas.',
      bgColor: 'bg-orange-900/30',
      glowColor: 'shadow-[0_0_15px_#fb923c,0_0_25px_#fb923c]',
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt size={24} className="text-blue-500" />,
      description: 'Menguasai styling responsif, animasi CSS, dan framework seperti Tailwind.',
      bgColor: 'bg-cyan-900/30',
      glowColor: 'shadow-[0_0_15px_#22d3ee,0_0_25px_#22d3ee]',
    },
    {
      name: 'Java',
      icon: <FaJava size={24} className="text-red-600" />,
      description: 'Berpengalaman dalam pemrograman berorientasi objek dan aplikasi sederhana.',
      bgColor: 'bg-red-900/30',
      glowColor: 'shadow-[0_0_15px_#ef4444,0_0_25px_#ef4444]',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={24} className="text-white" />,
      description: 'Memahami dasar pengembangan web modern dengan Next.js dan React.',
      bgColor: 'bg-gray-800/30',
      glowColor: 'shadow-[0_0_15px_#e5e7eb,0_0_25px_#e5e7eb]',
    },
    {
      name: 'IoT',
      icon: <FaMicrochip size={24} className="text-gray-400" />,
      description: 'Mampu mengembangkan sistem IoT dengan sensor dan mikrokontroler seperti ESP32.',
      bgColor: 'bg-green-900/30',
      glowColor: 'shadow-[0_0_15px_#22c55e,0_0_25px_#22c55e]',
    },
    {
      name: 'Vivarium',
      icon: <FaLeaf size={24} className="text-green-500" />,
      description: 'Merancang ekosistem mini dengan flora-fauna dan teknologi otomatisasi.',
      bgColor: 'bg-green-900/30',
      glowColor: 'shadow-[0_0_15px_#22c55e,0_0_25px_#22c55e]',
    },
    {
      name: 'Blender',
      icon: <SiBlender size={24} className="text-orange-400" />,
      description: 'Membuat animasi 3D, render realistis, dan model untuk proyek kreatif.',
      bgColor: 'bg-yellow-900/30',
      glowColor: 'shadow-[0_0_15px_#facc15,0_0_25px_#facc15]',
    },
    {
      name: 'Desain',
      icon: <FaPaintBrush size={24} className="text-purple-500" />,
      description: 'Menguasai prinsip desain grafis untuk UI/UX dan visualisasi proyek.',
      bgColor: 'bg-purple-900/30',
      glowColor: 'shadow-[0_0_15px_#c084fc,0_0_25px_#c084fc]',
    },
    {
      name: 'Lukis',
      icon: <GiPaintBrush size={24} className="text-yellow-400" />,
      description: 'Berpengalaman dalam melukis dengan gaya realis dan ekspresif.',
      bgColor: 'bg-yellow-900/30',
      glowColor: 'shadow-[0_0_15px_#eab308,0_0_25px_#eab308]',
    },
    {
      name: 'Seni Patung',
      icon: <FaCube size={24} className="text-stone-400" />,
      description: 'Membuat karya seni patung dengan berbagai media untuk ekspresi artistik.',
      bgColor: 'bg-stone-900/30',
      glowColor: 'shadow-[0_0_15px_#78716c,0_0_25px_#78716c]',
    },
  ];
  
  const organizations = [
    {
      name: 'IMMB (Ikatan Muda Mudi Bekelan), Anggota, 2017',
      logo: '/images/logo-immb.jpeg',
      description: 'Organisasi pemuda di Bekelan untuk kegiatan sosial dan budaya.',
      instagramUrl: 'https://www.instagram.com/mudamudi_bekelan',
    },
    {
      name: 'PIK-R (Kader Posyandu Remaja), Kader, 2025',
      logo: '/images/logo-pikr.jpeg',
      description: 'Kader kesehatan remaja untuk edukasi dan pelayanan posyandu.',
      instagramUrl: 'https://www.instagram.com/pikr_bawika',
    },
    {
      name: 'GN (Gangs Ngaji), Anggota, 2020',
      logo: '/images/logo-gn.jpeg',
      description: 'Komunitas kajian keislaman untuk memperdalam ilmu agama.',
      instagramUrl: 'https://www.instagram.com/gangsngaji',
    },
    {
      name: 'MCY (Mualaf Center Yogyakarta), Relawan, 2024',
      logo: '/images/logo-mcy.jpeg',
      description: 'Relawan untuk pendampingan dan edukasi mualaf di Yogyakarta.',
      instagramUrl: 'https://www.instagram.com/mualafcenterjogjakarta',
    },
  ];
  
  const hobbies = [
    {
      name: 'Vivarium',
      icon: <FaLeaf size={24} className="text-green-500" />,
      description: 'Membuat ekosistem mini interaktif dengan flora dan fauna.',
      bgColor: 'bg-green-900/30',
      glowColor: 'shadow-[0_0_15px_#22c55e,0_0_25px_#22c55e]',
    },
    {
      name: 'Melukis',
      icon: <GiPaintBrush size={24} className="text-yellow-400" />,
      description: 'Melukis dengan gaya realis dan ekspresif untuk ekspresi kreatif.',
      bgColor: 'bg-yellow-900/30',
      glowColor: 'shadow-[0_0_15px_#eab308,0_0_25px_#eab308]',
    },
    {
      name: 'IoT',
      icon: <FaMicrochip size={24} className="text-gray-400" />,
      description: 'Eksperimen dengan mikrokontroler untuk proyek teknologi inovatif.',
      bgColor: 'bg-green-900/30',
      glowColor: 'shadow-[0_0_15px_#22c55e,0_0_25px_#22c55e]',
    },
    {
      name: 'Blender',
      icon: <SiBlender size={24} className="text-orange-400" />,
      description: 'Membuat animasi 3D dan render realistis untuk proyek kreatif.',
      bgColor: 'bg-yellow-900/30',
      glowColor: 'shadow-[0_0_15px_#facc15,0_0_25px_#facc15]',
    },
    {
      name: 'Gitar',
      icon: <GiGuitar size={24} className="text-red-500" />,
      description: 'Bermain gitar untuk relaksasi dan ekspresi musikal.',
      bgColor: 'bg-red-900/30',
      glowColor: 'shadow-[0_0_15px_#ef4444,0_0_25px_#ef4444]',
    },
    {
      name: 'Hewan',
      icon: <FaDog size={24} className="text-amber-500" />,
      description: 'Merawat hewan peliharaan untuk membangun ikatan dan tanggung jawab.',
      bgColor: 'bg-amber-900/30',
      glowColor: 'shadow-[0_0_15px_#f59e0b,0_0_25px_#f59e0b]',
    },
    {
      name: 'Tumbuhan',
      icon: <FaSeedling size={24} className="text-green-600" />,
      description: 'Menanam dan merawat tumbuhan untuk menciptakan lingkungan hijau.',
      bgColor: 'bg-green-900/30',
      glowColor: 'shadow-[0_0_15px_#16a34a,0_0_25px_#16a34a]',
    },
    {
      name: 'Eksperimen',
      icon: <FaFlask size={24} className="text-blue-600" />,
      description: 'Melakukan eksperimen untuk mengeksplorasi ide-ide baru.',
      bgColor: 'bg-blue-900/30',
      glowColor: 'shadow-[0_0_15px_#2563eb,0_0_25px_#2563eb]',
    },
    {
      name: 'Karya',
      icon: <FaTools size={24} className="text-gray-600" />,
      description: 'Menciptakan karya fisik melalui kerajinan tangan dan inovasi.',
      bgColor: 'bg-gray-800/30',
      glowColor: 'shadow-[0_0_15px_#4b5563,0_0_25px_#4b5563]',
    },
    {
      name: 'Seni Patung',
      icon: <FaCube size={24} className="text-stone-400" />,
      description: 'Membuat patung sebagai bentuk ekspresi seni tiga dimensi.',
      bgColor: 'bg-stone-900/30',
      glowColor: 'shadow-[0_0_15px_#78716c,0_0_25px_#78716c]',
    },
  ];
  
  const tabs = [
    { id: 'latar-belakang', label: 'Latar Belakang', borderColor: 'border-cyan-500', glowColor: '#22d3ee', bgColor: 'bg-cyan-900/30' },
    { id: 'keahlian-minat', label: 'Keahlian & Minat', borderColor: 'border-blue-500', glowColor: '#3b82f6', bgColor: 'bg-blue-900/30' },
    { id: 'organisasi', label: 'Pengalaman Organisasi', borderColor: 'border-red-500', glowColor: '#ef4444', bgColor: 'bg-red-900/30' },
    { id: 'hobi', label: 'Hobi', borderColor: 'border-green-500', glowColor: '#22c55e', bgColor: 'bg-green-900/30' },
  ];
  
  return (
    <section
      id="tentang"
      className="relative bg-black text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
              contain: 'paint',
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 6px #22d3ee, 0 0 12px #22d3ee',
              contain: 'paint',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-gray-900/10"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-blue-800/30 to-blue-900/50 shadow-lg"></div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-20 grid-background"></div>
      <div className="absolute inset-0 z-0 scanlines"></div>
      
      <div className="max-w-6xl mx-auto space-y-6 font-mono relative z-10 h-full flex flex-col">
        <div className="text-center" data-aos="fade-up">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
            Tentang Saya
          </h3>
          <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
            Menggabungkan teknologi, seni, dan ekosistem mini untuk proyek interaktif yang inovatif.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedSkill(tab.id === 'keahlian-minat' ? skills[0] : null);
                setSelectedHobby(tab.id === 'hobi' ? hobbies[0] : null);
              }}
              className={`px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-lg font-mono transition-all duration-200 ${
                activeTab === tab.id
                  ? `${tab.bgColor} backdrop-blur-md border ${tab.borderColor} text-white shadow-[0_0_8px_${tab.glowColor}]`
                  : `text-gray-300 bg-gray-900/50 border ${tab.borderColor}/30 hover:${tab.bgColor} hover:border-${tab.borderColor} hover:text-white hover:shadow-[0_0_8px_${tab.glowColor}]`
              }`}
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={tabs.indexOf(tab) * 100}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
        
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'latar-belakang' && (
              <motion.div
                key="latar-belakang"
                className="bg-gray-900/50 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-cyan-500/30 shadow-[0_0_8px_rgba(34,211,238,0.3)] h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white font-mono mb-3 sm:mb-4">Latar Belakang</h3>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-300 text-sm sm:text-base font-mono mb-3 sm:mb-4">
                      Saya seorang pelajar yang bersemangat dalam teknologi, desain, dan seni. Berpengalaman dalam pengembangan web, IoT, dan animasi 3D, dengan fokus pada solusi kreatif dan minimalis.
                    </p>
                    <Link
                      href="#projects"
                      className="bg-cyan-900/50 backdrop-blur-md text-cyan-300 px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 transform hover:scale-105 border border-cyan-500/50 shadow-[0_0_8px_rgba(34,211,238,0.5)] hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] font-mono w-fit"
                    >
                      Projek Saya
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative bg-gray-900/50 backdrop-blur-md rounded-full border-2 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.4)] p-1">
                      <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-30"></div>
                      <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse"></div>
                      <Image
                        src="/me image.jpeg"
                        alt="Foto Mufti Mauli"
                        width={160}
                        height={160}
                        className="rounded-full transform hover:scale-105 transition-transform duration-200 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'keahlian-minat' && (
              <motion.div
                key="keahlian-minat"
                className="bg-gray-900/50 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.3)] h-full flex flex-col lg:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex-1 min-w-0">
                  <div
                    className="bg-gray-900/50 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.3)] h-full flex flex-col"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex items-center mb-2 sm:mb-3">
                      {selectedSkill?.icon && (
                        <div className="mr-2 sm:mr-3">{React.cloneElement(selectedSkill.icon, { size: 20 })}</div>
                      )}
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white font-mono">
                        {selectedSkill?.name || 'Pilih Keahlian'}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base font-mono flex-1">
                      {selectedSkill?.description || 'Klik ikon untuk melihat deskripsi keahlian.'}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-900/80 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.3)] w-full lg:w-1/2">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="relative group cursor-pointer"
                        onClick={() => setSelectedSkill(skill)}
                        data-aos="fade-up"
                        data-aos-delay={100 + (index % 5) * 50}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className={`w-full aspect-square flex items-center justify-center relative transition-all duration-200 border-2 rounded-lg ${
                            selectedSkill?.name === skill.name
                              ? `${skill.bgColor} border-cyan-500 ${skill.glowColor} backdrop-blur-md scale-105`
                              : `bg-gray-800/50 border-gray-700/50 group-hover:${skill.bgColor} group-hover:border-cyan-500 group-hover:${skill.glowColor} group-hover:backdrop-blur-md`
                          }`}
                        >
                          {skill.icon}
                        </div>
                        <p className="text-center text-gray-300 text-sm font-mono mt-1 truncate">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'organisasi' && (
              <motion.div
                key="organisasi"
                className="bg-gray-900/50 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-red-500/30 shadow-[0_0_8px_rgba(239,68,68,0.3)] h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white font-mono mb-3 sm:mb-4">Pengalaman Organisasi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1">
                  {organizations.map((org, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-red-500/30 shadow-[0_0_8px_rgba(239,68,68,0.3)] flex items-center"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <Image
                        src={org.logo}
                        alt={`Logo ${org.name}`}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-red-500/30 object-cover mr-2 sm:mr-3"
                      />
                      <div className="flex-1">
                        <p className="text-gray-300 font-semibold text-sm sm:text-base font-mono">{org.name}</p>
                        <p className="text-gray-400 text-xs sm:text-sm font-mono">{org.description}</p>
                      </div>
                      <a
                        href={org.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-400"
                      >
                        <FaInstagram size={16} className="sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeTab === 'hobi' && (
              <motion.div
                key="hobi"
                className="bg-gray-900/50 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-green-500/30 shadow-[0_0_8px_rgba(34,197,94,0.3)] h-full flex flex-col lg:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex-1 min-w-0">
                  <div
                    className="bg-gray-900/50 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-green-500/30 shadow-[0_0_8px_rgba(34,197,94,0.3)] h-full flex flex-col"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex items-center mb-2 sm:mb-3">
                      {selectedHobby?.icon && (
                        <div className="mr-2 sm:mr-3">{React.cloneElement(selectedHobby.icon, { size: 20 })}</div>
                      )}
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white font-mono">
                        {selectedHobby?.name || 'Pilih Hobi'}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base font-mono flex-1">
                      {selectedHobby?.description || 'Klik ikon untuk melihat deskripsi hobi.'}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-900/80 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-green-500/30 shadow-[0_0_8px_rgba(34,197,94,0.3)] w-full lg:w-1/2">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={hobby.name}
                        className="relative group cursor-pointer"
                        onClick={() => setSelectedHobby(hobby)}
                        data-aos="fade-up"
                        data-aos-delay={100 + (index % 5) * 50}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className={`w-full aspect-square flex items-center justify-center relative transition-all duration-200 border-2 rounded-lg ${
                            selectedHobby?.name === hobby.name
                              ? `${hobby.bgColor} border-cyan-500 ${hobby.glowColor} backdrop-blur-md scale-105`
                              : `bg-gray-800/50 border-gray-700/50 group-hover:${hobby.bgColor} group-hover:border-cyan-500 group-hover:${hobby.glowColor} group-hover:backdrop-blur-md`
                          }`}
                        >
                          {hobby.icon}
                        </div>
                        <p className="text-center text-gray-300 text-sm font-mono mt-1 truncate">
                          {hobby.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div>
          <IconGilir />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .grid-background {
          background-image: 
            linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .scanlines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(34, 211, 238, 0.05) 51%
          );
          background-size: 100% 4px;
        }
        @media (max-width: 640px) {
          section {
            padding-top: 4rem;
            padding-bottom: 2rem;
          }
          .max-w-6xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          h3 {
            font-size: 1.5rem;
          }
          h4 {
            font-size: 1rem;
          }
          .text-base {
            font-size: 0.875rem;
          }
          .text-sm {
            font-size: 0.75rem;
          }
          .gap-6 {
            gap: 1.5rem;
          }
          .gap-4 {
            gap: 0.75rem;
          }
          .gap-2 {
            gap: 0.5rem;
          }
          .px-4 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .mb-4 {
            margin-bottom: 1rem;
          }
          .mb-3 {
            margin-bottom: 0.75rem;
          }
          .grid-cols-4 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .grid-cols-5 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .w-40 {
            width: 6rem;
          }
          .h-40 {
            height: 6rem;
          }
          .w-28 {
            width: 5rem;
          }
          .h-28 {
            height: 5rem;
          }
          .w-20 {
            width: 4rem;
          }
          .h-20 {
            height: 4rem;
          }
          .w-16 {
            width: 3rem;
            height: 3rem;
          }
          .w-12 {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          h3 {
            font-size: 2rem;
          }
          h4 {
            font-size: 1.25rem;
          }
          .text-base {
            font-size: 1rem;
          }
          .text-sm {
            font-size: 0.875rem;
          }
          .w-40 {
            width: 8rem;
          }
          .h-40 {
            height: 8rem;
          }
          .w-28 {
            width: 6rem;
          }
          .h-28 {
            height: 6rem;
          }
        }
      `}</style>
    </section>
  );
}