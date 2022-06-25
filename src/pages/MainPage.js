import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Feed from '../components/Feed';
import { useSelector, useDispatch } from 'react-redux';
import { setFeeds } from '../action/index';

const MainContainer = styled.div`
  background-color: #f1f2f6;
`;

const MainPage = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState(true);
  const { feedInfo } = useSelector((state) => state.feedsReducer);
  useEffect(() => {
    axios.get('/data/db.json').then((res) => {
      if (feedInfo) {
        const feedsData = JSON.parse(window.localStorage.getItem('feeds'));
        dispatch(setFeeds(feedsData));
      } else {
        window.localStorage.setItem('feeds', JSON.stringify(res.data.feeds));
        const feedsData = JSON.parse(window.localStorage.getItem('feeds'));
        dispatch(setFeeds(feedsData));
      }
    });
  }, []);

  return (
    <MainContainer style={{ display: view ? 'none' : 'block' }}>
      {feedInfo?.map((info) => (
        <Feed key={info.id} info={info} setView={setView} />
      ))}
    </MainContainer>
  );
};

export default MainPage;
