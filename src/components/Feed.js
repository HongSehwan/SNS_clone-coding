import React from 'react';
import styled from 'styled-components';
import FeedImage from './FeedImage';
import Comment from './Comment';

const FeedContainer = styled.div`
  padding: 3vh 0;
  width: 40%;
  background-color: white;
  margin-left: 30vw;
  @media screen and (max-width: 711px) {
    width: 99%;
    margin-left: 0.5vw;
  }
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5vh;
`;

const Picture = styled.img`
  margin-left: 1vw;
  background-color: grey;
  width: 3vw;
  height: 40px;
  border-radius: 20px;
  @media screen and (max-width: 711px) {
    width: 9vw;
    height: 40px;
  }
`;

const Nickname = styled.p`
  margin-left: 20px;
  font-weight: 800;
`;

const FeedSection = styled.div``;

const IconButton = styled.button`
  margin-left: 0.7vw;
  border: none;
  background-color: unset;
  cursor: pointer;
  margin-top: -3vh;
`;

const Icon = styled.img`
  height: 25px;
`;

const Likes = styled.p`
  margin: 2vh 0;
  margin-left: 15px;
  font-weight: 700;
  font-size: 15px;
  @media screen and (max-width: 711px) {
    margin-left: 10px;
  }
`;

const CommentArea = styled.div``;

const FeedHead = ({ info }) => {
  return (
    <FeedContainer>
      <InfoSection>
        <Picture src={info.picture} alt="Profile"></Picture>
        <Nickname>{info.name}</Nickname>
      </InfoSection>
      <FeedSection>
        <FeedImage imgData={info.image} />
        <IconButton>
          <Icon src="/icon/heart_icon.png" alt="HeartIcon" />
        </IconButton>
        <IconButton>
          <Icon src="/icon/comment_icon.png" alt="CommentIcon" />
        </IconButton>
        <IconButton>
          <Icon src="/icon/share_icon.png" alt="ShareIcon" />
        </IconButton>
        <Likes>좋아요 {info.likes}개</Likes>
        <CommentArea>
          {info.comment.map((commentText, index) => (
            <Comment key={index} commentText={commentText} />
          ))}
        </CommentArea>
      </FeedSection>
    </FeedContainer>
  );
};

export default FeedHead;
