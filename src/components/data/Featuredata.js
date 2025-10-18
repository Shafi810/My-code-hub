



export const featuresData = [
   {
    id: 1,
    icon: "html",
    heading: "HTML + CSS",
    description: "Building clean, semantic, and responsive layouts with a professional and modern approach."
  },
  {
    id: 2,
    icon: "javascript",
    heading: "JavaScript",
    description: "Crafting dynamic, interactive, and modern web experiences with clean coding practices."
  },
  {
    id: 3,
    icon: "tailwind",
    heading: "Tailwind CSS",
    description: "Designing fast, scalable, and professional UIs with utility-first modern styling."
  },
  {
    id: 4,
    icon: "bootstrap",
    heading: "Bootstrap",
    description: "Creating responsive, mobile-first websites with a professional touch and ready-to-use components."
  },
  {
    id: 5,
    icon: "react",
    heading: "React + Vite",
    description: "Developing high-performance, modern web applications with React’s flexibility and Vite’s blazing speed."
  },
  {
     id: 6,
    icon: "mobile",
    heading: "Full Skillset Overview",
    description: "Proficient in modern front-end development with expertise in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and React + Vite — delivering clean, responsive, and professional solutions."
  
  }
];
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Workflow", href: "#workflow" },
  { name: "Pricing", href: "#pricing" },
  { name: "Issues", href: "#issues" },
  { name: "Contact", href: "#contact" },
];

export const checklistItems = [
  {
    icon: "circle",
    title: "Design to Code Conversion",
    description: "I take your Figma, PSD, or XD design and convert it into a clean and responsive frontend."
  },
  {
    icon: "circle",
    title: "Responsive Layouts",
    description: "I make sure your website looks perfect on all devices — desktop, tablet, and mobile."
  },
  {
    icon: "circle",
    title: "Pixel-Perfect UI",
    description: "Using HTML, CSS, Tailwind, and modern frameworks, I ensure your design matches exactly."
  },
  {
    icon: "circle",
    title: "Interactive Components",
    description: "I add smooth animations, sliders, and interactive elements with JavaScript and React."
  },
  {
    icon: "circle",
    title: "Fast Development with Vite",
    description: "Vite helps me build and test your project quickly with optimized performance."
  },
  {
    icon: "circle",
    title: "Optimized & Clean Code",
    description: "Your project will have structured, maintainable, and SEO-friendly code."
  }
];


export const pricingOptions = [
  {
    title: "Starter",
    price: "$49",
    features: [
      "1 Page Responsive Website",
      "Fix HTML, CSS, JS Errors",
      "Basic Animations",
      "Cross-Browser Support"
    ]
  },
  {
    title: "Pro",
    price: "$99",
    features: [
      "Up to 5 Pages Website",
      "Responsive + Mobile Friendly",
      "Custom Sliders & Animations",
      "SEO Friendly Code"
    ]
  },
  {
    title: "Premium",
    price: "$199",
    features: [
      "Full Front-End Development",
      "Unlimited Pages",
      "Advanced Animations & Effects",
      "Priority Support & Maintenance"
    ]
  }
];








// frontendIssues2025.js
// Fixed: proper array of objects with each issue as an object inside the array

export const frontendIssues = [
  {
    id: 1,
    title: "Website Speed & Core Web Vitals",
    shortDescription: "Slow page loads and poor Core Web Vitals (LCP, CLS, FID) that harm SEO and user retention.",
    whyValidIn2025: "Search engines and users prioritize fast, smooth experiences. Core Web Vitals remain a major ranking and conversion factor.",
    demand: "High — every client wants faster load times and better SEO performance.",
    commonCauses: [
      "Unoptimized images and media",
      "Render-blocking JS/CSS",
      "Large bundles and unused code",
      "Inefficient third-party scripts"
    ],
    recommendedFixes: [
      "Optimize and properly size images (use modern formats like AVIF/WebP where supported).",
      "Implement lazy-loading for images and non-critical assets.",
      "Split and tree-shake JavaScript; use code-splitting and dynamic imports.",
      "Defer or async third-party scripts; audit and remove unnecessary ones.",
      "Use server-side compression (Brotli/Gzip) and modern caching headers.",
      "Measure with Lighthouse and field data (CrUX) and track LCP/CLS/FID improvements."
    ],
    tags: ["performance", "seo", "core-web-vitals"],
    lastUpdated: "2025-09-17"
  },
  {
    id: 2,
    title: "Mobile-first Responsiveness",
    shortDescription: "Layouts, navigation, and controls that break or become unusable on mobile and tablet devices.",
    whyValidIn2025: "Mobile continues to drive most traffic. Poor mobile UX directly reduces conversions and user trust.",
    demand: "Very high — clients expect flawless mobile experiences out of the box.",
    commonCauses: [
      "Fixed-width layouts and non-fluid components",
      "Tiny touch targets and inaccessible tap zones",
      "Images and media that overflow containers",
      "Lack of testing on real devices and viewport sizes"
    ],
    recommendedFixes: [
      "Adopt mobile-first CSS and responsive units (%, rem, vw) rather than fixed pixels.",
      "Use accessible touch target sizes (recommended 44x44 px) and clear spacing.",
      "Test breakpoints across real devices and emulators; use responsive images (srcset).",
      "Create flexible components that adapt (avoid absolute positioning where possible).",
      "Prioritize content and simplify navigation for small screens."
    ],
    tags: ["responsiveness", "mobile-first", "ux"],
    lastUpdated: "2025-09-17"
  },
  {
    id: 3,
    title: "Accessibility & Inclusive UX",
    shortDescription: "Sites not optimized for screen readers, keyboard navigation, or users with visual and motor impairments.",
    whyValidIn2025: "Regulations (WCAG, ADA) and user expectations make accessibility non-negotiable; accessible sites reach larger audiences.",
    demand: "High and growing — clients want legally compliant and inclusive sites that reflect well on their brand.",
    commonCauses: [
      "Missing semantic HTML and ARIA attributes",
      "Poor color contrast and small font sizes",
      "Interactive elements inaccessible by keyboard",
      "Lack of alt text and descriptive labels"
    ],
    recommendedFixes: [
      "Use semantic HTML (main, nav, header, footer, button, form elements) and meaningful landmarks.",
      "Follow WCAG guidelines for color contrast and text size; provide zoom-friendly layouts.",
      "Ensure keyboard focus states and logical tab order; test with screen readers.",
      "Provide descriptive alt text for images and labels for form controls.",
      "Run automated accessibility audits and manual testing with assistive technologies."
    ],
    tags: ["accessibility", "wcag", "inclusive-design"],
    lastUpdated: "2025-09-17"
  }
];








export default featuresData;