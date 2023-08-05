"use client";

import styled from "styled-components";
import Link from "next/link";

const Header = ({ name }) => {
  return (
    <StyledHeader>
      <LinkItem href="/">
        <Title>{name}</Title>
      </LinkItem>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 48px;
`;

const Title = styled.div`
  color: black;
  text-decoration: none;
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
`;

export default Header;
