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
  const webDevProjects = projects.filter((project) => project.category === "web_development");
  const hackatonProjects = projects.filter((project) => project.category === "hackaton");


  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 720, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1080, itemsToShow: 3, itemsToScroll: 1 },
  ];

  return (
    <>
      {/* Subtitle for AI Projects */}
      <motion.div variants={textVariant()} className="">
        <h3 className={`${styles.sectionHeadText2}`}>Artificial Intelligence Projects:</h3>
      </motion.div>

      {/* Carousel for AI Projects */}
      <Carousel
        isRTL={false}
        pagination={true} // Show dots for paging
        transitionMs={8000} // Animation speed
        easing={"ease"} // transition easing pattern
        tiltEasing={"ease"} // transition easing pattern for the tilt
        enableTilt={false} // The “bump” animation when reaching the last item
        //itemsToShow={3}   // Number of visible items
        //itemsToScroll={1} // Number of items to scroll
        breakPoints={breakPoints} // Collection of objects with a width, itemsToShow and itemsToScroll
        initialActiveIndex={0} // The initial active index when the component mounts
        showArrows={false} // Show the arrow buttons
        focusOnSelect={false} // Go to item on click
        itemPadding={[0, 48]} // A padding for each element
        enableAutoPlay={true} // Enable or disable auto play
        autoPlaySpeed={8000} // Set auto play speed (ms)
        
      >
        {aiProjects.map((project, index) => (
          <div key={`ai-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>

      {/* Subtitle for Web Devolopment Projects */}
      <motion.div variants={textVariant()} className="mt-12">
        <h3 className={`${styles.sectionHeadText2}`}>Web Development Projects:</h3>
      </motion.div>

      {/* Carousel for Web Devolopment Projects */}
      <Carousel
        isRTL={false}
        pagination={true} // Show dots for paging
        transitionMs={8000} // Animation speed
        easing={"ease"} // transition easing pattern
        tiltEasing={"ease"} // transition easing pattern for the tilt
        enableTilt={false} // The “bump” animation when reaching the last item
        //itemsToShow={3}   // Number of visible items
        //itemsToScroll={1} // Number of items to scroll
        breakPoints={breakPoints} // Collection of objects with a width, itemsToShow and itemsToScroll
        initialActiveIndex={0} // The initial active index when the component mounts
        showArrows={false} // Show the arrow buttons
        focusOnSelect={false} // Go to item on click
        itemPadding={[0, 48]} // A padding for each element
        enableAutoPlay={true} // Enable or disable auto play
        autoPlaySpeed={8000} // Set auto play speed (ms)
        
      >
        {webDevProjects.map((project, index) => (
          <div key={`ai-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>

      {/* Subtitle for Mobile Apps Projects */}
      <motion.div variants={textVariant()} className="mt-12">
        <h3 className={`${styles.sectionHeadText2}`}>Mobile Apps Projects:</h3>
      </motion.div>

      {/* Carousel for Mobile Apps Projects */}
      <Carousel
        isRTL={false}
        pagination={true} // Show dots for paging
        transitionMs={8000} // Animation speed
        easing={"ease"} // transition easing pattern
        tiltEasing={"ease"} // transition easing pattern for the tilt
        enableTilt={false} // The “bump” animation when reaching the last item
        //itemsToShow={3}   // Number of visible items
        //itemsToScroll={1} // Number of items to scroll
        breakPoints={breakPoints} // Collection of objects with a width, itemsToShow and itemsToScroll
        initialActiveIndex={0} // The initial active index when the component mounts
        showArrows={false} // Show the arrow buttons
        focusOnSelect={false} // Go to item on click
        itemPadding={[0, 48]} // A padding for each element
        enableAutoPlay={true} // Enable or disable auto play
        autoPlaySpeed={8000} // Set auto play speed (ms)
      >
        {web3Projects.map((project, index) => (
          <div key={`web3-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>

      {/* Subtitle for Hackatones Projects */}
            <motion.div variants={textVariant()} className="mt-12">
        <h3 className={`${styles.sectionHeadText2}`}>Hackathon Projects:</h3>
      </motion.div>

      {/* Carousel for Hackatones Projects */}
      <Carousel
        isRTL={false}
        pagination={true} // Show dots for paging
        transitionMs={8000} // Animation speed
        easing={"ease"} // transition easing pattern
        tiltEasing={"ease"} // transition easing pattern for the tilt
        enableTilt={false} // The “bump” animation when reaching the last item
        //itemsToShow={3}   // Number of visible items
        //itemsToScroll={1} // Number of items to scroll
        breakPoints={breakPoints} // Collection of objects with a width, itemsToShow and itemsToScroll
        initialActiveIndex={0} // The initial active index when the component mounts
        showArrows={false} // Show the arrow buttons
        focusOnSelect={false} // Go to item on click
        itemPadding={[0, 48]} // A padding for each element
        enableAutoPlay={true} // Enable or disable auto play
        autoPlaySpeed={8000} // Set auto play speed (ms)
      >
        {hackatonProjects.map((project, index) => (
          <div key={`hackaton-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SectionWrapper(Works, "");
