"use client";

import React from "react";
import Header from "@/components/common/Header";
import styled from "styled-components";
import Image from "next/image";

const Community = ({ name }) => {
  const truncate = (str) => {
    return str?.length > 20 ? `${str.substring(0, 20)}...` : str;
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
    {
      id: 7,
      name: "스폰지밥 5",
      contents:
        "집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아",
    },
    {
      id: 8,
      name: "스폰지밥 6",
      contents: "뚱이뚱이뚱이뚱이뚱이뚱이뚱이",
    },
    {
      id: 9,
      name: "스폰지밥 5",
      contents:
        "집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아",
    },
    {
      id: 10,
      name: "스폰지밥 6",
      contents: "뚱이뚱이뚱이뚱이뚱이뚱이뚱이",
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
        <BoxStyle>
          {dummy.map((el, i) => (
            <NewsWrapper key={i}>
              <NewsTitleWrapper>
                <NewsTitle>
                  <Title>name</Title>
                  <Subtitle>el.contents</Subtitle>
                </NewsTitle>
                <NewImgWrapper>Img</NewImgWrapper>
              </NewsTitleWrapper>
            </NewsWrapper>
          ))}
        </BoxStyle>
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
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavButton = styled.div`
  width: 80%;
  height: 80%;
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
  flex-direction: column;
  align-items: center;
`;

export const StyledLocalAlerts = styled.div`
  width: 100%;
  height: 83.5%;
  display: flex;
  flex-direction: column;
`;

export const NewsWrapper = styled.div`
  width: 94%;
  height: 72px;
  border-bottom: 1px solid #d0d0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewsTitleWrapper = styled.div`
  width: 96%;
  height: 80%;
  display: flex;
`;

export const NewsTitle = styled.div`
  width: 70%;
  height: 100%;
`;

export const Title = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 5px;
`;

export const Subtitle = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  color: #c2c2c2;
`;

export const NewImgWrapper = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  margin-top: 5px;
  background-color: green;
`;

export default Community;
