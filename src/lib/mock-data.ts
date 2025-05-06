
import { Article } from "@/types/article";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Introducción a los Sistemas Vortex",
    excerpt: "Una revisión completa de los principios básicos de los sistemas Vortex y sus aplicaciones en tecnología moderna.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    createdAt: "2023-10-15T10:00:00Z",
    updatedAt: "2023-10-15T10:00:00Z",
    tags: ["Vortex", "Tecnología", "Fundamentos"],
    categoryId: "tech",
    sections: [
      {
        id: "s1",
        title: "Origen de los Sistemas Vortex",
        content: "# Origen de los Sistemas Vortex\n\nLos sistemas Vortex tienen su origen en las investigaciones de dinámica de fluidos realizadas a principios del siglo XX. Estos sistemas aprovechan los principios de turbulencia y rotación para crear soluciones eficientes en diversos campos.\n\n## Principios fundamentales\n\nLa base teórica de los sistemas Vortex se sustenta en tres principios:\n\n1. **Conservación del momento angular**\n2. **Minimización de la entropía**\n3. **Optimización de flujos energéticos**\n\nEstos principios permiten diseñar sistemas que aprovechan la energía de manera más eficiente que las soluciones tradicionales.",
        order: 1
      },
      {
        id: "s2",
        title: "Aplicaciones en la Tecnología Moderna",
        content: "# Aplicaciones en la Tecnología Moderna\n\nLos sistemas Vortex han encontrado aplicaciones en numerosos campos tecnológicos:\n\n## Computación cuántica\n\nEn el campo de la computación cuántica, los principios Vortex se utilizan para estabilizar qubits mediante la creación de campos magnéticos toroidales.\n\n```javascript\n// Ejemplo de implementación de un algoritmo Vortex para estabilización de qubits\nfunction stabilizeQubit(qubitState, vortexField) {\n  const stabilizedState = qubitState.applyVortex(vortexField);\n  return stabilizedState.normalize();\n}\n```\n\n## Energías renovables\n\nLos generadores eólicos basados en principios Vortex pueden incrementar la eficiencia de captación energética hasta un 35% comparado con los diseños convencionales.",
        order: 2
      },
      {
        id: "s3",
        title: "El Futuro de los Sistemas Vortex",
        content: "# El Futuro de los Sistemas Vortex\n\nLa investigación actual en sistemas Vortex se centra en las siguientes áreas:\n\n- Integración con sistemas de inteligencia artificial para optimización dinámica\n- Aplicaciones en nanotecnología para sistemas de entrega de medicamentos\n- Desarrollo de nuevos materiales con propiedades electromagnéticas especiales\n\n## Retos pendientes\n\nA pesar de su potencial, los sistemas Vortex aún enfrentan desafíos importantes:\n\n1. Escalabilidad en condiciones extremas\n2. Estabilidad a largo plazo en sistemas de alta energía\n3. Modelado preciso de comportamientos caóticos emergentes",
        order: 3
      }
    ]
  },
  {
    id: "2",
    title: "Arquitecturas de Software Espirales",
    excerpt: "Explorando las nuevas arquitecturas de software inspiradas en patrones espirales y sus ventajas para sistemas distribuidos.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    createdAt: "2023-11-22T14:30:00Z",
    updatedAt: "2023-11-22T14:30:00Z",
    tags: ["Programación", "Arquitectura", "Software"],
    categoryId: "dev",
    sections: [
      {
        id: "s1",
        title: "Fundamentos de las Arquitecturas Espirales",
        content: "# Fundamentos de las Arquitecturas Espirales\n\nLas arquitecturas espirales representan un nuevo paradigma en el diseño de software distribuido, inspiradas en patrones naturales de crecimiento y optimización.\n\nA diferencia de las arquitecturas tradicionales en capas o microservicios, las espirales organizan los componentes siguiendo un patrón de expansión desde un núcleo central, maximizando la cohesión y minimizando el acoplamiento.",
        order: 1
      },
      {
        id: "s2",
        title: "Implementación y Patrones",
        content: "# Implementación y Patrones\n\nLa implementación de arquitecturas espirales implica seguir ciertos patrones clave:\n\n```typescript\n// Ejemplo de componente en arquitectura espiral\nclass VortexComponent<T> {\n  private state: T;\n  private spiralLevel: number;\n  private connections: VortexComponent<any>[];\n  \n  constructor(initialState: T, level: number) {\n    this.state = initialState;\n    this.spiralLevel = level;\n    this.connections = [];\n  }\n  \n  connect(component: VortexComponent<any>): void {\n    this.connections.push(component);\n    // Establece conexión bidireccional respetando\n    // el patrón espiral de comunicación\n  }\n  \n  propagate(message: any): void {\n    // Propaga mensajes siguiendo el patrón espiral\n  }\n}\n```\n\nEste patrón permite una comunicación más eficiente entre componentes, reduciendo la latencia y aumentando la tolerancia a fallos.",
        order: 2
      },
      {
        id: "s3",
        title: "Casos de Estudio",
        content: "# Casos de Estudio\n\nVarias empresas pioneras han adoptado arquitecturas espirales con resultados prometedores:\n\n## Sistema de Procesamiento de Datos Financieros\n\nUna importante institución financiera implementó una arquitectura espiral para su sistema de procesamiento de transacciones, logrando:\n\n- Reducción del 40% en latencia de procesamiento\n- Mejora del 65% en recuperación ante fallos\n- Escalabilidad casi lineal hasta 10,000 nodos\n\n## Plataforma de IoT Industrial\n\nUn fabricante de soluciones IoT rediseñó su plataforma utilizando principios espirales, obteniendo:\n\n- Reducción del 30% en consumo de recursos\n- Mejora del 50% en tiempo de respuesta\n- Mayor flexibilidad para actualizaciones parciales del sistema",
        order: 3
      }
    ]
  },
  {
    id: "3",
    title: "Algoritmos de Optimización Vortical",
    excerpt: "Cómo los algoritmos inspirados en vórtices naturales están revolucionando la optimización en inteligencia artificial.",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-10T09:15:00Z",
    tags: ["Algoritmos", "IA", "Optimización"],
    categoryId: "ai",
    sections: [
      {
        id: "s1",
        title: "Fundamentos de la Optimización Vortical",
        content: "# Fundamentos de la Optimización Vortical\n\nLos algoritmos de optimización vortical (VOA - Vortex Optimization Algorithms) constituyen una nueva familia de métodos meta-heurísticos inspirados en la formación y dinámica de vórtices en sistemas fluidos naturales.\n\nEstos algoritmos son particularmente efectivos en problemas de optimización no lineal con múltiples óptimos locales, donde los métodos tradicionales como el descenso de gradiente tienden a quedar atrapados.",
        order: 1
      },
      {
        id: "s2",
        title: "Formulación Matemática",
        content: "# Formulación Matemática\n\nLa base matemática de los algoritmos vorticales se puede expresar de la siguiente manera:\n\n$$\\mathbf{x}_{i}^{t+1} = \\mathbf{x}_{i}^{t} + \\alpha \\cdot \\mathbf{v}_{i}^{t} + \\beta \\cdot \\mathbf{r} \\times (\\mathbf{x}_{best} - \\mathbf{x}_{i}^{t})$$\n\nDonde:\n\n- $\\mathbf{x}_{i}^{t}$ es la posición de la partícula $i$ en la iteración $t$\n- $\\mathbf{v}_{i}^{t}$ es la velocidad actual\n- $\\mathbf{x}_{best}$ es la mejor solución encontrada\n- $\\alpha$ y $\\beta$ son parámetros de control\n- $\\mathbf{r}$ es un vector unitario de dirección aleatoria\n\nEl producto vectorial $\\mathbf{r} \\times (\\mathbf{x}_{best} - \\mathbf{x}_{i}^{t})$ induce un movimiento rotacional alrededor de la mejor solución, simulando el efecto vortical.",
        order: 2
      },
      {
        id: "s3",
        title: "Implementación y Resultados",
        content: "# Implementación y Resultados\n\nUna implementación básica en Python del algoritmo VOA sería:\n\n```python\nimport numpy as np\n\ndef vortex_optimization(objective_func, dims=10, particles=50, iterations=1000):\n    # Inicialización\n    positions = np.random.uniform(-10, 10, (particles, dims))\n    velocities = np.zeros((particles, dims))\n    best_position = positions[0]\n    best_score = objective_func(best_position)\n    \n    # Parámetros\n    alpha = 0.7  # Factor de inercia\n    beta = 1.5   # Factor vortical\n    \n    for t in range(iterations):\n        # Actualizar mejor posición global\n        for i in range(particles):\n            score = objective_func(positions[i])\n            if score < best_score:\n                best_score = score\n                best_position = positions[i].copy()\n        \n        # Actualizar partículas\n        for i in range(particles):\n            # Vector aleatorio unitario\n            r = np.random.randn(dims)\n            r = r / np.linalg.norm(r)\n            \n            # Componente vortical (producto vectorial simplificado)\n            diff = best_position - positions[i]\n            vortical = np.cross(r, diff) if dims >= 2 else 0\n            \n            # Actualizar velocidad y posición\n            velocities[i] = alpha * velocities[i] + beta * vortical\n            positions[i] += velocities[i]\n    \n    return best_position, best_score\n```\n\n## Comparación con otros algoritmos\n\nEn pruebas con funciones de benchmark estándar, VOA muestra mejoras significativas:\n\n| Función | PSO | GA | VOA |\n|---------|-----|----|----|  \n| Rastrigin | 5.23 | 3.14 | 0.87 |\n| Rosenbrock | 15.6 | 12.8 | 8.3 |\n| Ackley | 2.1 | 1.8 | 0.6 |",
        order: 3
      }
    ]
  },
  {
    id: "4",
    title: "Patrones Vorticiales en Diseño UX",
    excerpt: "Aplicando principios de movimiento vorticial para crear interfaces de usuario más intuitivas y atractivas.",
    coverImage: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    createdAt: "2024-02-28T16:45:00Z",
    updatedAt: "2024-02-28T16:45:00Z",
    tags: ["Diseño UX", "UI", "Interacción"],
    categoryId: "design",
    sections: [
      {
        id: "s1",
        title: "Principios del Diseño Vorticial",
        content: "# Principios del Diseño Vorticial\n\nEl diseño vorticial es una aproximación emergente que aplica los principios de movimiento espiral y fluido a las interfaces de usuario. Se basa en la idea de que nuestro cerebro está naturalmente adaptado para procesar patrones de movimiento circulares y espirales que encontramos en la naturaleza.\n\nLos cinco principios fundamentales del diseño vorticial son:\n\n1. **Flujo Circular**: Organizar elementos de navegación e información siguiendo patrones circulares o espirales\n2. **Convergencia Visual**: Dirigir la atención del usuario hacia puntos focales mediante gradientes o patrones convergentes\n3. **Micro-interacciones Rotacionales**: Utilizar animaciones sutiles de rotación para feedback y transiciones\n4. **Jerarquía Espiral**: Organizar la información desde el centro (más importante) hacia afuera (detalles complementarios)\n5. **Navegación Fluida**: Implementar transiciones entre páginas o estados que imiten movimientos fluidos naturales",
        order: 1
      },
      {
        id: "s2",
        title: "Implementación en Interfaces Modernas",
        content: "# Implementación en Interfaces Modernas\n\nTransformar estos principios teóricos en interfaces funcionales requiere un enfoque práctico. A continuación se presentan algunas técnicas concretas:\n\n## Menús Radiales\n\nLos menús radiales representan una aplicación directa del principio de flujo circular:\n\n```css\n.radial-menu {\n  position: relative;\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n}\n\n.menu-item {\n  position: absolute;\n  transform-origin: 50% 50%;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.menu-item:hover {\n  transform: scale(1.1) rotate(5deg);\n}\n\n/* Posicionamiento de los items en círculo */\n.menu-item:nth-child(1) { transform: rotate(0deg) translate(120px) rotate(0deg); }\n.menu-item:nth-child(2) { transform: rotate(60deg) translate(120px) rotate(-60deg); }\n.menu-item:nth-child(3) { transform: rotate(120deg) translate(120px) rotate(-120deg); }\n.menu-item:nth-child(4) { transform: rotate(180deg) translate(120px) rotate(-180deg); }\n.menu-item:nth-child(5) { transform: rotate(240deg) translate(120px) rotate(-240deg); }\n.menu-item:nth-child(6) { transform: rotate(300deg) translate(120px) rotate(-300deg); }\n```\n\n## Scrolling Vorticial\n\nImplementar un sistema de scroll que siga un patrón sutilmente espiral puede aumentar el engagement con contenido largo:",
        order: 2
      },
      {
        id: "s3",
        title: "Casos de Estudio y Resultados",
        content: "# Casos de Estudio y Resultados\n\nVarias empresas han experimentado con patrones de diseño vorticial con resultados prometedores:\n\n## Aplicación de Visualización de Datos Financieros\n\nUna empresa FinTech rediseñó su dashboard principal utilizando principios vorticiales, con los siguientes resultados:\n\n- Incremento del 28% en tiempo de permanencia\n- Reducción del 15% en la tasa de rebote\n- Mejora del 22% en la retención de información por parte de los usuarios\n\nLa implementación utilizó un diseño radial para mostrar métricas relacionadas, con animaciones sutiles que enfatizaban las relaciones entre diferentes datos financieros.\n\n## Tienda Online de Productos de Lujo\n\nUna marca de lujo implementó una navegación basada en principios vorticiales para su catálogo online:\n\n- Aumento del 35% en el promedio de productos vistos por sesión\n- Incremento del 18% en la tasa de conversión\n- Feedback positivo sobre la experiencia de navegación \"fluida\" e \"intuitiva\"\n\nEl diseño utilizaba transiciones espirales entre categorías de productos y un zoom suave con efecto vorticial al seleccionar artículos.",
        order: 3
      }
    ]
  }
];
