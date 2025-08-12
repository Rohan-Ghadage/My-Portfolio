import { motion } from 'framer-motion';

const Hero = ({setIsPopupOpen}) => {
  return (
   
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-[calc(100vh-90px)] bg-black text-white flex flex-col justify-center items-center px-6 text-center pt-6"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug mb-2">
        I help businesses <br />
        Build Scalable and <em className="mt-4 inline-block bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-400 bg-clip-text text-transparent font-[NyghtSerif] text-[60px]">
          Secure digital solutions.
        </em>
      </h1>

      {/* Animated Row: Name + Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex items-center justify-center gap-3 flex-wrap mt-6"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Hello, I'm Rohan Ghadage
        </h1>
        <img
          src="/rohan1.png"
          alt="Rohan Ghadage"
          className="w-20 h-12 sm:w-25 sm:h-10 object-cover rounded-[2rem]"
        />
      </motion.div>

      <p className="animated-gradient-text text-3xl sm:text-2xl font-medium mt-2">a Full Stack Developer</p>

      {/* CTA Section */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <button 
          onClick={() => setIsPopupOpen(true)}
          className="group border border-white px-6 py-2 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:bg-white"
        >
          <span className="text-white group-hover:text-black transition duration-300">
            Let's Connect
          </span>
          <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition duration-300 group-hover:bg-transparent group-hover:text-black border group-hover:border-black ">
            ➜
          </span>
        </button>
        <span className="text-gray-400 text-sm sm:text-base">connect.rohanghadage@gmail.com</span>
      </div>
    </motion.section>

  );
};

export default Hero;
