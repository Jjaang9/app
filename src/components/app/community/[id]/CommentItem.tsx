import IconGood from "@/icons/IconGood";
import Image from "next/image";
import styled from "styled-components";

const CommentItem = () => {
  return (
    <StyledCommentItem>
      <CommentBox>
        <ProfileImageBox>
          <Image src="/sleep-cat.png" alt="sleep-cat" width={26} height={26} />
        </ProfileImageBox>
        <Comment>와 요즘 세상 무섭네요 ㄷㄷㄷ</Comment>
        <IconGoodBox>
          <IconGood />
          21
        </IconGoodBox>
      </CommentBox>
    </StyledCommentItem>
  );
};

export default CommentItem;

const StyledCommentItem = styled.div`
  padding: 15px;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ProfileImageBox = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 9999px;
  overflow: hidden;
`;

const Comment = styled.p`
  color: #757575;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  flex: 1;
`;

const IconGoodBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  font-weight: 400;
  line-height: normal;
`;
