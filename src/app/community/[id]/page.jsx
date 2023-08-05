"use client";

import CommentItem from "@/components/app/community/[id]/CommentItem";
import IconArrowLeft from "@/icons/IconArrowLeft";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import Plus from "@/icons/IconPlus";

const CommunityDetail = () => {
  const router = useRouter();
  return (
    <div>
      <AppBar
        onClick={() => {
          router.push("/community");
        }}
      >
        <IconArrowLeft />
      </AppBar>
      <Title>성수동에 뭐시기 뭐시기</Title>
      <Contents>
        <Thumbnail
          src="/sleep-cat.png"
          alt="sleep-cat"
          width={268}
          height={218}
        />
        <ContentsText>
          Lorem ipsum dolor sit amet consectetur. Aliquam eget risus suspendisse
          praesent at. Mauris quam eu ultrices congue blandit. Felis orci odio
          pharetra purus leo parturient tellus faucibus. Euismod risus erat vel
          vivamus sed faucibus augue.
        </ContentsText>
      </Contents>
      <Comment>댓글</Comment>
      <CommentList>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </CommentList>
      <AddChatting>+ 댓글 쓰기</AddChatting>
    </div>
  );
};

export default CommunityDetail;

const AppBar = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  box-sizing: border-box;
  border-bottom: 0.5px solid #c2c2c2;
  cursor: pointer;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 0.5px solid #c2c2c2;
  font-size: 16px;
  font-weight: 700;
  line-height: 130%;
`;

const Contents = styled.div`
  padding: 28px 16px 18px;
  border-bottom: 0.5px solid #c2c2c2;
`;

const Thumbnail = styled(Image)`
  display: block;
  margin: 0 auto;
`;

const ContentsText = styled.p`
  color: #757575;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 24px;
`;

const Comment = styled.p`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  border-bottom: 0.5px solid #c2c2c2;
`;

const CommentList = styled.div`
  padding: 0 16px;
  box-sizing: border-box;
`;

const AddChatting = styled.div`
  width: 82px;
  height: 39px;
  background-color: #ffc531;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  color: black;
  font-size: 12px;
  margin-left: 20px;
`;