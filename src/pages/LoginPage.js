import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { login, setEmailData, setPassword } from '../action/index';

const MainContainer = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin-top: 30vh;
`;

const Logo = styled.img`
  height: 12.5vh;
`;

const InputLine = styled.div``;

const EmailInput = styled.input`
  padding-left: 10px;
  width: 360px;
  height: 35px;
  border-radius: 3px;
`;

const PasswordInput = styled.input`
  padding-left: 10px;
  margin-top: 10px;
  width: 360px;
  height: 35px;
  border-radius: 3px;
`;

const LoginButton = styled.button`
  margin-top: 10px;
  width: 360px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

const ButtonText = styled.p`
  margin: 8px auto;
  color: white;
  font-size: medium;
  font-weight: 800;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const emailInput = useRef();
  const [emailValidation, setEmailValidation] = useState(false);
  const [pwValidation, setPwValidation] = useState(false);
  const [btnValidation, setBtnValidation] = useState(false);
  const { email } = useSelector((state) => state.loginReducer);
  const { password } = useSelector((state) => state.loginReducer);
  const onChangeValue = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      dispatch(setEmailData(value));
    } else if (name === 'password') {
      dispatch(setPassword(value));
    }
  };

  const checkEmail = () => {
    if (
      /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(email)
    ) {
      return true;
    }
    return false;
  };

  const checkPassword = () => {
    if (
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  useEffect(() => {
    if (!checkEmail(email)) {
      setEmailValidation(true);
    }
    if (!checkPassword(password)) {
      setPwValidation(true);
    }
    if (checkEmail(email)) {
      setEmailValidation(false);
    }
    if (checkPassword(password)) {
      setPwValidation(false);
    }
    if (!checkEmail(email) || !checkPassword(password)) {
      setBtnValidation(false);
    }
    if (checkEmail(email) && checkPassword(password)) {
      setBtnValidation(true);
    }
  }, [email, password]);

  const handleLogin = () => {
    let userInfo = { email: email, password: password };
    if (window.localStorage.getItem(email) === null) {
      window.localStorage.setItem(email, JSON.stringify(userInfo));
      dispatch(login(true));
    } else if (JSON.parse(window.localStorage.getItem(email)).email === email) {
      if (
        JSON.parse(window.localStorage.getItem(email)).password === password
      ) {
        dispatch(login(true));
      } else {
        setEmailValidation(true);
        setPwValidation(true);
      }
    } else {
      setEmailValidation(true);
      setPwValidation(true);
    }
  };

  return (
    <MainContainer>
      <Title>
        <Logo src="/images/logo.png" alt="logo"></Logo>
      </Title>
      <InputLine>
        <EmailInput
          style={
            emailValidation
              ? { borderColor: '#ff6b81', borderStyle: 'solid' }
              : { borderColor: null }
          }
          ref={emailInput}
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          required
          onChange={onChangeValue}
        ></EmailInput>
      </InputLine>
      <InputLine>
        <PasswordInput
          style={
            pwValidation
              ? { borderColor: '#ff6b81', borderStyle: 'solid' }
              : { borderColor: null }
          }
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          required
          onChange={onChangeValue}
        ></PasswordInput>
      </InputLine>
      <LoginButton
        style={
          btnValidation
            ? { backgroundColor: '#4bcffa' }
            : { backgroundColor: '#c7ecee' }
        }
        onClick={handleLogin}
      >
        <ButtonText>로그인</ButtonText>
      </LoginButton>
    </MainContainer>
  );
};

export default LoginPage;
