import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Title>내 정보</Title>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 48px;
`;

const Title = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
