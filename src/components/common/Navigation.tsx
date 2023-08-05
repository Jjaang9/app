import IconCommunity from "@/icons/IconCommunity";
import IconMap from "@/icons/IconMap";
import IconPerson from "@/icons/IconPerson";
import IconSOS from "@/icons/IconSOS";
import IconSettings from "@/icons/IconSettings";
import Link from "next/link";
import { styled } from "styled-components";

const Navigation = () => {
  return (
    <StyledNavigation>
      <LinkItem href="/settings">
        <IconSettings />
        <Desc>설정</Desc>
      </LinkItem>
      <LinkItem href="/settings">
        <IconMap />
        <Desc>지도</Desc>
      </LinkItem>
      <LinkItem href="/settings">
        <IconSOS />
        <Desc>위급 상황</Desc>
      </LinkItem>
      <LinkItem href="/settings">
        <IconCommunity />
        <Desc>커뮤니티</Desc>
      </LinkItem>
      <LinkItem href="/settings">
        <IconPerson />
        <Desc>내 정보</Desc>
      </LinkItem>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.div`
  display: flex;
  height: 56px;
`;

const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex: 1;
  text-decoration: none;
  color: #757575;
`;

const Desc = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
