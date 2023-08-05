import Nexmo from "nexmo";
import { NextResponse } from "next/server";

export async function POST(
  _: Request,
  { params: { phone } }: { params: { phone: string } }
) {
  // Nexmo API 키 및 비밀번호 설정
  console.log(phone);
  const nexmo = new Nexmo({
    apiKey: "4515d4f4",
    apiSecret: "Q56ar3WJktdbjTh5",
  });
  // SMS 보내기 함수
  const from = "Vonage APIs"; // 발신자 번호
  const to = "821075844788"; // 수신자 번호
  const text = "도와주세요!"; // 전송할 메시지

  nexmo.message.sendSms(
    from,
    to,
    text,
    { type: "unicode" },
    (err, responseData) => {
      console.log(1);
      if (err) {
        console.log("SMS 발송에 실패했습니다:", err);
        console.log(2);
      } else {
        console.log(3);
        if (responseData.messages[0]["status"] === "0") {
          console.log("UTF-8 SMS가 성공적으로 발송되었습니다!");
          console.log(4);
          return NextResponse.json(true);
        } else {
          console.log(
            `UTF-8 SMS 발송 실패: ${responseData.messages[0].status}`
          );
          console.log(5);
          return NextResponse.json(false);
        }
      }
    }
  );
}
