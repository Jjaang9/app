import IconTrashCircle from "@/icons/IconTrashCircle";
import styled from "styled-components";

const ContactItem = () => {
  return (
    <StyledContactItem>
      <ContactInfo>
        <Name>엄마</Name>
        <Phone>010-1234-1234</Phone>
      </ContactInfo>
      <IconTrashCircle />
    </StyledContactItem>
  );
};

export default ContactItem;

const StyledContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 18px;
  flex: 1;
  border-bottom: 0.5px solid #c2c2c2;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  min-width: 82px;
`;

const Phone = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
`;
