import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Carousel from '@itseasy21/react-elastic-carousel';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedin, // Add the linkedin prop
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          {/* Add an anchor tag for the name with the href attribute */}
          <a
            href={linkedin} // Use the nameLink prop as the href
            target="_blank"
            rel="noopener noreferrer"
            className='text-white font-medium text-[16px] blue-text-gradient hover:underline'
          >
            {name}
          </a>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <div
          onClick={() => window.open(linkedin, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
        >
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  </motion.div>
);



const Feedbacks = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 720, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1080, itemsToShow: 3, itemsToScroll: 1 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const totalItems = carouselRef.current.state.totalItems;
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalItems);
      if (carouselRef.current) {
        carouselRef.current.goTo(currentSlide);
      }
    }, 8000); // Adjust the duration between slides as needed (8 seconds in this example)

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What others say</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Testimonials.</h2>
      </motion.div>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>

        <div className={`mt-12 bg-tertiary rounded-2xl min-h-[300px]`}>
          <div style={{ height: '20px' }}></div>

          <Carousel
            ref={carouselRef}
            isRTL={false}
            pagination={true}
            transitionMs={1000} // Set the duration for each item transition
            enableAutoPlay={true} // Disable auto play
            enableTilt={false}
            breakPoints={breakPoints}
            showArrows={false}
            focusOnSelect={false}
            itemPadding={[0, 1]}
            initialActiveIndex={currentSlide}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name}>
                <FeedbackCard index={index} {...testimonial} />
              </div>
            ))}
          </Carousel>
          <div style={{ height: '20px' }}></div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");