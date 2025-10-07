export const particlesNeon = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: { value: 100, density: { enable: true, area: 800 } },
    color: { value: ["#00f7ff", "#ff00f7", "#39ff14", "#ff3131"] },
    opacity: { value: 0.7 },
    size: { value: { min: 2, max: 5 } },
    shape: { type: ["circle", "triangle", "polygon"] },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1.2,
    },
    move: { enable: true, speed: 2, random: true, outModes: "out" },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 200, links: { opacity: 0.8 } },
      push: { quantity: 6 },
    },
  },
  retina_detect: true,
};
