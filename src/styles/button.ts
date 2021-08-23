/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Button = styled.button`
  margin: 10px;
  height: 35px;
  width: 110px;
  background-color: ${props => props.theme.mainRedColor};
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 2px 2px;

  &:hover {
    background-color: ${props => props.theme.hoverColor};
    color: #fff;
  }
`;
