import React, { useState } from 'react';
import styled from 'styled-components';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';

const SlideContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 711px) {
    width: 100%;
  }
`;

const SlideSection = styled.div``;

const SlideImg = styled.img`
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
`;

const Previous = styled.div``;

const Next = styled.div``;

fontawesome.library.add(faAngleLeft, faAngleRight);

const SlideImage = ({ imgData }) => {
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

  return (
    <SlideContainer>
      <SlideSection>
        <SlideImg src={imgData[currentIdx]} alt="Slide Image" />
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
      </SlideSection>
    </SlideContainer>
  );
};

export default SlideImage;
