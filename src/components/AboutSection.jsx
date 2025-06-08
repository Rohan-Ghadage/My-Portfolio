import React from 'react';

const AboutSection = ({
  title,
  name,
  highlightClass,
  paragraphs,
  socialLinks,
  cards,
  caption,
}) => {
  return (
    <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 md:pt-36 md:pb-20">
      <h2
        style={{
          textShadow:
            '0px 4px 8px rgba(255,255,255,.05), 0px 8px 30px rgba(255,255,255,.25)',
        }}
        className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center mb-4 md:mb-4 lg:text-left"
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
          {title}
        </p>
        <span>
          Hi there! I'm{' '}
          <span className={`${highlightClass} animate-gradient-x font-nyght tracking-wide`}>
            {name}
          </span>
        </span>
      </h2>

      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* About Text */}
        <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-white/70 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg">
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

          {/* Social Links */}
          <div className="flex gap-3 mx-auto -mt-4 w-fit lg:mx-0">
            {socialLinks.map(({ href, label, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 transition-colors hover:text-neutral-100"
              >
                <span className="sr-only">{label}</span>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Card Stack */}
        <div className="relative flex h-[350px] w-full max-w-[200px] flex-col items-center justify-center max-lg:mt-12 lg:h-[450px] lg:max-w-[270px] lg:me-20">
          <div className="relative h-full w-full">
            {cards.map(({ src, alt, style, zIndex }, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '30px',
                  boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 30px',
                  ...style,
                  zIndex: zIndex,
                }}
              >
                <div className="relative aspect-4/5 w-[220px] lg:w-[300px]">
                  <img
                    src={src}
                    alt={alt}
                    draggable="false"
                    decoding="async"
                    className="rounded-3xl object-cover absolute h-full w-full inset-0"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <h3 className="text-center text-2xl font-light transition-opacity duration-500">
            {caption}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
