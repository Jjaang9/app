"use client";

import ContactItem from "@/components/app/my-info/ContactItem";
import IconAdd from "@/icons/IconAdd";
import Image from "next/image";
import { styled } from "styled-components";

const MyInfo = () => {
  return (
    <StyledMyInfo>
      <ProfileCard>
        <ProfileImageBox>
          <Image
            src="/sleep-cat.png"
            alt="sleep-cat"
            width={56}
            height={56}
            objectFit="cover"
          />
        </ProfileImageBox>
        <div>
          <Name>이명재</Name>
          <InfoList>
            <InfoItem>
              <InfoType>사는 지역</InfoType>
              <InfoData>서울특별시 성수동</InfoData>
            </InfoItem>
            <InfoItem>
              <InfoType>전화번호</InfoType>
              <InfoData>010-1234-7878</InfoData>
            </InfoItem>
          </InfoList>
        </div>
      </ProfileCard>
      <MyContacts>나의 연락처에 등록된 사람</MyContacts>
      <ContactList>
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </ContactList>
      <AddContactButton>
        <IconAdd />
      </AddContactButton>
    </StyledMyInfo>
  );
};

export default MyInfo;

const StyledMyInfo = styled.div`
  height: 100%;
`;

const ProfileCard = styled.div`
  padding: 18px 20px;
  display: flex;
  gap: 22px;
  border-radius: 4px;
  border: 0.5px solid #c2c2c2;
  margin: 44px 16px 0;
`;

const ProfileImageBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 23px;
  overflow: hidden;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Name = styled.p`
  margin-bottom: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 18px;
`;

const InfoType = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 160%;
`;

const InfoData = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 160%;
`;

const MyContacts = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  margin: 64px 24px 0;
`;

const ContactList = styled.div`
  margin-top: 30px;
  padding: 0 20px 0 24px;
`;

const AddContactButton = styled.button`
  display: block;
  padding: 6px 24px;
  border-radius: 6px;
  margin: 24px auto 0;
  background: #ffc531;
`;
