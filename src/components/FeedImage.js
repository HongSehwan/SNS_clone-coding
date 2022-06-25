import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SlideImage from './SlideImage';

const ImgContainer = styled.div``;

const SingleImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  margin-bottom: 3vh;
`;

const FeedImage = ({ imgData, setView }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) {
      setView(false);
    }
  }, [loading]);
  return (
    <ImgContainer>
      {typeof imgData !== 'object' ? (
        <SingleImage src={imgData} alt="Image" />
      ) : (
        <SlideImage imgData={imgData} setLoading={setLoading} />
      )}
    </ImgContainer>
  );
};

export default FeedImage;
