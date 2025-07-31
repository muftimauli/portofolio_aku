'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = {
    '3D': [
      {
        title: '3D Animasi Barongan',
        video: '/videos/render1.mp4',
        description: 'Render 3D animasi Barongan Kediri cinematic dengan efek asap menggunakan Blender.',
      },
      {
        title: '3D Animasi Kapal',
        video: '/videos/render2.mp4',
        description: 'Render 3D animasi maskot kapal menggunakan Blender.',
      },
      {
        title: '3D Animasi Ganci',
        video: '/videos/render3.mp4',
        description: 'Render 3D animasi mentahan iklan gantungan kunci Spotify menggunakan Blender.',
      },
      {
        title: '3D Animasi Ganci',
        video: '/videos/render4.mp4',
        description: 'Render 3D animasi mentahan iklan gantungan kunci Spotify menggunakan Blender.',
      },
      {
        title: '3D Animasi Ganci',
        video: '/videos/render5.mp4',
        description: 'Render 3D animasi mentahan iklan gantungan kunci Spotify menggunakan Blender.',
      },
      {
        title: '3D Animasi Ganci',
        video: '/videos/render6.mp4',
        description: 'Render 3D animasi mentahan iklan gantungan kunci Spotify menggunakan Blender.',
      },
      {
        title: '3D Animasi Ganci',
        video: '/videos/render7.mp4',
        description: 'Render 3D animasi mentahan iklan gantungan kunci Spotify menggunakan Blender.',
      },
      {
        title: '3D Animasi Reog Ponorogo',
        video: '/videos/render8.mp4',
        description: 'Render 3D animasi reog ponorogo.',
      },
    ],
    Web: [
      {
        title: 'Web Edukasi Terarium',
        video: '/videos/web1.mp4',
        description: 'Situs Web edukasi terarium, paludarium, aquascape Bio Aktif.',
      },
      {
        title: 'Toko computer',
        video: '/videos/web2.mp4',
        description: 'Toko online responsif dengan fitur keranjang dan pembayaran menggunakan Ci3.',
      },
    ],
    IoT: [
      {
        title: 'Pakan Ikan Otomatis',
        video: '/videos/iot1.mp4',
        description: 'Pakan ikan otomatis menggunakan Arduino Uno di kontrol lewat bluetooth.',
      },
      {
        title: 'Robot Pelayan Berbicara',
        video: '/videos/iot2.mp4',
        description: 'Kepala robot pelayan makanan.',
      },
    ],
  };

  const categoryTitles = {
    '3D': '3D Animasi',
    Web: 'Tampilan Website',
    IoT: 'Internet of Things',
  };

  const [category, setCategory] = useState('3D');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects[category].length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects[category].length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
        <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 rounded-full bg-gradient-to-b from-blue-800/30 to-blue-900/50 shadow-lg"></div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-20 grid-background"></div>
      <div className="absolute inset-0 z-0 scanlines"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] font-mono leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Proyek Kreatif
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md font-mono"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Berikut adalah proyek kreatif saya, dibagi menjadi kategori 3D, Web, dan IoT.
            </p>
            <a
              href="#beranda"
              className="inline-block bg-cyan-900/50 backdrop-blur-md text-cyan-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 border border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] font-mono text-sm sm:text-base"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Hubungi untuk Kolaborasi
            </a>
            
            <div className="flex gap-3 sm:gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="400">
              {['3D', 'Web', 'IoT'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-mono text-sm sm:text-base transition-all duration-200 animate-[rotateSway_1.5s_ease_infinite] transform-origin-center hover:scale-110 ${
                    category === cat
                      ? cat === '3D'
                        ? 'bg-cyan-900/50 backdrop-blur-md border border-cyan-500 text-white shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                        : cat === 'Web'
                        ? 'bg-blue-900/50 backdrop-blur-md border border-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                        : 'bg-red-900/50 backdrop-blur-md border border-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                      : 'text-gray-300 bg-gray-900/50 border border-gray-700/50 hover:bg-cyan-900/30 hover:border-cyan-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div
              className="bg-gray-900/50 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <FaGithub size={24} className="text-gray-300 sm:w-8 sm:h-8" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base font-mono">
                    Berikut proyek saya di GitHub
                  </p>
                  <a
                    href="https://github.com/muftimauli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-mono text-sm sm:text-base transition-colors duration-200"
                  >
                    Lihat Repositori
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-cyan-900/50 backdrop-blur-md text-cyan-300 p-2 sm:p-3 rounded-full transition-all duration-200 transform hover:scale-110 border border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            >
              <FaArrowLeft size={16} className="sm:w-5 sm:h-5" />
            </button>
            
            <div className="w-full max-w-[500px] sm:max-w-[600px] bg-gray-900/50 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              <h3
                className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center font-mono mb-3 sm:mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {categoryTitles[category]}
              </h3>
              
              <div className="relative mb-3 sm:mb-4" data-aos="fade-up" data-aos-delay="200">
                <video
                  src={projects[category][currentIndex].video}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg border border-cyan-500/30"
                  muted
                  loop
                  autoPlay
                  playsInline
                  key={projects[category][currentIndex].video}
                />
                <div className="absolute inset-0 rounded-lg border border-cyan-400/20 pointer-events-none"></div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center font-mono mb-2">
                  {projects[category][currentIndex].title}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base text-center font-mono">
                  {projects[category][currentIndex].description}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-cyan-900/50 backdrop-blur-md text-cyan-300 p-2 sm:p-3 rounded-full transition-all duration-200 transform hover:scale-110 border border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            >
              <FaArrowRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
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
        @keyframes rotateSway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
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
            padding-bottom: 4rem;
          }
          .max-w-7xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          h2 {
            font-size: 2rem;
          }
          h3 {
            font-size: 1.25rem;
          }
          h4 {
            font-size: 1rem;
          }
          p {
            font-size: 0.875rem;
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
          .gap-3 {
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
          video {
            height: 200px;
          }
          .max-w-[600px] {
            max-width: 100%;
          }
          .w-24 {
            width: 4rem;
            height: 4rem;
          }
          .w-16 {
            width: 3rem;
            height: 3rem;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          h2 {
            font-size: 3.5rem;
          }
          h3 {
            font-size: 1.5rem;
          }
          h4 {
            font-size: 1.25rem;
          }
          p {
            font-size: 1rem;
          }
          video {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}