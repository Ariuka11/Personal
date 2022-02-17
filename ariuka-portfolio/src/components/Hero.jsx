import { motion } from "framer-motion";
import dna from "../images/dna.png";
import blub1 from "../images/blub1.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div className="right">
        <motion.h1>Hire</motion.h1>
        <h3>Full Stack Developer</h3>
        <h2>Passionate</h2>
      </motion.div>
      <motion.div className="left">
        <div className="imgContainer">
          <h1>ME</h1>

          <img src={blub1} alt="" />
          <img className="dna" src={dna} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
