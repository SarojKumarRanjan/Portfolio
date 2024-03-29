import img1 from "@/components/assets/img1.png";


import img2 from "@/components/assets/img2.png"

const imgAdd = img2?.src
console.log(imgAdd);

export const projectData = [
  {
    id: 1,
    title: "Blog Application",
    description:
      "A blog application using react for the frontend and appwrite for the backend services",
    imageurl: { img1 },
    badges: ["React", "Appwrite", "Tailwind", "ShadCN"],
  },
  {
    id: 2,
    title: "VideoFlix",
    description:
      "Backend of a youtube like platform using Node.js Express.js MongoDB JWT Bcrypt",
    imageurl: { img1 },
    badges: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    title: "VideoFlix",
    description:
      "Backend of a youtube like platform using Node.js Express.js MongoDB JWT Bcrypt",
    imageurl: { img1 },
    badges: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 4,
    title: "VideoFlix",
    description:
      "Backend of a youtube like platform using Node.js Express.js MongoDB JWT Bcrypt",
    imageurl: { img1 },
    badges: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 5,
    title: "VideoFlix",
    description:
      "Backend of a youtube like platform using Node.js Express.js MongoDB JWT Bcrypt",
    imageurl: { img1 },
    badges: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 6,
    title: "VideoFlix",
    description:
      "Backend of a youtube like platform using Node.js Express.js MongoDB JWT Bcrypt",
    imageurl: { img1 },
    badges: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 7,
    title: "VideoFlix",
    description:
      "Backend of a youtube like platform using Node.js Express.js MongoDB JWT Bcrypt",
    imageurl: { img1 },
    badges: ["Node.js", "Express.js", "MongoDB"],
  },
  
];

export const blogData = [
  {
    id: 1,
    title: "Getting Started with MERN Stack Development",
    description:
      "Learn the basics of MERN stack development and set up your development environment.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: {imgAdd},
    keywords: [
      "MERN",
      "stack",
      
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
  },
  {
    id: 2,
    title: "Building a RESTful API with Node.js and Express",
    description:
      "Create a RESTful API using Node.js and Express for your MERN stack applications.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image:{imgAdd},
    keywords: ["Node.js", "Express", "API", "RESTful", "backend"],
  },
  {
    id: 3,
    title: "Introduction to MongoDB: A NoSQL Database for Modern Applications",
    description:
      "Get acquainted with MongoDB, a powerful NoSQL database, and its use in MERN stack applications.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: {imgAdd},
    keywords: ["MongoDB", "NoSQL", "database", "data modeling"],
  },
  {
    id: 4,
    title: "React.js Fundamentals: Building Interactive User Interfaces",
    description:
      "Master the fundamentals of React.js to build dynamic and interactive user interfaces.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: "https://example.com/react-fundamentals.jpg",
    keywords: ["React", "JavaScript", "frontend", "UI", "components"],
  },
  {
    id: 5,
    title: "State Management in React.js with Redux",
    description:
      "Learn how to manage state in React.js applications using Redux for better scalability and organization.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: "https://example.com/react-redux-state-management.jpg",
    keywords: ["React", "Redux", "state management", "frontend"],
  },
  {
    id: 6,
    title: "Authentication and Authorization in Node.js Applications",
    description:
      "Implement secure authentication and authorization mechanisms in your Node.js applications for enhanced security.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: "https://example.com/node-authentication.jpg",
    keywords: ["Node.js", "authentication", "authorization", "security"],
  },
  {
    id: 7,
    title: "Deploying MERN Stack Applications with Docker and Kubernetes",
    description:
      "Learn how to deploy your MERN stack applications using Docker containers and Kubernetes orchestration.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: "https://example.com/mern-docker-kubernetes.jpg",
    keywords: ["MERN", "Docker", "Kubernetes", "deployment", "DevOps"],
  },
  {
    id: 8,
    title:
      "Handling Asynchronous Operations in Node.js with Promises and Async/Await",
    description:
      "Master asynchronous programming in Node.js using Promises and Async/Await for cleaner and more manageable code.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: "https://example.com/nodejs-async-await.jpg",
    keywords: ["Node.js", "asynchronous", "Promises", "Async/Await"],
  },
  {
    id: 9,
    title: "Testing React Components with Jest and Enzyme",
    description:
      "Learn how to write unit tests for React components using Jest and Enzyme to ensure the reliability of your codebase.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: "https://example.com/react-testing-jest-enzyme.jpg",
    keywords: ["React", "testing", "Jest", "Enzyme", "unit testing"],
  },
  {
    id: 10,
    title: "Building Real-Time Applications with Socket.IO and MERN Stack",
    description:
      "Create real-time web applications with Socket.IO and integrate them seamlessly with the MERN stack for instant updates and interactions.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac fermentum elit. Aenean auctor, elit vel fermentum accumsan, nisi ipsum dignissim mi, id aliquet velit mi sit amet elit. Sed id tortor at lorem aliquet volutpat. Sed auctor neque sed ex vehicula, ac ullamcorper enim tempor.",
    image: "https://example.com/mern-socketio-realtime.jpg",
    keywords: ["MERN", "Socket.IO", "real-time", "websockets"],
  },
];
