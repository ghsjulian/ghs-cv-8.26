const projectsData = [
  {
    id: 0,
    category: "fullstack",
    title: "Allbizz Music Studio",
    subtitle: "Full-Stack Social Music App",
    image: "/projects/music-studio.jpg",
    description:
      "ALL BIZZ Entertainment - is a modern full-stack music platform that enables artists, creators, and listeners to connect through music. Built using modern web technologies, the application follows scalable architecture and production-ready development practices suitable for commercial deployment.",
    duration: "2.5 Weeks",
    tools: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Stripe",
      "VPS",
    ],
    liveDemo: "https://allbizzent.com",
    github: "https://github.com/ghsjulian/music-studio",
    featured: true,
  },
  {
    id: 1,
    category: "Frontend UX/UI",
    title: "Aura's Beauty Studio Platform",
    subtitle: "Beauty Studio Booking & Management",
    image: "/projects/aura-beauty.jpg",
    description:
      "Aura Beauty is a modern web-based application designed for a beauty and wellness lounge or e-commerce platform. It provides a sleek, user-friendly interface showcasing signature services such as hair care, bridal/party makeup, spa treatments, and personalized beauty solutions, emphasizing a luxurious and relaxing experience.",
    duration: "1 Weeks",
    tools: ["React", "Node.js", "Express", "MongoDB", "CSS3"],
    liveDemo: "https://github.com/ghsjulian/aura-beauty.git",
    github: "https://github.com/ghsjulian/aura-beauty",
    featured: true,
  },
  {
    id: 1,
    category: "Static Frontend",
    title: "Shekinah Global Consult",
    subtitle: "Static Booking & Management Web App",
    image: "/projects/sakhina.png",
    description:
      "Shekinah Global Consult, we believe that digital transformation is not just about technology, but about creating a better experience for your customers. Our team of experts will work with ",
    duration: "3 Weeks",
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://shakhina-consultation-ghs.vercel.app",
    github: "https://github.com/ghsjulian/shakhina-consultation",
    featured: true,
  },
  // I have added three objects and those are perfect !

  {
    id: 2,
    category: "frontend",
    title: "Scorpio Canvas Animation Engine",
    subtitle: "Interactive Anatomical Canvas Rendering",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=80",
    description:
      "An advanced JavaScript HTML5 Canvas project featuring segmented anatomical movement, custom math vectors, and smooth, high-FPS physics animations.",
    duration: "1 Week",
    tools: ["HTML5 Canvas", "JavaScript (ES6+)", "CSS3", "Math Vectors"],
    liveDemo: "https://example.com/scorpio-anim",
    github: "https://github.com/ghsjulian/scorpio-canvas",
    featured: true,
  },
  {
    id: 3,
    category: "fullstack",
    title: "Real-Time Chat & Collaboration App",
    subtitle: "WebSocket Powered Messaging Application",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=700&q=80",
    description:
      "Scalable real-time application with instant room creation, online presence tracking, media sharing, and end-to-end JWT security.",
    duration: "2 Weeks",
    tools: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
    liveDemo: "https://example.com/chat-app",
    github: "https://github.com/ghsjulian/realtime-chat-app",
    featured: false,
  },
  {
    id: 4,
    category: "mobile",
    title: "HackerKey Android Terminal Keyboard",
    subtitle: "System-Level Android Utility Keyboard APK",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=700&q=80",
    description:
      "A custom Android system keyboard optimized for terminal environments like Termux, featuring control keys, macros, and customizable themes.",
    duration: "2 Weeks",
    tools: ["Apache Cordova", "JavaScript", "Android SDK", "GitHub Actions"],
    liveDemo: "https://example.com/hackerkey-apk",
    github: "https://github.com/ghsjulian/hackerkey-android",
    featured: true,
  },
  {
    id: 5,
    category: "frontend",
    title: "Modern Mobile Web IDE Workspace",
    subtitle: "Code Editor UI Optimized for Touch & Termux",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=700&q=80",
    description:
      "Lightweight, mobile-first browser code editor equipped with syntax highlighting, auto-closing tags, dynamic output rendering, and local storage state.",
    duration: "5 Days",
    tools: ["React", "Monaco Editor", "Tailwind CSS", "Vite"],
    liveDemo: "https://example.com/mobile-ide",
    github: "https://github.com/ghsjulian/mobile-web-ide",
    featured: false,
  },
  {
    id: 6,
    category: "devops",
    title: "Automated VPS Deployment Suite",
    subtitle: "Nginx & SSL Auto-Configuration Script",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=700&q=80",
    description:
      "Custom Shell script suite for automated Ubuntu VPS setup, configuring PM2 process managers, firewall rules, Let's Encrypt SSL, and Nginx proxies.",
    duration: "3 Days",
    tools: ["Bash Scripting", "Linux", "Nginx", "PM2", "UFW Firewall"],
    liveDemo: "https://example.com/vps-script-demo",
    github: "https://github.com/ghsjulian/vps-deployment-bash",
    featured: false,
  },
];

export default projectsData;
