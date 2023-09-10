import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper"; // Import SectionWrapper

const ExperienceTitle = () => {
  return (
    <div id="experience" >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
    </div>
  );
};

// Exporting the ExperienceTitle component wrapped with SectionWrapper
export default SectionWrapper(ExperienceTitle, "work");
