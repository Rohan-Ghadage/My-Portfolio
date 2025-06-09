
const projects = [
  {
    title: 'Zenith Wave Fitness',
    description: 'A website crafted to offer a seamless, interactive, and engaging platform for fitness enthusiasts. Dive into a world of workouts, expert guidance, nutrition plans, and more.',
    link: '/projects/zenithwavefitness',
    imgSrc: 'zenithwavefitness.png',
    gradient: 'linear-gradient(188.62deg, #3D1A7A 49.9%, #7E22CE 81.7%, #C084FC 93.88%, #F9D793 113.5%)',
    shadowColor: '#DB2777',
    textColor: 'text-white',
    features: [
      'A range of services',
      'Trainers Information',
      'Product Store',
      'Blogs',
      'Membership & Registration',
      'Online Payment System',
      'Virtual tour of the fitness club',
    ],
    techStack: [
      { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5' },
      { name: 'CSS', icon: 'https://cdn.simpleicons.org/css' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
      { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
    ],
  },
  {
    title: 'Crypto Trading Application',
    description: 'Built a Full Stack Crypto Trading Platform addressing the growing demand for secure and intelligent crypto solutions',
    link: '/projects/cryptotradingapplication',
    imgSrc: 'cryptotradingapplication.png',
    gradient: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
    shadowColor: '#DB2777',
    textColor: 'text-white',
    features: [
      'Secure authentication and real-time market data',
      'AI Chat Bot using Gemini API',
      'Fund transfers, Withdrawals, and Balance Management',
      'Payment Gateways (Razorpay, Stripe)',
      'Portfolio Management Tools for tracking investments',
    ],
    techStack: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
      { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux' },
      { name: 'Axios', icon: 'https://cdn.simpleicons.org/axios' },          
      { name: 'Shadcn UI', icon: 'https://cdn.simpleicons.org/shadcnui' },
      { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot' },
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
    ],
  },
  {
    title: 'Institute Management System',
    description: 'It manages various institute-related operations, including student details, course management, and faculty records',
    link: '/projects/institutemanagementsystem',
    imgSrc: 'institutemanagementsystem.png',
    gradient: 'linear-gradient(45deg, #1F376C, #93C9B9)',
    shadowColor: '#DB2777',
    textColor: 'text-white',
    features: [
      'Student & Staff Management',
      'Leave Letter Submission',
      'Result Updates',
      'Generate and print formatted data reports',
      'Built-in Calculator and Notepad shortcuts to enhance productivity',
      'Robust Validation'
    ],
    techStack: [
      { name: 'Java', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
      { name: 'AWT', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },      
      { name: 'JDBC', icon: 'https://cdn.simpleicons.org/postgresql' },  
      { name: 'Java Swing', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' }, // GUI fallback icon
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
    ],

  },
  
  {
    title: 'Boost Physio Clinic – Booking System',
    description: 'Boost Physio Clinic – A console-based appointment management system developed for clinic',
    link: '/projects/boostphysioclinic',
    imgSrc: 'boostphysioclinic.png',
    gradient: 'linear-gradient(188.62deg, #083926 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)',
    shadowColor: '#DB2777',
    textColor: 'text-white',
    features: [
      'Add and remove patients',
      'Book appointments by: Area of expertise Physiotherapist name',
      'Change or cancel appointments',
      'Mark appointments as attended',
      'Generate end-of-term report',
    ],
    techStack: [
      { name: 'Java 17', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot' },
      { name: 'Maven', icon: 'https://cdn.simpleicons.org/apachemaven' },
      { name: 'Lombok', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
      { name: 'JUnit5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg' },
    ],

  },

  
  
  {
    title: 'Blog Application API',
    description: ' This project provides a simple RESTful API for managing blog posts, including CRUD operations, pagination, and blog summarization using OpenAI',
    link: '/projects/blogapplicationapi',
    imgSrc: 'blogapplicationapi.png',
    gradient: 'linear-gradient(188.62deg, #3D1A7A 49.9%, #7E22CE 81.7%, #C084FC 93.88%, #F9D793 113.5%)',
    shadowColor: '#DB2777',
    textColor: 'text-white',
    features: [
      'Create a New Blog',
      'Get Blog by ID',
      'Get All Blogs (Paginated)',
      'Get Blog Summary',
      'Update a Blog',
      'Delete a Blog'
    ],
    techStack: [
      { name: 'Java 17', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
      { name: 'Open AI API', icon: 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png' },
    ],

  },
];

export default projects;
