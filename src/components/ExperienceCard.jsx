import React from "react";

const ExperienceCard = ({
  duration,
  logo,
  company,
  location,
  workType,
  remote,
  role,
  achievements,
  skills,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 gap-6 items-start md:items-center font-normal text-white w-full">
      {/* Left Side */}
      <div className="md:w-[35%] w-full flex flex-col items-center text-center md:justify-center md:items-center md:text-center h-full">
        <p className="text-sm uppercase text-gray-400 mb-2">{duration}</p>
        <img
            src={logo}
            alt={`${company} Logo`}
            className="h-14 w-14 object-contain mb-2"
        />
        <h3 className="text-xl font-bold">{company}</h3>

        <div className="flex items-center gap-1 mt-1 text-sm text-gray-300">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            <span>{location}</span>
        </div>

        {workType && (
          <div className="flex items-center gap-1 mt-1 text-sm text-gray-300">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16V8a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM10 4h4v2h-4V4z" />
            </svg>
            <span>{workType}</span>
          </div>
        )}
      </div>


      {/* Right Side */}
      <div className="md:w-[65%] w-full">
        <h2 className="text-2xl font-bold mb-4">{role}</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-300 text-[15px] leading-relaxed">
          {achievements.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white/10 text-white px-3 py-1 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
