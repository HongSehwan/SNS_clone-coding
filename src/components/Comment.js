import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: felx;
  margin-top: 1vh;
  margin-left: 15px;
  @media screen and (max-width: 711px) {
    margin-left: 10px;
  }
`;

const NicknameLine = styled.p`
  font-weight: 700;
`;

const TextLine = styled.p``;

const Comment = ({ commentText }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(JSON.stringify(commentText));
  }, []);

  return (
    <>
      <CommentContainer>
        <NicknameLine>{text.split(':')[0].slice(2, -1)}</NicknameLine>
        {text ? (
          <TextLine>
            : {text.split(`${text.split(':')[0].slice(2, -1)}`)[1].slice(3, -2)}
          </TextLine>
        ) : null}
      </CommentContainer>
    </>
  );
};

export default Comment;
