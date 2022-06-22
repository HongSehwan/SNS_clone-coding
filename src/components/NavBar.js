import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../action';
import {
  faMagnifyingGlass,
  faHouse,
  faShareNodes,
  faHeart,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';

const NavContainer = styled.div`
  z-index: 99;
  position: sticky;
  top: 0px;
  background-color: #f0ebe0;
`;

const NavLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  margin: 1.5vh 3vw;
  height: 45px;
  @media screen and (max-width: 280px) {
    height: 30px;
  }
`;

const SearchLine = styled.div`
  padding: 5px;
  background-color: #f1f2f6;
  border-radius: 5px;
  @media screen and (max-width: 740px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 17vw;
  border: none;
  padding-left: 10px;
  background-color: #f1f2f6;
`;

const IconLien = styled.div`
  margin-right: 7vw;
`;

const IconBtn = styled.button`
  border: none;
  background-color: #f0ebe0;
  cursor: pointer;
`;

fontawesome.library.add(
  faMagnifyingGlass,
  faHouse,
  faShareNodes,
  faHeart,
  faArrowRightFromBracket
);

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(login(false));
  };

  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <NavContainer>
      <NavLine>
        <Link to="/">
          <Logo src="/images/nav_logo.png" alt="logo"></Logo>
        </Link>
        <SearchLine>
          <FontAwesomeIcon icon="magnifying-glass" />
          <SearchInput placeholder="검색"></SearchInput>
        </SearchLine>
        <IconLien>
          <IconBtn onClick={goToMainPage}>
            <FontAwesomeIcon icon="house" />
          </IconBtn>
          <IconBtn>
            <FontAwesomeIcon icon="share-nodes" />
          </IconBtn>
          <IconBtn>
            <FontAwesomeIcon icon="heart" />
          </IconBtn>
          <IconBtn onClick={handleLogout}>
            <FontAwesomeIcon icon="arrow-right-from-bracket" />
          </IconBtn>
        </IconLien>
      </NavLine>
    </NavContainer>
  );
};

export default NavBar;
