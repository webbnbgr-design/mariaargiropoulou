import { motion } from "motion/react";
import { 
  Scale, 
  Home, 
  Users, 
  MessageSquare, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Αρχική", href: "#home" },
    { name: "Εξειδίκευση", href: "#expertise" },
    { name: "Γιατί Εμάς", href: "#values" },
    { name: "Κριτικές", href: "#reviews" },
    { name: "Επικοινωνία", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight text-royal-blue">
          ΜΑΡΙΑ ΑΡΓΥΡΟΠΟΥΛΟΥ
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-sky-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-royal-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 py-6 px-6 shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-soft-white">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 bg-sky-blue/10 text-sky-blue text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Δικηγορικό Γραφείο
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-royal-blue">
            Μαρία Αργυροπούλου: <br />
            <span className="text-royal-blue">Δίπλα σας</span> με Απλές Λύσεις σε Δύσκολα Νομικά Ζητήματα.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Νομική καθοδήγηση που μπορείτε να καταλάβετε και να εμπιστευτείτε. Επιλύουμε τις υποθέσεις σας με ειλικρίνεια και αποτελεσματικότητα.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-royal-blue text-white font-semibold rounded-lg hover:bg-royal-blue/90 transition-all shadow-lg hover:shadow-royal-blue/20 flex items-center justify-center gap-2"
            >
              Κλείστε μια Συνάντηση <ChevronRight size={18} />
            </a>
            <a 
              href="#expertise" 
              className="px-8 py-4 border-2 border-royal-blue text-royal-blue font-semibold rounded-lg hover:bg-royal-blue/5 transition-all flex items-center justify-center"
            >
              Οι Υπηρεσίες μας
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const services = [
    {
      icon: <Home className="text-sky-blue" size={32} />,
      title: "Ακίνητα",
      description: "Πλήρης νομική υποστήριξη σε μεταβιβάσεις, ελέγχους τίτλων και κτηματολογικές διαφορές.",
      features: ["Μεταβιβάσεις", "Έλεγχοι Τίτλων", "Κτηματολόγιο"]
    },
    {
      icon: <Users className="text-sky-blue" size={32} />,
      title: "Αστικό Δίκαιο",
      description: "Εξειδικευμένες λύσεις σε οικογενειακές υποθέσεις, κληρονομικά και συμβατικές υποχρεώσεις.",
      features: ["Οικογενειακό", "Κληρονομικό", "Συμβάσεις"]
    },
    {
      icon: <MessageSquare className="text-sky-blue" size={32} />,
      title: "Διαμεσολάβηση",
      description: "Έμφαση στην εξωδικαστική επίλυση διαφορών για ταχύτερα και οικονομικότερα αποτελέσματα.",
      features: ["Εξωδικαστική Επίλυση", "Συμβουλευτική", "Διαπραγματεύσεις"]
    }
  ];

  return (
    <section id="expertise" className="minimal-zen-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Τομείς Εξειδίκευσης</h2>
          <p className="text-gray-600">
            Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες με επίκεντρο τον άνθρωπο και την ουσιαστική επίλυση των προβλημάτων σας.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 hover:border-sky-blue/30 hover:shadow-xl hover:shadow-sky-blue/5 transition-all group"
            >
              <div className="mb-6 p-4 bg-soft-white rounded-xl inline-block group-hover:bg-sky-blue/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-medium text-royal-blue/80">
                    <CheckCircle2 size={16} className="text-sky-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  return (
    <section id="values" className="minimal-zen-spacing bg-soft-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Γιατί να μας επιλέξετε;</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-royal-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Απλή και Κατανοητή Γλώσσα</h4>
                  <p className="text-gray-600">Μεταφράζουμε τη νομική ορολογία σε απλά λόγια, ώστε να νιώθετε ασφαλείς και ενημερωμένοι σε κάθε βήμα.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-royal-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Μάχιμη Δικηγορία από το 2016</h4>
                  <p className="text-gray-600">Με πολυετή εμπειρία στις δικαστικές αίθουσες, διεκδικούμε το καλύτερο δυνατό αποτέλεσμα για εσάς.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-royal-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Ειλικρίνεια & Διαφάνεια</h4>
                  <p className="text-gray-600">Σας ενημερώνουμε ρεαλιστικά για τις πιθανότητες επιτυχίας και το κόστος της υπόθεσής σας εξαρχής.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-royal-blue text-white p-10 md:p-16 rounded-3xl relative overflow-hidden"
          >
            <Scale className="absolute -top-10 -right-10 text-white/5 w-64 h-64" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
              "Η εμπιστοσύνη χτίζεται με πράξεις και καθαρές κουβέντες."
            </h3>
            <p className="text-white/80 text-lg italic relative z-10">
              — Μαρία Αργυροπούλου
            </p>
            <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-2 gap-8 relative z-10">
              <div>
                <div className="text-3xl font-bold mb-1 text-sky-blue">500+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Υποθέσεις</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1 text-sky-blue">8+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Έτη Εμπειρίας</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Γιώργος Π.",
      text: "Ότι ερωτήματα είχα απαντήθηκαν με απλό και κατανοητό τρόπο. Ένιωσα σιγουριά από την πρώτη στιγμή.",
      rating: 5
    },
    {
      name: "Ελένη Κ.",
      text: "Εξαιρετική επαγγελματίας. Ανέλαβε μια δύσκολη υπόθεση ακινήτου και την έφερε εις πέρας άψογα.",
      rating: 5
    },
    {
      name: "Νίκος Μ.",
      text: "Η καλύτερη επιλογή για διαμεσολάβηση. Γλιτώσαμε χρόνο και ταλαιπωρία χάρη στις συμβουλές της.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="minimal-zen-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Τι λένε οι πελάτες μας</h2>
            <p className="text-gray-600">Η ικανοποίηση των ανθρώπων που μας εμπιστεύονται είναι η μεγαλύτερη ανταμοιβή μας.</p>
          </div>
          <div className="flex items-center gap-2 bg-soft-white px-4 py-2 rounded-lg border border-gray-100">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="font-bold">5.0/5.0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-soft-white rounded-2xl relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="font-bold text-royal-blue">— {review.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="minimal-zen-spacing bg-soft-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Επικοινωνήστε μαζί μας</h2>
            <p className="text-gray-600 mb-10">
              Είμαστε εδώ για να σας ακούσουμε και να βρούμε μαζί την καλύτερη λύση για το νομικό σας ζήτημα.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-sky-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold mb-1">Διεύθυνση</h5>
                  <p className="text-gray-600">Μεγάλου Αλεξάνδρου 14, Δάφνη, 172 35</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-sky-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold mb-1">Τηλέφωνο</h5>
                  <p className="text-gray-600">+30 210 1234567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-sky-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold mb-1">Email</h5>
                  <p className="text-gray-600">info@argyropoulou-law.gr</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="tel:+302101234567" 
                className="px-6 py-3 bg-royal-blue text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Phone size={18} /> Κλήση Τώρα
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-full min-h-[400px] border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.123456789!2d23.7345678!3d37.9456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd123456789%3A0x123456789abcdef!2zzpzOtc6zLiDOkc67zrXOvs6szr3OtM-Bzr_PhSAxNCwgzpTOrM-Gzr3OtyAxNzIgMzU!5e0!3m2!1sel!2sgr!4v1620000000000!5m2!1sel!2sgr" 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-royal-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-xl font-bold mb-2">ΜΑΡΙΑ ΑΡΓΥΡΟΠΟΥΛΟΥ</div>
          <p className="text-white/60 text-sm">© 2026 Δικηγορικό Γραφείο. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-white/60 hover:text-white transition-colors"><ExternalLink size={20} /></a>
          <a href="#" className="text-white/60 hover:text-white transition-colors"><MessageSquare size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-sky-blue/30 selection:text-royal-blue">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Values />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
