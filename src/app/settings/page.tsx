"use client";

import styled from "styled-components";
import IconArrow from "@/icons/IconArrow";
import Header from "@/components/common/Header";

const Setting = () => {
  return (
    <>
      <Header name={"설정"} />
      <StyledSetting>
        <TitleWrapper>
          <TitleBox>
            <Title>연락처 등록하기</Title>
            <Arrow>
              <IconArrow />
            </Arrow>
          </TitleBox>
          <TitleBox>
            <Title>내 위치 설정하기</Title>
            <Arrow>
              <IconArrow />
            </Arrow>
          </TitleBox>
          <TitleBox>
            <Title>자주가는 위치 등록</Title>
            <Arrow>
              <IconArrow />
            </Arrow>
          </TitleBox>
          <TitleBox>
            <Title>내 정보 변경</Title>
            <Arrow>
              <IconArrow />
            </Arrow>
          </TitleBox>
        </TitleWrapper>
      </StyledSetting>
    </>
  );
};

const StyledSetting = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 86%;
  height: 160px;
`;
const TitleBox = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
`;
const Title = styled.div`
  margin-left: 10px;
`;
const Arrow = styled.div`
  margin-right: 6px;
  cursor: pointer;
`;

export default Setting;
