import React from "react";
import { Tilt } from "react-tilt";
import Carousel from '@itseasy21/react-elastic-carousel';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const aiProjects = projects.filter((project) => project.category === "AI");
  const web3Projects = projects.filter((project) => project.category === "Web3");

  //const breakPoints = [
  //  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  //  { width: 1280, itemsToShow: 2, itemsToScroll: 2 },
  //  { width: 1750, itemsToShow: 3, itemsToScroll: 3 },
  //];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Subtitle for AI Projects */}
      <motion.div variants={textVariant()} className="mt-12">
        <h3 className={`${styles.sectionHeadText}`}>AI Projects.</h3>
      </motion.div>

      {/* Carousel for AI Projects */}
      <Carousel
        itemsToScroll={3} // Adjust this based on the number of cards to scroll
        itemsToShow={3}   // Adjust this based on the number of cards to show
        //breakPoints={breakPoints} // You can use your breakPoints configuration here
        pagination={true}
        itemPadding={[0, 48]}
        showArrows={false}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        focusOnSelect={false}
        easing={"ease"}
        transitionMs={5000}
        tiltEasing={"ease"}
        enableTilt={false}
      >
        {aiProjects.map((project, index) => (
          <div key={`ai-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>

      {/* Subtitle for Web3 Projects */}
      <motion.div variants={textVariant()} className="mt-12">
        <h3 className={`${styles.sectionHeadText}`}>Web3 Projects.</h3>
      </motion.div>

      {/* Carousel for Web3 Projects */}
      <Carousel
        itemsToScroll={3} // Adjust this based on the number of cards to scroll
        itemsToShow={3}   // Adjust this based on the number of cards to show
        //breakPoints={breakPoints} // You can use your breakPoints configuration here
        pagination={true}
        itemPadding={[0, 48]}
        showArrows={false}
        enableAutoPlay={true}
        autoPlaySpeed={2000}
        focusOnSelect={false}
        easing={"ease"}
        transitionMs={1000}
        tiltEasing={"ease"}
        enableTilt={false}
      >
        {web3Projects.map((project, index) => (
          <div key={`web3-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SectionWrapper(Works, "");
