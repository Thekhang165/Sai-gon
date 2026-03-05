/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Camera, 
  Coffee, 
  Utensils, 
  Navigation, 
  ChevronRight, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight
} from 'lucide-react';

const SAIGON_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1920",
    title: "Sài Gòn về đêm",
    description: "Ánh đèn rực rỡ từ những tòa nhà chọc trời."
  },
  {
    url: "https://images.unsplash.com/photo-1559592442-7e18259d6967?auto=format&fit=crop&q=80&w=1920",
    title: "Nhà thờ Đức Bà",
    description: "Biểu tượng kiến trúc cổ kính giữa lòng thành phố."
  },
  {
    url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1920",
    title: "Chợ Bến Thành",
    description: "Nơi giao thoa văn hóa và ẩm thực đặc sắc."
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          SAIGON<span className="text-emerald-500">.</span>
        </motion.div>

        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-white/80">
          <a href="#hero" className="hover:text-emerald-400 transition-colors">Trang chủ</a>
          <a href="#explore" className="hover:text-emerald-400 transition-colors">Khám phá</a>
          <a href="#culture" className="hover:text-emerald-400 transition-colors">Văn hóa</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Liên hệ</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-center uppercase tracking-widest text-sm text-white/80">
              <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Trang chủ</a>
              <a href="#explore" onClick={() => setIsMobileMenuOpen(false)}>Khám phá</a>
              <a href="#culture" onClick={() => setIsMobileMenuOpen(false)}>Văn hóa</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={SAIGON_IMAGES[0].url} 
          alt="Saigon Skyline" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
        >
          Chào mừng bạn đến với
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
        >
          SÀI GÒN
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed font-light"
        >
          Nơi nhịp sống hiện đại hòa quyện cùng những giá trị truyền thống lâu đời. 
          Khám phá "Hòn Ngọc Viễn Đông" qua những góc nhìn mới lạ.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group">
            Bắt đầu hành trình <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-medium transition-all backdrop-blur-sm">
            Xem video giới thiệu
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group"
  >
    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-white/60 leading-relaxed">{description}</p>
  </motion.div>
);

const Explore = () => {
  return (
    <section id="explore" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">Khám phá thành phố</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Những điểm đến không thể bỏ qua</h3>
          </div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            Từ những công trình kiến trúc Pháp cổ đến các tòa nhà hiện đại, Sài Gòn luôn biết cách làm say lòng lữ khách.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={MapPin} 
            title="Địa điểm lịch sử" 
            description="Dinh Độc Lập, Bưu điện Thành phố và Nhà thờ Đức Bà mang đậm dấu ấn lịch sử."
            delay={0.1}
          />
          <FeatureCard 
            icon={Utensils} 
            title="Ẩm thực đường phố" 
            description="Thưởng thức cơm tấm, bánh mì và vô vàn món ăn vỉa hè nức tiếng thế giới."
            delay={0.2}
          />
          <FeatureCard 
            icon={Camera} 
            title="Góc nhìn hiện đại" 
            description="Ngắm nhìn toàn cảnh thành phố từ Landmark 81 hay Bitexco Financial Tower."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Khoảnh khắc Sài Gòn</h2>
      </div>
      
      <div className="flex gap-6 px-6 overflow-x-auto pb-12 no-scrollbar">
        {SAIGON_IMAGES.map((img, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="min-w-[300px] md:min-w-[500px] h-[400px] relative rounded-3xl overflow-hidden group flex-shrink-0"
          >
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <h4 className="text-xl font-bold text-white mb-2">{img.title}</h4>
              <p className="text-white/70 text-sm">{img.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Culture = () => {
  return (
    <section id="culture" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1000" 
              alt="Saigon Culture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-600 rounded-3xl p-6 hidden md:flex flex-col justify-center">
            <Coffee className="text-white mb-4" size={32} />
            <p className="text-white font-bold leading-tight">Văn hóa cà phê bệt đặc trưng</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">Văn hóa & Đời sống</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Nhịp đập của thành phố không ngủ</h3>
          <div className="space-y-6 text-white/70 leading-relaxed font-light text-lg">
            <p>
              Sài Gòn không chỉ là những tòa nhà cao tầng, mà còn là những con hẻm nhỏ đầy ắp tiếng cười và mùi thơm của thức ăn. 
              Văn hóa "cà phê sáng" đã trở thành một phần không thể thiếu trong đời sống người dân nơi đây.
            </p>
            <p>
              Người Sài Gòn hào sảng, thân thiện và luôn sẵn lòng giúp đỡ. Chính sự hiếu khách này đã tạo nên một bản sắc riêng biệt, 
              khiến bất kỳ ai đặt chân đến cũng cảm thấy gần gũi như đang ở nhà.
            </p>
          </div>
          <button className="mt-10 flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors group">
            Tìm hiểu thêm về con người Sài Gòn <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 text-white py-16 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold tracking-tighter mb-6">
              SAIGON<span className="text-emerald-500">.</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed mb-8">
              Trang web giới thiệu về du lịch và văn hóa Sài Gòn. Hãy cùng chúng tôi khám phá vẻ đẹp tiềm ẩn của thành phố này.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-emerald-500">Liên kết</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điểm đến</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ẩm thực</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sự kiện</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-emerald-500">Hỗ trợ</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2024 Saigon Discovery. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Navigation size={14} />
            <span>Thành phố Hồ Chí Minh, Việt Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <Explore />
      <Gallery />
      <Culture />
      <Footer />
      
      {/* Custom Scrollbar Styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}
