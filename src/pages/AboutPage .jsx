
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <AboutSection
      title="More About Me"
      name="Aayush"
      highlightClass="text-colorfull"
      paragraphs={[
        "I'm Aayush Bharti, a proactive full-stack developer passionate about creating dynamic web experiences...",
        "When I'm not immersed in work, I'm exploring new ideas and staying curious...",
        "I believe in waking up each day eager to make a difference!",
      ]}
      socialLinks={[
        {
          href: 'https://linkedin.com/in/iaayushbharti',
          label: 'LinkedIn',
          icon: <FaLinkedin size={20} />,
        },
        {
          href: 'https://github.com/aayushbharti',
          label: 'GitHub',
          icon: <FaGithub size={20} />,
        },
        {
          href: 'https://x.com/iaayushbharti',
          label: 'Twitter',
          icon: <FaTwitter size={20} />,
        },
      ]}
      cards={[
        {
          src: 'rohan.png',
          alt: 'Coding image',
          style: {
            left: '50%',
            transform: 'translateX(-50%) perspective(1000px) scale(1)',
          },
          zIndex: 3,
        },
        {
          src: 'rohan1.png',
          alt: 'Travel image',
          style: {
            left: '95%',
            transform: 'translateX(-50%) perspective(1000px) rotateY(-45deg) scale(0.85)',
            filter: 'brightness(0.7)',
          },
          zIndex: 1,
        },
        {
          src: 'wings.png',
          alt: 'GYM image',
          style: {
            left: '5%',
            transform: 'translateX(-50%) perspective(1000px) rotateY(45deg) scale(0.85)',
            filter: 'brightness(0.7)',
          },
          zIndex: 1,
        },
      ]}
      caption="I Code"
    />
  );
};

export default AboutPage;
