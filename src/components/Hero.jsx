
const Hero = () => {
    return (
      
        
      <section className="min-h-[calc(100vh-90px)] bg-black text-white flex flex-col justify-center items-center px-6 text-center pt-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug mb-2">
          I help businesses <br />
          Build Scalable and  <em className="mt-4 inline-block bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-400 bg-clip-text text-transparent font-[NyghtSerif] text-[60px]">
               Secure digital solutions.
          </em>
        </h1>
  
        <p className="mt-8 text-xl sm:text-2xl text-gray-300 flex items-center justify-center gap-2">
          Hello, I'm <span className="font-semibold text-white">Rohan Ghadage</span>
          <img
            src="src/assets/profilephoto.png"
            alt="Rohan Ghadage"
            className="w-10 h-10 rounded-full object-cover inline-block"
          />
          a Full Stack Developer
        </p>
  
        {/* CTA Section */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <button className="group border border-white px-6 py-2 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:bg-white">
            {/* Text */}
            <span className="text-white group-hover:text-black transition duration-300">
                Let's Connect
            </span>

            {/* Arrow in White Circle */}
            <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition duration-300 group-hover:bg-transparent group-hover:text-black border group-hover:border-black ">
                ➜
            </span>
            </button>
  
            <span className="text-gray-400 text-sm sm:text-base">ghadagerohan07@gmail.com</span>
        </div>
        
      </section>
    );
  };
  
  export default Hero;
  