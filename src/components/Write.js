import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setComment, setFeeds } from '../action/index';

const WriteContainer = styled.div`
  padding: 1vh 0;
  border-top-width: 1px;
  border-top-color: rgba(236, 240, 241, 0.3);
  border-top-style: ridge;
  border-bottom-width: 1px;
  border-bottom-color: rgba(236, 240, 241, 0.3);
  border-bottom-style: ridge;
`;

const InputArea = styled.div`
  align-items: center;
  display: flex;
  @media screen and (max-width: 711px) {
    margin-left: 1vw;
  }
`;

const SmileIcon = styled.img`
  height: 21px;
  margin-left: 1vw;
  @media screen and (max-width: 711px) {
    margin-left: 1vw;
  }
`;

const CommentInput = styled.input`
  width: 28vw;
  margin-left: 0.5vw;
  border: none;
  @media screen and (max-width: 711px) {
    width: 70vw;
    margin-left: 2vw;
  }
`;

const WriteArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WriteBtn = styled.button`
  width: 60px;
  border: none;
  background-color: white;
  font-size: 2vh;
  font-weight: 700;
  color: #0fbcf9;
  cursor: pointer;
  margin-right: 0.6vw;
  text-align: end;
  @media screen and (max-width: 711px) {
    width: 50px;
  }
`;

const Write = ({ info }) => {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState('');
  const [inputState, setInputState] = useState(false);
  const { commentTxt } = useSelector((state) => state.feedsReducer);
  const { feedInfo } = useSelector((state) => state.feedsReducer);
  const { email } = useSelector((state) => state.loginReducer);
  const onChangeText = (event) => {
    const {
      target: { name, value },
    } = event;
    setInputName(name);
    dispatch(setComment(value));
  };

  const CommentWrite = () => {
    if (info.id) {
      const nickname = email.split('@')[0];
      const text = { [nickname]: commentTxt };
      feedInfo[info.id - 1].comment.push(text);
      window.localStorage.removeItem('feeds');
      window.localStorage.setItem('feeds', JSON.stringify(feedInfo));
      const feedsUpdate = JSON.parse(window.localStorage.getItem('feeds'));
      dispatch(setFeeds(feedsUpdate));
      setInputState(true);
      let input = document.getElementById(info.id);
      input.value = null;
    }
  };

  useEffect(() => {
    dispatch(setComment(''));
  }, [inputState]);

  return (
    <WriteContainer>
      <WriteArea>
        <InputArea>
          <SmileIcon src="/icon/smile_icon.png" alt="SmileIcon" />
          <CommentInput
            id={info.id}
            name={info.id}
            type="text"
            placeholder="댓글달기..."
            value={info.id === inputName ? commentTxt : undefined}
            required
            onChange={onChangeText}
          />
        </InputArea>
        <WriteBtn onClick={CommentWrite}>게시</WriteBtn>
      </WriteArea>
    </WriteContainer>
  );
};

export default Write;
