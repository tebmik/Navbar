import React from "react";
import styled from "styled-components";

import NavItem from "./navitem/NavItem";

const Nav = styled.nav`
  display: flex;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked }) => {
  return (
    <Nav mobile={mobile}>
      <Ul mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/">
          home
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/todos">
          todos
        </NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
