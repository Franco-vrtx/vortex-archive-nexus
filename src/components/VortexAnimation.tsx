
import { useRef, useEffect, useCallback } from 'react';
import { createNoise3D } from 'simplex-noise';

export function VortexAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number>(0);
  const particlePropsRef = useRef<Float32Array | null>(null);
  const centerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const tickRef = useRef<number>(0);
  const noise3DRef = useRef<ReturnType<typeof createNoise3D> | null>(null);
  
  // Constants
  const PARTICLE_COUNT = 700;
  const PARTICLE_PROPS_COUNT = 7; // x, y, vx, vy, life, ttl, hue
  const TAU = Math.PI * 2;
  const noiseSteps = 0.0005;
  
  const initParticle = useCallback((i: number) => {
    if (!particlePropsRef.current || !canvasRef.current) return;
    
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const i3 = i * PARTICLE_PROPS_COUNT;
    
    // Position
    particlePropsRef.current[i3 + 0] = Math.random() * width; // x
    particlePropsRef.current[i3 + 1] = Math.random() * height; // y
    
    // Velocity
    particlePropsRef.current[i3 + 2] = 0; // vx
    particlePropsRef.current[i3 + 3] = 0; // vy
    
    // Life
    particlePropsRef.current[i3 + 4] = 0; // life
    particlePropsRef.current[i3 + 5] = Math.random() * 200 + 100; // ttl
    
    // Color (hue)
    particlePropsRef.current[i3 + 6] = Math.random() * 60 + 220; // 220-280 (blue to purple)
  }, []);
  
  const initParticles = useCallback(() => {
    if (!canvasRef.current) return;
    
    particlePropsRef.current = new Float32Array(PARTICLE_COUNT * PARTICLE_PROPS_COUNT);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      initParticle(i);
    }
  }, [initParticle]);
  
  const fadeInOut = (t: number, m: number) => {
    const hm = 0.5 * m;
    return Math.abs((t + hm) % m - hm) / hm;
  };
  
  const lerp = (start: number, end: number, amt: number) => {
    return (1 - amt) * start + amt * end;
  };
  
  const updateParticle = useCallback((i: number) => {
    if (!particlePropsRef.current || !canvasRef.current || !noise3DRef.current) return;
    
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const noise3D = noise3DRef.current;
    const i3 = i * PARTICLE_PROPS_COUNT;
    
    // Extract properties
    let x = particlePropsRef.current[i3 + 0];
    let y = particlePropsRef.current[i3 + 1];
    let vx = particlePropsRef.current[i3 + 2];
    let vy = particlePropsRef.current[i3 + 3];
    let life = particlePropsRef.current[i3 + 4];
    const ttl = particlePropsRef.current[i3 + 5];
    
    // Update life
    particlePropsRef.current[i3 + 4] = life = Math.min(ttl, life + 1);
    
    // Reset particle if it's complete its life cycle
    if (life >= ttl) {
      initParticle(i);
      return;
    }
    
    // Noise coefficients
    const xOff = 0.00025;
    const yOff = 0.00025;
    const zOff = 0.0005;
    const speed = 0.7;
    
    // Get noise value at current position and time
    let noise = noise3D(x * xOff, y * yOff, tickRef.current * zOff) * noiseSteps * TAU;
    
    // Update velocity based on noise (creates flow field effect)
    vx = lerp(vx, Math.cos(noise) * speed, 0.05);
    vy = lerp(vy, Math.sin(noise) * speed, 0.05);
    
    // Update position
    x += vx;
    y += vy;
    
    // Wrap around canvas boundaries
    if (x < 0) x = width;
    if (x > width) x = 0;
    if (y < 0) y = height;
    if (y > height) y = 0;
    
    // Store updated values
    particlePropsRef.current[i3 + 0] = x;
    particlePropsRef.current[i3 + 1] = y;
    particlePropsRef.current[i3 + 2] = vx;
    particlePropsRef.current[i3 + 3] = vy;
  }, [initParticle]);
  
  const drawParticles = useCallback(() => {
    if (!particlePropsRef.current || !canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * PARTICLE_PROPS_COUNT;
      const x = particlePropsRef.current[i3 + 0];
      const y = particlePropsRef.current[i3 + 1];
      const life = particlePropsRef.current[i3 + 4];
      const ttl = particlePropsRef.current[i3 + 5];
      const hue = particlePropsRef.current[i3 + 6];
      
      // Calculate radius and opacity based on life
      const radius = 1 + Math.sin(life / ttl * Math.PI) * 1.5;
      const opacity = fadeInOut(life, ttl);
      
      // Set color based on hue
      const isDarkMode = document.documentElement.classList.contains('dark');
      const particleColor = isDarkMode 
        ? `hsla(${hue}, 100%, 70%, ${opacity * 0.8})`
        : `hsla(${hue}, 80%, 50%, ${opacity * 0.7})`;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, TAU);
      ctx.fillStyle = particleColor;
      ctx.fill();
      
      // Update particle for next frame
      updateParticle(i);
    }
  }, [updateParticle]);
  
  const draw = useCallback(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Increment time ticker for noise
    tickRef.current += 1;
    
    // Clear canvas with slight opacity to create trails
    ctx.fillStyle = document.documentElement.classList.contains('dark')
      ? 'rgba(0, 0, 0, 0.2)'
      : 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Draw all particles
    drawParticles();
    
    // Request next frame
    animationFrameIdRef.current = requestAnimationFrame(draw);
  }, [drawParticles]);
  
  const resize = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size to match its display size
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Update center reference
    centerRef.current = {
      x: canvas.width / 2,
      y: canvas.height / 2
    };
    
    // Reinitialize particles for new dimensions
    initParticles();
  }, [initParticles]);
  
  const setup = useCallback(() => {
    // Create noise generator (client-side only)
    noise3DRef.current = createNoise3D();
    
    // Initialize the system
    resize();
    
    // Start animation
    animationFrameIdRef.current = requestAnimationFrame(draw);
    
    // Add resize listener
    window.addEventListener('resize', resize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [draw, resize]);
  
  // Initialize on mount
  useEffect(() => {
    // Only run setup in browser environment
    if (typeof window !== 'undefined') {
      const cleanup = setup();
      return cleanup;
    }
  }, [setup]);
  
  // Re-initialize when theme changes
  useEffect(() => {
    const themeObserver = new MutationObserver(() => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          // Clear canvas on theme change
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
    });
    
    themeObserver.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => themeObserver.disconnect();
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
}
