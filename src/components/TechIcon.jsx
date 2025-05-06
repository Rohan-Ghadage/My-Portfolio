
import { motion } from "framer-motion";

const TechIcon = ({ icon, label, color = "#fff" }) => {
  return (
    <motion.div
      className="group relative flex items-center justify-center gap-2 
                 rounded-xl border border-white/20 bg-neutral-900 
                 px-4 py-1.5 text-sm text-white/80 lg:text-base
                 transition transform hover:scale-105"
      tabIndex={0}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-xl" style={{ color }}>{icon}</span>
      <span>{label}</span>
    </motion.div>
  );
};

export default TechIcon;
