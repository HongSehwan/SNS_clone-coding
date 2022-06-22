import React from 'react';
import styled from 'styled-components';
import SlideImage from './SlideImage';

const ImgContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  margin-bottom: 3vh;
`;

const FeedImage = ({ imgData }) => {
  return (
    <ImgContainer>
      {typeof imgData !== 'object' ? (
        <Image src={imgData} alt="Image" />
      ) : (
        <SlideImage imgData={imgData} />
      )}
    </ImgContainer>
  );
};

export default FeedImage;
