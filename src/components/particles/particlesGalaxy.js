export const particlesGalaxy = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: { value: 1000, density: { enable: true, area: 1000 } },
    color: { value: ["#ffffff", "#a78bfa", "#60a5fa", "#f472b6"] },
    opacity: { value: { min: 0.2, max: 0.8 } },
    size: { value: { min: 1, max: 3 } },
    shape: { type: "circle" },
    links: { enable: false }, // no linking, pure starry sky
    move: { enable: true, speed: 0.6, random: true, outModes: "out" },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" },
      onClick: { enable: true, mode: "repulse" },
    },
    modes: {
      bubble: { distance: 150, size: 4, duration: 2, opacity: 0.8 },
      repulse: { distance: 200 },
    },
  },
  retina_detect: true,
};
