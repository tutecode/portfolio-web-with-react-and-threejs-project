import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Carousel from '@itseasy21/react-elastic-carousel';
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./Works"; // Import the ProjectCard component from Works.jsx



const WorksAI = () => {
  const aiProjects = projects.filter((project) => project.category === "AI");

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 720, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1080, itemsToShow: 3, itemsToScroll: 1 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const totalItems = projects.length;
    const interval = setInterval(() => {
      if (currentSlide === totalItems - 1) {
        setCurrentSlide(0);
        carouselRef.current.goTo(0);
      } else {
        setCurrentSlide((prevSlide) => prevSlide + 1);
        carouselRef.current.goTo(currentSlide + 1);
      }
    }, 5000); // Adjust the duration between slides as needed (12 seconds in this example)

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <>
      {/* Subtitle for AI Projects */}
      <motion.div variants={textVariant()} className="mb-4">
        <h3 className={`${styles.sectionHeadText2}`}>Artificial Intelligence Projects:</h3>
      </motion.div>

      {/* Carousel for AI Projects */}
      <Carousel
        ref={carouselRef}
        isRTL={false}
        pagination={true} // Show dots for paging
        transitionMs={2000} // Animation speed
        easing={"ease"} // transition easing pattern
        tiltEasing={"ease"} // transition easing pattern for the tilt
        enableTilt={false} // The “bump” animation when reaching the last item
        //itemsToShow={3}   // Number of visible items
        //itemsToScroll={1} // Number of items to scroll
        breakPoints={breakPoints} // Collection of objects with a width, itemsToShow and itemsToScroll
        initialActiveIndex={currentSlide} // The initial active index when the component mounts
        showArrows={false} // Show the arrow buttons
        focusOnSelect={true} // Go to item on click
        itemPadding={[0, 1]} // A padding for each element
        enableAutoPlay={true} // Enable or disable auto play
        autoPlaySpeed={currentSlide === aiProjects.length - 1 ? 1000 : 1000}
      >
        {aiProjects.map((project, index) => (
          <div key={`ai-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>

    </>
  );
};

export default SectionWrapper(WorksAI, "");
