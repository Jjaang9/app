"use client";

import CommentItem from "@/components/app/community/[id]/CommentItem";
import useModal from "@/hooks/useModal";
import IconArrowLeft from "@/icons/IconArrowLeft";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import Chatting from "../../createChatting";

const CommunityDetail = () => {
  const { openModal, closeModal } = useModal();
  const router = useRouter();

  const modalOpen = () => {
    openModal({
      component: <Chatting closeModal={closeModal} />,
    });
  };

  return (
    <div>
      <AppBar
        onClick={() => {
          router.push("/community");
        }}
      >
        <IconArrowLeft />
      </AppBar>
      <Title>
        3000명 회원 둔 ‘MZ 마약상’ 잡고 보니… 성수동서 포르쉐 타던 20대 그놈
        [사건수첩]
      </Title>
      <Contents>
        <Thumbnail
          src="/sleep-cat.png"
          alt="sleep-cat"
          width={268}
          height={218}
        />
        <ContentsText>
          20대 대학생부터 10대 고등학생까지 모인 이른바 ‘MZ 마약조직’이 경찰에
          붙잡혔다. 디지털에 익숙한 MZ세대 답게, 가상화폐로 마약 판매금을
          챙기고, 보안 기능이 강화된 텔레그램 메신저를 악용해 전국에다 클럽
          등에서 주로 유통되는 신종 마약류를 내다 팔았다.
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
      <AddChatting onClick={modalOpen}>+ 댓글 쓰기</AddChatting>
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
