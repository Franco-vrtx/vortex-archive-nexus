
import { ArticleSection } from "@/types/article";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionNavProps {
  sections: ArticleSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function SectionNav({ sections, activeSection, onSectionChange }: SectionNavProps) {
  // Track if nav should be sticky (after scrolling past intro)
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "transition-all duration-300 py-4 px-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/40",
        isSticky && "sticky top-20"
      )}
    >
      <h4 className="text-md font-heading font-semibold mb-2">Contenido</h4>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <button 
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "text-sm py-1 px-2 rounded-md w-full text-left transition-colors",
                activeSection === section.id 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "hover:bg-secondary/10"
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
