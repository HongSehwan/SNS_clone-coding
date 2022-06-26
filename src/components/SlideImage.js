import React, { useState } from 'react';
import styled from 'styled-components';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

const SlideContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideSection = styled(motion.div)`
  display: flex;
`;

const SlideImg = styled(motion.img)`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

const ButtonArea = styled.div`
  display: flex;
  margin: 0 1vw;
  justify-content: space-between;
`;

const SlideNextBtn = styled.button`
  position: relative;
  bottom: 27vh;
  border: none;
  background-color: unset;
  font-size: 20px;
  font-weight: 700;
  color: #dfe4ea;
  cursor: pointer;
  :hover {
    transition: all 1s;
    transform: scale(1.13);
  }
`;

const SlidePrevBtn = styled.button`
  position: relative;
  bottom: 27vh;
  border: none;
  background-color: unset;
  font-size: 20px;
  font-weight: 700;
  color: #dfe4ea;
  cursor: pointer;
  :hover {
    transition: all 1s;
    transform: scale(1.13);
  }
`;

const Previous = styled.div``;

const Next = styled.div``;

fontawesome.library.add(faAngleLeft, faAngleRight);

const SlideImage = ({ imgData, setLoading }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    if (currentIdx >= imgData.length - 1) {
      setCurrentIdx(imgData.length - 1);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const prevSlide = () => {
    if (currentIdx < 1) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const boxVariants = {
    entry: {
      x: 500,
      opacity: 0,
      scale: 0,
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    Exit: {
      x: 0,
      opacity: 0,
      scale: 2,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SlideContainer>
      <SlideSection>
        <AnimatePresence>
          <SlideImg
            variants={boxVariants}
            src={imgData[currentIdx]}
            alt="Slide Image"
            initial="entry"
            animate="center"
            exit="Exit"
            key={currentIdx}
            onLoad={() => setLoading(false)}
            onError={() => alert('image load error')}
          />
        </AnimatePresence>
      </SlideSection>
      <ButtonArea>
        <Previous>
          <FontAwesomeIcon
            style={{ position: 'relative', bottom: '27vh', color: '#dfe4ea' }}
            icon="angle-left"
          />
          <SlidePrevBtn onClick={prevSlide}>Prev</SlidePrevBtn>
        </Previous>
        <Next>
          <SlideNextBtn onClick={nextSlide}>Next</SlideNextBtn>
          <FontAwesomeIcon
            style={{ position: 'relative', bottom: '27vh', color: '#dfe4ea' }}
            icon="angle-right"
          />
        </Next>
      </ButtonArea>
    </SlideContainer>
  );
};

export default SlideImage;
