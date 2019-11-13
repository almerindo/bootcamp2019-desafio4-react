import styled from 'styled-components';

import { AccountCircle } from 'styled-icons/material/AccountCircle';

export const RedAccount = styled(AccountCircle)`
  color: red;
  fill: red;
`;

export const FaceNav = styled.nav`
  background-color: #4a90e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 42px;
  color: #fff;
  min-width: 980px;
  font-size: 14px;
  img {
    height: 24px;
  }
  div {
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    i {
      margin-left: 8px;
    }
  }
`;
