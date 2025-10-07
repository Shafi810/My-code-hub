export const particlesGlow = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: { value: 60, density: { enable: true, area: 800 } },
    color: { value: ["#3b82f6", "#22d3ee", "#93c5fd"] },
    opacity: { value: 0.4 },
    size: { value: { min: 3, max: 7 } },
    shape: { type: "circle" },
    links: {
      enable: true,
      distance: 120,
      color: "#3b82f6",
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 1, random: true, outModes: "out" },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 180, links: { opacity: 0.4 } },
      push: { quantity: 3 },
    },
  },
  retina_detect: true,
};
