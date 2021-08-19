/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid gray;
`;

const Login = styled.div`
  color: #fff;
  background-color: #c61d2a;
  padding: 10px;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <img
        alt="levelup todo logo"
        src="/assets/logo.png"
        className="logo"
        css={{ width: 100 }}
      />
      <Login>로그인</Login>
    </Nav>
  );
};

export default NavBar;
