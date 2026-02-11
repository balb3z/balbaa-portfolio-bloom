import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Abdelrahman<br />Balbaa
            </h1>
            <p className="text-xl text-primary font-semibold mb-4">AI & Data Science Student</p>
            <p className="text-muted-foreground max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
              Passionate about building intelligent systems and turning data into actionable insights. Currently studying at Alexandria University.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <Button onClick={() => scrollTo("#projects")} size="lg">View Projects</Button>
              <Button onClick={() => scrollTo("#contact")} variant="outline" size="lg">Contact Me</Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href="mailto:abdelrahmanbalbaa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
              <a href="tel:+201033378927" className="text-muted-foreground hover:text-primary transition-colors"><Phone size={20} /></a>
              <a href="https://linkedin.com/in/abdelrahman-balbaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
              <img src={profilePhoto} alt="Abdelrahman Balbaa" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
