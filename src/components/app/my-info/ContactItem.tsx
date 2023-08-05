import { ContactListAtomState } from "@/atoms/myInfo.atom";
import IconTrashCircle from "@/icons/IconTrashCircle";
import { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";

interface PropTypes {
  id: number;
}

const ContactItem = ({ id }: PropTypes) => {
  const [contactList, setContactList] = useRecoilState(ContactListAtomState);
  const handleContactListDataChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { name, value } = e.target;
    setContactList(
      contactList.map((item) =>
        item.id !== id ? item : { ...item, [name]: value }
      )
    );
  };

  const deleteContact = () => {
    setContactList(contactList.filter((item) => item.id !== id));
  };

  return (
    <StyledContactItem>
      <ContactInfo>
        <Name
          isUnoccupied={
            !contactList.filter((item) => item.id === id)[0].name.length
          }
          onChange={handleContactListDataChange}
        />
        <Phone
          isUnoccupied={
            !contactList.filter((item) => item.id === id)[0].phone.length
          }
          onChange={handleContactListDataChange}
        />
      </ContactInfo>
      <IconTrashCircle onClick={deleteContact} />
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
  gap: 56px;
  height: 40px;
  padding: 0 18px;
  flex: 1;
  border-bottom: 0.5px solid #c2c2c2;
`;

const Name = styled.input<{ isUnoccupied: boolean }>`
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  min-width: 30px;

  ${({ isUnoccupied }) =>
    isUnoccupied &&
    css`
      border-bottom: 0.5px solid #c2c2c2;
    `}
`;

const Phone = styled.input<{ isUnoccupied: boolean }>`
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;

  ${({ isUnoccupied }) =>
    isUnoccupied &&
    css`
      border-bottom: 0.5px solid #c2c2c2;
    `}
`;
