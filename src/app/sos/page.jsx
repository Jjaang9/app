"use client";

import styled from "styled-components";
import Header from "@/components/common/Header";
import Police from "@/icons/IconPolice";
import AlarmIcon from "@/icons/IconAlarm";

const Sos = () => {
  return (
    <>
      <Header />
      <FlexBox>
        <AlarmWrapper>
          <Alarm>
            <AroundCall>
              <AlarmIcon />
            </AroundCall>
            주변인들에게 연락하기
          </Alarm>
          <Alarm>
            <Police />
            112에 연락하기
          </Alarm>
        </AlarmWrapper>
      </FlexBox>
    </>
  );
};

const AlarmWrapper = styled.div`
  width: 264px;
  height: 203px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Alarm = styled.div`
  width: 264px;
  height: 75px;
  border: 1px solid #f53636;
  border-radius: 4px;
  color: #f53636;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(232, 84, 78, 0.25) 0px 13px 27px -5px,
    rgba(255, 31, 31, 0.3) 0px 8px 16px -8px;
  font-weight: 600;
  &:active {
    background-color: #ffd4d4;
  }
`;

const AroundCall = styled.div`
  margin: 0 8px 3px 0;
`;

export default Sos;
