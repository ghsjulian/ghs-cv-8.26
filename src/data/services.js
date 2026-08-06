const servicesData = [
  {
    id: 1,
    title: "Full-Stack Web Application",
    badge: "Most Popular",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    description:
      "Custom scalable web applications built with MERN (MongoDB, Express, React, Node.js). High performance, secure authentication, and robust REST APIs.",
    deliveryTime: "10 - 15 Days",
    price: "$599",
    priceSuffix: "starts at",
    tools: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    ],
    features: [
      "Responsive React & Tailwind UI",
      "JWT / OAuth Authentication",
      "Database Architecture & API Integration",
      "Deployment to VPS / Vercel / Render",
    ],
  },
  {
    id: 2,
    title: "Backend API & Database Architecture",
    badge: "Core Logic",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    description:
      "Secure backend services, database schema design, microservices, and high-throughput RESTful/GraphQL API development.",
    deliveryTime: "3 - 7 Days",
    price: "$299",
    priceSuffix: "starts at",
    tools: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
    features: [
      "RESTful API & Endpoint Security",
      "Database Optimization (SQL / NoSQL)",
      "Server Setup (Nginx / Apache / Ubuntu)",
      "API Documentation & Integration",
    ],
  },
  {
    id: 3,
    title: "UI/UX to Responsive Frontend",
    badge: "Pixel Perfect",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    description:
      "Converting Figma, XD, or PSD files into lightning-fast, pixel-perfect modern responsive web applications with dynamic animations.",
    deliveryTime: "2 - 4 Days",
    price: "$259",
    priceSuffix: "starts at",
    tools: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
    features: [
      "100% Mobile & Tablet Responsive",
      "Cross-Browser Compatibility",
      "AOS & CSS Micro Animations",
      "Clean, Maintainable Code",
    ],
  },
  {
    id: 4,
    title: "VPS Setup, Nginx & DevOps",
    badge: "Deployment",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    description:
      "Complete VPS server configuration, Linux shell automation, Nginx reverse proxy configuration, SSL certificates, and CI/CD pipelines.",
    deliveryTime: "1 - 3 Days",
    price: "$189",
    priceSuffix: "fixed package",
    tools: [
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Nginx",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
      {
        name: "Ubuntu",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      },
      {
        name: "Bash",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
    ],
    features: [
      "Ubuntu/Debian VPS Hardening",
      "Nginx Reverse Proxy & SSL Setup",
      "Node / PM2 Process Manager",
      "Domain DNS & Firewall Setup",
    ],
  },
  {
    id: 5,
    title: "Cross-Platform Mobile App",
    badge: "High Growth",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    description:
      "Native-like mobile applications built for Android & iOS using React Native / Cordova. Smooth performant UI, offline functionality, and push notifications.",
    deliveryTime: "10 - 15 Days",
    price: "$449",
    priceSuffix: "starts at",
    tools: [
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Android",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        name: "Nodejs",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
    features: [
      "Single Codebase for Android & iOS",
      "Push Notifications & Offline Support",
      "REST / API Backend Sync",
      "App Store & Play Store Deployment",
    ],
  },
  {
    id: 6,
    title: "E-Commerce & Payment Integration",
    badge: "High Conversion",
    image:
      "https://www.bicakhukuk.com/wp-content/uploads/2025/07/Electronic-Payment-Law-Turkey-1536x960.png",
    description:
      "Complete online shopping solutions featuring custom product catalogs, inventory management, secure checkout, and local/global payment gateways.",
    deliveryTime: "5 - 10 Days",
    price: "$289",
    priceSuffix: "starts at",
    tools: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    features: [
      "Shopping Cart & Admin Dashboard",
      "Stripe / PayPal / Bkash Integration",
      "Order Tracking & Invoice Generation",
      "SEO-Optimized Product Pages",
    ],
  },
];

export default servicesData;
