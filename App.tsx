
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Download, 
  Calendar,
  ChevronRight,
  Star,
  MapPin,
  MessageCircle
} from 'lucide-react';
import { 
  HIGHLIGHTS, 
  AMENITIES, 
  FLOOR_PLANS, 
  TESTIMONIALS, 
  LOCATION_DATA, 
  ICON_MAP 
} from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: '2BHK' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Floor Plans', href: '#floor-plans' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[60]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <motion.div
          className="absolute -inset-2 bg-[#25D366]/20 rounded-full z-0"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.a
          href="https://wa.me/1234567890?text=I'm%20interested%20in%20PrimeNest%20Properties"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute right-full mr-4 bg-white text-primary text-xs font-bold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100 uppercase tracking-wider">
            Chat with Sales
          </span>
        </motion.a>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-serif font-bold text-primary">Prime<span className="text-secondary">Nest</span></span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all"
              >
                Inquire Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white overflow-hidden shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-secondary hover:bg-slate-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Animation */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=90&w=2400" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block text-secondary font-bold tracking-[0.3em] uppercase mb-4 text-sm"
            >
              Exquisite Living Spaces
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8">
              Luxury Homes <br /> <span className="text-secondary italic">Perfected.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-200 mb-12 leading-relaxed max-w-xl">
              Discover a residence where timeless architecture meets modern innovation. Experience the pinnacle of sophisticated living.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: '#c5a059' }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="bg-secondary text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-2xl text-lg"
              >
                <Calendar className="w-6 h-6" />
                Schedule a Visit
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all text-lg"
              >
                <Download className="w-6 h-6" />
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Stats/Info */}
        <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
           <div className="max-w-7xl mx-auto px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-16 border-l-2 border-secondary/50 pl-8"
              >
                <div>
                  <p className="text-secondary font-bold text-2xl">40+</p>
                  <p className="text-slate-300 text-sm uppercase tracking-widest">Completed Projects</p>
                </div>
                <div>
                  <p className="text-secondary font-bold text-2xl">12k+</p>
                  <p className="text-slate-300 text-sm uppercase tracking-widest">Happy Residents</p>
                </div>
                <div>
                  <p className="text-secondary font-bold text-2xl">15+</p>
                  <p className="text-slate-300 text-sm uppercase tracking-widest">Years of Trust</p>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
            >
              The Prime Advantage
            </motion.h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We go beyond construction. We curate experiences that redefine luxury and simplify your everyday life.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
          >
            {HIGHLIGHTS.map((h) => (
              <motion.div 
                key={h.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto bg-muted rounded-[2rem] flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-3">
                  {ICON_MAP[h.icon]}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{h.title}</h3>
                <p className="text-slate-600 leading-relaxed">{h.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Architectural Marvels</h2>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
              <p className="text-slate-600 max-w-xl text-lg">
                Visualise your new life within our meticulously designed interior spaces and stunning facades.
              </p>
            </div>
            <button className="text-secondary font-bold flex items-center gap-1 hover:text-accent transition-colors group">
              View All Photos <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[700px]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-8 h-full relative overflow-hidden rounded-[2.5rem] cursor-pointer group shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1400" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Living Room" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <span className="text-white text-2xl font-serif italic">The Grand Atrium Living Space</span>
              </div>
            </motion.div>
            <div className="md:col-span-4 flex flex-col gap-6 h-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-1/2 relative overflow-hidden rounded-[2.5rem] cursor-pointer group shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Kitchen" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white text-xl font-serif italic">Bespoke Chef's Kitchen</span>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-1/2 relative overflow-hidden rounded-[2.5rem] cursor-pointer group shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Bedroom" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white text-xl font-serif italic">Sanctuary Master Suite</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Space Perfected</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our layouts are engineered for efficiency, privacy, and the seamless flow of daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {FLOOR_PLANS.map((plan) => (
              <motion.div 
                key={plan.id}
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500"
              >
                <div className="p-10 border-b border-slate-50">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-2">{plan.type}</h3>
                      <p className="text-secondary text-2xl font-bold">{plan.price}</p>
                    </div>
                    <span className="bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-[0.2em]">{plan.sqft}</span>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl mb-8 bg-muted p-8">
                    <img src={plan.image} alt={plan.type} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-lg">
                    <Download className="w-6 h-6" /> Download Detailed Specifications
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Curated Experiences</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Beyond four walls, discover a lifestyle enriched by world-class facilities and communal spaces.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            {AMENITIES.map((item) => (
              <motion.div 
                key={item.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="text-secondary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {ICON_MAP[item.icon]}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Advantage */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">The Center of Everywhere</h2>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Strategic positioning ensures you're never more than minutes away from the essentials of modern life.
              </p>
              
              <div className="space-y-6">
                {LOCATION_DATA.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 15, backgroundColor: '#f8fafc' }}
                    className="flex items-center justify-between p-6 rounded-[2rem] border border-slate-100 transition-all duration-300 cursor-default shadow-sm"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-secondary shadow-inner">
                        {item.icon}
                      </div>
                      <span className="font-bold text-primary text-lg">{item.name}</span>
                    </div>
                    <span className="text-secondary font-black text-lg">{item.distance}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] bg-slate-100 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative border-[12px] border-white"
              >
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="City Aerial View" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="relative">
                      <div className="absolute -inset-8 bg-secondary/40 rounded-full animate-ping"></div>
                      <div className="relative w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white border-4 border-white shadow-2xl">
                        <MapPin className="w-8 h-8" />
                      </div>
                   </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-10 hidden lg:block bg-primary p-10 rounded-[2.5rem] text-white shadow-3xl max-w-xs border border-white/10"
              >
                <h4 className="font-bold text-2xl mb-4">Global Benchmark</h4>
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <p className="text-slate-300 leading-relaxed font-medium">Ranked as the #1 Emerging Luxury Hub for global professionals in 2024.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Voices of Pride</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          </div>

          <div className="relative">
            <motion.div 
              className="flex gap-8 overflow-x-auto pb-16 snap-x hide-scrollbar"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {TESTIMONIALS.map((t) => (
                <motion.div 
                  key={t.id}
                  whileHover={{ y: -10 }}
                  className="flex-shrink-0 w-[350px] md:w-[500px] bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-50 snap-center"
                >
                  <div className="flex text-secondary mb-8">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                  </div>
                  <p className="text-primary/80 text-xl font-serif italic mb-10 leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-secondary font-bold text-xl">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-black text-primary text-lg">{t.name}</h4>
                      <p className="text-secondary font-bold uppercase tracking-wider text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.5)] flex flex-col lg:flex-row border border-white/5">
            <div className="lg:w-1/2 p-12 md:p-24 text-white flex flex-col justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">Your New Life <br /> Awaits.</h2>
              <p className="text-slate-300 text-xl mb-16 leading-relaxed font-light">
                Join our exclusive registry of homeowners. Our senior consultants are ready to provide you with a tailored presentation of the PrimeNest collection.
              </p>
              
              <div className="space-y-10">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Exclusive Line</p>
                    <p className="text-2xl font-bold">+1 (800) 123-PRIME</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Corporate Sales</p>
                    <p className="text-2xl font-bold">concierge@primenest.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-12 md:p-24">
              <h3 className="text-4xl font-serif font-bold text-primary mb-10">Request a Private Showing</h3>
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="group">
                  <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-[0.2em] group-focus-within:text-secondary transition-colors">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-8 py-5 rounded-2xl bg-muted border border-slate-100 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all text-lg font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-[0.2em] group-focus-within:text-secondary transition-colors">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-8 py-5 rounded-2xl bg-muted border border-slate-100 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all text-lg font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-[0.2em] group-focus-within:text-secondary transition-colors">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+1 (000) 000-0000"
                      className="w-full px-8 py-5 rounded-2xl bg-muted border border-slate-100 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all text-lg font-medium"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-[0.2em] group-focus-within:text-secondary transition-colors">Interested In</label>
                  <select 
                    className="w-full px-8 py-5 rounded-2xl bg-muted border border-slate-100 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all text-lg font-medium appearance-none"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="2BHK">Executive 2BHK</option>
                    <option value="3BHK">Presidential 3BHK</option>
                    <option value="Villa">Exclusive Penthouse Collection</option>
                  </select>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#c5a059' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-secondary text-white py-6 rounded-[2rem] font-black text-xl shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)] hover:shadow-2xl transition-all flex items-center justify-center gap-4 mt-12"
                >
                  Secure My Invitation
                </motion.button>
                
                {formSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-3 text-green-600 font-bold bg-green-50 p-5 rounded-2xl border border-green-100 mt-6"
                  >
                    <Star className="w-5 h-5 fill-current" />
                    Reservation Request Sent Successfully.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <span className="text-4xl font-serif font-bold text-primary block mb-8">Prime<span className="text-secondary">Nest</span></span>
              <p className="text-slate-500 mb-10 leading-relaxed text-lg">
                Setting the global standard for elite residential property development. Crafting the world's most desirable addresses.
              </p>
              <div className="flex gap-6">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-sm">
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-primary mb-8 uppercase tracking-[0.2em] text-sm">Navigation</h4>
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-500 font-medium hover:text-secondary transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-primary mb-8 uppercase tracking-[0.2em] text-sm">Corporate</h4>
              <ul className="space-y-5 text-slate-500 font-medium">
                <li>PrimeNest Holdings PLC</li>
                <li>Strategic Investment Partners</li>
                <li>Design Ethics Board</li>
                <li>Sustainability Charter 2030</li>
                <li>Investor Relations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-primary mb-8 uppercase tracking-[0.2em] text-sm">Contact Concierge</h4>
              <address className="not-italic text-slate-500 space-y-6 font-medium">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="leading-relaxed">77 Luxury Row, Suite 500, <br />Global Trade Center, NY 10001</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span>+1 (800) 123-PRIME</span>
                </div>
              </address>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <p>© 2024 PrimeNest International. Designed for the Exceptional.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-primary transition-colors">Privacy Charter</a>
              <a href="#" className="hover:text-primary transition-colors">Legal Framework</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
