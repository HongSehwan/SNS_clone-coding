import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Feed from '../components/Feed';

const MainContainer = styled.div`
  background-color: #f1f2f6;
`;

const MainPage = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    axios.get('/data/db.json').then((res) => {
      if (res) {
        setFeed(res.data.feeds);
      }
    });
  }, []);

  return (
    <MainContainer>
      {feed?.map((info) => (
        <Feed key={info.id} info={info} />
      ))}
    </MainContainer>
  );
};

export default MainPage;
