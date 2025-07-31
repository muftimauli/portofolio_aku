'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID'; // Ganti dengan EmailJS Service ID Anda
    const templateID = 'YOUR_TEMPLATE_ID'; // Ganti dengan EmailJS Template ID Anda
    const publicKey = 'YOUR_PUBLIC_KEY'; // Ganti dengan EmailJS Public Key Anda

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'farozioozi@gmail.com',
      message: formData.message,
    }, publicKey)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const socials = [
    { text: 'GitHub', link: 'https://github.com/muftimauli', icon: <FaGithub size={24} />, glowColor: '#e5e7eb' },
    { text: 'Instagram', link: 'https://www.instagram.com/faroo_bro?igsh=eGVkNmV6NzBibzMx&utm_source=qr', icon: <FaInstagram size={24} />, glowColor: '#ef4444' },
    { text: 'Email', link: 'mailto:farozioozi@gmail.com', icon: <FaEnvelope size={24} />, glowColor: '#facc15' },
    { text: 'WhatsApp', link: 'https://wa.me/088215431222', icon: <FaWhatsapp size={24} />, glowColor: '#22c55e' },
  ];

  return (
    <section
      id="kontak"
      className="relative min-h-screen bg-black text-white py-8 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Star Wars Background */}
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
      
      <div className="max-w-7xl mx-auto relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start sm:items-center">
          <motion.div
            className="space-y-6 w-full max-w-full sm:max-w-lg mx-auto lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] font-mono text-center lg:text-left">
              Kontak Saya
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Ingin berkolaborasi, bertanya, atau berbagi ide? Hubungi saya melalui formulir atau media sosial!
            </p>
            
            <form
              className="bg-gray-900/50 backdrop-blur-md p-6 rounded-lg border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.3)] space-y-4 w-full"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-900/80 border border-cyan-500/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300"
                  placeholder="Nama lengkap"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-900/80 border border-cyan-500/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-900/80 border border-cyan-500/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-cyan-900/50 backdrop-blur-md text-cyan-300 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 border border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </motion.button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm text-center">Pesan berhasil dikirim!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">Gagal mengirim pesan. Coba lagi.</p>
              )}
            </form>
          </motion.div>
          
          <motion.div
            className="space-y-6 w-full max-w-full sm:max-w-lg mx-auto lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white font-mono text-center lg:text-left">Temukan Saya</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center bg-gray-900/50 backdrop-blur-md p-4 rounded-lg border border-cyan-500/30 text-gray-300 hover:text-white transition-all duration-300"
                  style={{ boxShadow: `0 0 10px ${social.glowColor}40` }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 15px ${social.glowColor}60`
                  }}
                  aria-label={social.text}
                >
                  {social.icon}
                  <span className="mt-2 text-xs font-mono">{social.text}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-300 text-sm text-center lg:text-left">
              Ikuti perjalanan saya di media sosial untuk melihat proyek terbaru dan inspirasi teknologi-alam!
            </p>
          </motion.div>
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
            padding-bottom: 4rem;
          }
          .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .max-w-7xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}