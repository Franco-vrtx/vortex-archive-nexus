
import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // loads tsparticles-slim

export function VortexAnimation() {
  const [init, setInit] = useState(false);
  
  // Initialize tsParticles engine only once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    // Container loaded, no action needed
  }, []);

  const options: ISourceOptions = useMemo(() => {
    // Determine colors based on the current theme (check if dark class is present)
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    const particleColor = isDarkMode ? "#a5b4fc" : "#505050"; // Light purple for dark, darker gray for light
    const linkColor = isDarkMode ? "#6366f1" : "#c0c0c0"; // Primary purple for dark, lighter gray for light
    const backgroundColor = isDarkMode 
      ? "transparent" // Transparent dark background
      : "transparent"; // Transparent light background

    return {
      background: {
        color: {
          value: backgroundColor,
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Change mode for subtle interaction
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5, // Make grabbed links slightly more visible
            },
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: 0.3, // Slightly more visible links
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Keep particles within bounds
          },
          random: true, // Random direction
          speed: 0.5, // Very slow subtle movement
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 400, // Increased density (smaller area = more particles)
          },
          value: 150, // Significantly more particles
        },
        opacity: {
          value: 0.6, // More visible particles
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // Small particles
        },
      },
      detectRetina: true,
    };
  }, []); // Calculate options once, then listen for theme changes

  // Re-render particles when theme changes
  useEffect(() => {
    const themeObserver = new MutationObserver(() => {
      // Force options recalculation by remounting particles
      setInit(false);
      setTimeout(() => setInit(true), 0);
    });
    
    themeObserver.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => themeObserver.disconnect();
  }, []);

  // Only render particles when engine is initialized
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 w-full h-full -z-10" // Position behind content
      />
    );
  }

  return null;
}
