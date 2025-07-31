'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  useEffect(() => {
    const marquee = document.querySelector('.animate-marquee');
    if (marquee) {
      marquee.style.animation = 'marquee 25s linear infinite';
    }
  }, []);

  const phrases = ['Pembuat Robot', 'Desainer Paludarium', 'Kreator Vivarium', 'Animator 3D'];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen bg-black text-gray-200 px-4 sm:px-6 md:px-16 pt-16 pb-16 flex items-center overflow-hidden"
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
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-gray-900/10"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-blue-800/30 to-blue-900/50 shadow-lg"></div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-20 grid-background"></div>
      <div className="absolute inset-0 z-0 scanlines"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-base sm:text-lg text-gray-400 font-mono tracking-wider text-center md:text-left">
            Halo, saya
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight font-mono text-center md:text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
              Mufti Mauli
            </span>
            <br />
            <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]">
              Fathurozi
            </span>
          </h1>
          
          <div className="relative h-12 sm:h-14 overflow-hidden mx-auto md:mx-0 max-w-lg">
            <div className="absolute inset-0 border border-cyan-500/50 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.4)] bg-blue-900/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-xl sm:text-2xl font-mono text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] absolute inset-0 flex items-center justify-center px-4 tracking-wider"
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          
          <p className="text-sm sm:text-base text-gray-300 max-w-lg w-full font-mono text-center md:text-left">
            Saya adalah <span className="text-cyan-300 font-bold drop-shadow-[0_0_3px_rgba(34,211,238,0.6)]">pencipta kreatif</span> yang
            menggabungkan teknologi dan alam, membangun robot ekspresif, dunia
            mini seperti paludarium, serta animasi 3D dengan Blender.
          </p>
          
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="#tentang"
              className="inline-block bg-blue-900/50 backdrop-blur-md text-gray-100 px-4 sm:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 border border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] font-mono"
            >
              Tentang Saya
            </a>
            <a
              href="/CV_Mufti.pdf"
              download
              className="inline-block bg-gray-900/50 backdrop-blur-md text-red-400 px-4 sm:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)] hover:bg-red-900/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.8)] font-mono"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-6">
          <div className="relative bg-gray-900/50 backdrop-blur-md rounded-[60%_40%] border-2 border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.4)] p-1">
            <div className="absolute inset-0 rounded-[60%_40%] border border-cyan-400/30 animate-ping opacity-30"></div>
            <div className="absolute inset-0 rounded-[60%_40%] border border-cyan-400/20 animate-pulse"></div>
            <img
              src="/me image.jpeg"
              alt="Foto Mufti Mauli"
              width={280}
              height={280}
              className="rounded-[60%_40%] transform hover:scale-105 transition-transform duration-300 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
              // Untuk oval horizontal lebih tajam, uncomment baris di bawah dan comment baris di atas:
              // className="rounded-[70%_30%] transform hover:scale-105 transition-transform duration-300 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
            />
          </div>
          
          <div className="flex flex-col items-center sm:items-center">
            <h3 className="text-lg sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] font-mono text-center mb-2 sm:mb-4">
              Hubungi Saya
            </h3>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <a
                  href="https://wa.me/088215431222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-green-600/20 backdrop-blur-sm flex items-center justify-center border border-green-500/50 transition-all duration-300 hover:bg-green-600/30 hover:scale-110 hover:shadow-[0_0_10px_rgba(34,197,94,0.5)] rounded-lg"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                  </svg>
                </a>
                <span className="mt-2 text-xs text-green-400 font-mono">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.instagram.com/faroo_bro?igsh=eGVkNmV6NzBibzMx&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-pink-600/20 backdrop-blur-sm flex items-center justify-center border border-pink-500/50 transition-all duration-300 hover:bg-pink-600/30 hover:scale-110 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] rounded-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <span className="mt-2 text-xs text-pink-400 font-mono">Instagram</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://github.com/muftimauli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-700/20 backdrop-blur-sm flex items-center justify-center border border-gray-500/50 transition-all duration-300 hover:bg-gray-700/30 hover:scale-110 hover:shadow-[0_0_10px_rgba(107,114,128,0.5)] rounded-lg"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <span className="mt-2 text-xs text-gray-300 font-mono">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="mailto:farozioozi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/50 transition-all duration-300 hover:bg-blue-600/30 hover:scale-110 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] rounded-lg"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <span className="mt-2 text-xs text-blue-400 font-mono">Email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 w-full overflow-hidden bg-gray-900/70 backdrop-blur-md py-2 z-50 border-t border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
        <div className="animate-marquee whitespace-nowrap text-center text-xs sm:text-base text-cyan-400 font-mono tracking-wide drop-shadow-[0_0_5px_rgba(34,211,238,0.6)]">
          Teknologi × Alam × Imajinasi — Mufti Mauli — Paludarium, Robot, Animasi 3D, Karya Kreatif &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Teknologi × Alam × Imajinasi — Mufti Mauli — Paludarium, Robot, Animasi 3D, Karya Kreatif
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
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
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
        img, .rounded-[60%_40%], .rounded-[70%_30%] {
          transform: none !important;
          rotate: 0deg !important;
          skew: 0deg !important;
        }
        @media (max-width: 640px) {
          section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .max-w-7xl {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          h1 {
            font-size: 1.875rem;
          }
          h2 {
            font-size: 0.875rem;
          }
          h3 {
            font-size: 1rem;
          }
          .text-xl {
            font-size: 1rem;
          }
          .text-base {
            font-size: 0.875rem;
          }
          .text-sm {
            font-size: 0.75rem;
          }
          .w-64, .h-64, .w-48, .h-48 {
            width: 8rem;
            height: 8rem;
          }
          .h-14 {
            height: 2.5rem;
          }
          .gap-8 {
            gap: 1rem;
          }
          .gap-6 {
            gap: 1rem;
          }
          .gap-4 {
            gap: 0.5rem;
          }
          .px-6 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .py-2 {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }
          .mb-6 {
            margin-bottom: 0.5rem;
          }
          .mb-4 {
            margin-bottom: 0.5rem;
          }
          .mb-2 {
            margin-bottom: 0.25rem;
          }
          .mt-6 {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}