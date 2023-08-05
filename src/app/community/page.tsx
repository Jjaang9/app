"use client";

import Header from "@/components/common/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const dummy = [
  {
    id: 0,
    name: "3000명 회원 둔 ‘MZ 마약상’ 잡고 보니… 성수동서 포르쉐 타던 20대 그놈 [사건수첩]",
    contents:
      "20대 대학생부터 10대 고등학생까지 모인 이른바 ‘MZ 마약조직’이 경찰에 붙잡혔다. 디지털에 익숙한 MZ세대 답게, 가상화폐로 마약 판매금을 챙기고, 보안 기능이 강화된 텔레그램 메신저를 악용해 전국에다 클럽 등에서 주로 유통되는 신종 마약류를 내다 팔았다.",
    img: "https://mimg.segye.com/content/image/2023/08/02/20230802509806.png",
  },
  {
    id: 1,
    name: "3000명 회원 둔 ‘MZ 마약상’ 잡고 보니… 성수동서 포르쉐 타던 20대 그놈 [사건수첩]",
    contents:
      "20대 대학생부터 10대 고등학생까지 모인 이른바 ‘MZ 마약조직’이 경찰에 붙잡혔다. 디지털에 익숙한 MZ세대 답게, 가상화폐로 마약 판매금을 챙기고, 보안 기능이 강화된 텔레그램 메신저를 악용해 전국에다 클럽 등에서 주로 유통되는 신종 마약류를 내다 팔았다.",
    img: "https://mimg.segye.com/content/image/2023/08/02/20230802509806.png",
  },
];

const Community = () => {
  const truncate = (str: string) => {
    return str?.length > 15 ? `${str.substring(0, 15)}...` : str;
  };
  const router = useRouter();

  return (
    <>
      <Header name="지역 알리미" />
      <NavButtonWrapper>
        <NavButton>성수동</NavButton>
      </NavButtonWrapper>
      <StyledLocalAlerts>
        {dummy.map((el, i) => (
          <ItemsWrapper key={i}>
            <Items>
              <Item>
                <Contents>
                  <Title
                    onClick={() => {
                      router.push(`/community/${i + 1}`);
                    }}
                  >
                    {el.name}
                  </Title>
                  <SubTitle>{truncate(el.contents)}</SubTitle>
                </Contents>
                <ImgWrapper>
                  <Image
                    src="/sleep-cat.png"
                    alt="sleep-cat"
                    width={50}
                    height={50}
                  />
                </ImgWrapper>
              </Item>
            </Items>
          </ItemsWrapper>
        ))}
      </StyledLocalAlerts>
    </>
  );
};

export default Community;

const NavButtonWrapper = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid silver;
  padding-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavButton = styled.div`
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

const StyledLocalAlerts = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
`;

const ItemsWrapper = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
`;

const Items = styled.div`
  width: 100%;
  height: 72px;
  margin: 0 10px 0 10px;
  border-bottom: 1px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
`;

const Contents = styled.div`
  height: 58px;
`;

const Title = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SubTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #c2c2c2;
`;

const ImgWrapper = styled.div`
  width: 72px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;
