import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Title>내정보</Title>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #c2c2c2;
`;

const Title = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
