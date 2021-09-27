/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Login = styled.div`
  color: #fff;
  background-color: ${props => props.theme.mainRedColor};
  padding: 10px;
  &:hover {
    background-color: ${props => props.theme.mainRedDarkColor};
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
