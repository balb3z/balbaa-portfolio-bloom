import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", year: "2024" },
  { name: "Oracle Database Foundations", issuer: "Oracle", year: "2023" },
  { name: "IBM Data Science Professional", issuer: "IBM", year: "2023" },
  { name: "Data Science Summer School", issuer: "BUE", year: "2023" },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        {/* Education */}
        <div ref={ref} className={cn("transition-all duration-700 mb-16", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Education</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Alexandria University</h3>
                <p className="text-primary font-medium">Faculty of Computer and Data Science — AI Department</p>
                <p className="text-sm text-muted-foreground mt-1">2021 – 2025 (Expected)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div ref={ref2} className={cn("transition-all duration-700", isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Certifications</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certifications.map((c, i) => (
              <div
                key={c.name}
                className={cn(
                  "bg-card border border-border rounded-xl p-5 transition-all duration-500 hover:scale-105 hover:shadow-md",
                  isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: isVisible2 ? `${i * 100}ms` : "0ms" }}
              >
                <div className="flex items-start gap-3">
                  <Award size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{c.name}</h4>
                    <p className="text-xs text-muted-foreground">{c.issuer} · {c.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
