import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={cn(
            "flex flex-col md:flex-row items-center gap-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border border-border">
            <img src={profilePhoto} alt="Abdelrahman Balbaa" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
            <div className="w-12 h-1 bg-primary rounded mb-6" />
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              I'm a dedicated AI and Data Science student at Alexandria University with a strong foundation in machine learning, data analysis, and software development. 
              I've completed internships at WE Telecom and CIB, and I'm currently enrolled in the Digital Egypt Pioneers Initiative (DEPI) for Data Science. 
              I thrive on solving complex problems, leading teams, and creating impactful solutions that leverage the power of artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
