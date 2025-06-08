import AboutSection from '../components/AboutSection';

const LinkedinIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const AboutPage = () => {
  return (
    <AboutSection
      title="More About Me"
      name="Rohan"
      highlightClass="text-colorfull"
      paragraphs={[
        "I'm Aayush Bharti, a proactive full-stack developer passionate about creating dynamic web experiences...",
        "When I'm not immersed in work, I'm exploring new ideas and staying curious...",
        "I believe in waking up each day eager to make a difference!",
      ]}
      socialLinks={[
        {
          href: 'https://www.linkedin.com/in/rohan-ghadage-817a01286/',
          label: 'LinkedIn',
          icon: <LinkedinIcon />,
        },
        {
          href: 'https://github.com/Rohan-Ghadage',
          label: 'GitHub',
          icon: <GithubIcon />,
        },
        {
          href: 'https://x.com/RohanGhadage12',
          label: 'Twitter',
          icon: <TwitterIcon />,
        },
        {
          href: 'https://instagram.com/iaayushbharti',
          label: 'Instagram',
          icon: <InstagramIcon />,
        },
      ]}
      cards={[
        {
          src: '/rohan.png',
          alt: 'Coding image',
          caption: 'Coding is my superpower',
          zIndex: 3,
          animationDelay: '0s',
        },
        {
          src: '/rohan1.png',
          alt: 'Travel image',
          caption: 'Exploring the world',
          zIndex: 2,
          animationDelay: '1s',
        },
        {
          src: '/vite.svg',
          alt: 'GYM image',
          caption: 'Staying fit & strong',
          zIndex: 1,
          animationDelay: '2s',
        },
      ]}
    />
  );
};

export default AboutPage;
