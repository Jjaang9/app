"use client";

import React from "react";
import Header from "@/components/common/Header";
import styled from "styled-components";
import Image from "next/image";

const Community = ({ name }) => {
  const truncate = (str) => {
    return str?.length > 15 ? `${str.substring(0, 15)}...` : str;
  };

  const dummy = [
    {
      id: 0,
      name: "스폰지밥 1",
      contents:
        "비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티니시티비키니시티비키니시티비키니시니시티비키니시티비키니시티비키니시니시티비키니시티비키니시티비키니시니시티비키니시티비키니시티비키니시니시티비키니시티비키니시티비키니시니시티비키니시티비키니시티비키니시니시티비키니시티비키니시티비키니시니시티비키니시티비키니시티비키니시비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티",
    },
    {
      id: 1,
      name: "스폰지밥 2",
      contents:
        "집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아",
    },
    {
      id: 2,
      name: "스폰지밥 3",
      contents: "뚱이뚱이뚱이뚱이뚱이뚱이뚱이",
    },
    {
      id: 3,
      name: "스폰지밥 4",
      contents:
        "비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티",
    },
    {
      id: 4,
      name: "스폰지밥 5",
      contents:
        "집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아",
    },
    {
      id: 5,
      name: "스폰지밥 6",
      contents: "뚱이뚱이뚱이뚱이뚱이뚱이뚱이",
    },
    {
      id: 6,
      name: "스폰지밥 4",
      contents:
        "비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티",
    },
  ];

  return (
    <>
      <Header name="지역 알리미" />
      <NavBar>
        <NavButtonWrapper>
          <NavButton>성수동</NavButton>
        </NavButtonWrapper>
      </NavBar>
      <StyledLocalAlerts>
        {dummy.map((el, i) => (
          <ItemsWrapper key={i}>
            <Items>
              <Item>
                <Contents>
                  <Title>{el.name}</Title>
                  <SubTitle>{truncate(el.contents)}</SubTitle>
                </Contents>
                <ImgWrapper></ImgWrapper>
              </Item>
            </Items>
          </ItemsWrapper>
        ))}
      </StyledLocalAlerts>
    </>
  );
};

export const NavBar = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid silver;
  padding-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const NavButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavButton = styled.div`
  padding: 10px 20px;
  margin-left: 15px;
  background-color: #ffd600;
  color: white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const BoxStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLocalAlerts = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
`;

export const ItemsWrapper = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
`;

export const Items = styled.div`
  width: 100%;
  height: 72px;
  margin: 0 10px 0 10px;
  border-bottom: 1px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
`;

export const Contents = styled.div`
  height: 58px;
`;

export const Title = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
`;

export const SubTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #c2c2c2;
`;

export const ImgWrapper = styled.div`
  width: 72px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

export default Community;
