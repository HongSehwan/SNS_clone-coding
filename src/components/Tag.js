import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div``;

const TagText = styled.p`
  margin-left: 5px;
  color: #0fbcf9;
`;

const Tag = ({ tagText }) => {
  return (
    <TagContainer>
      <TagText>#{tagText}</TagText>
    </TagContainer>
  );
};

export default Tag;
