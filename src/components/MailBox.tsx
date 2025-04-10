import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
const MailBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 300px;
  max-height: 520px;
  border: 2px solid transparent;
  position: relative;
  border-radius: 10px;
  background-image: linear-gradient(#000, #000),
    linear-gradient(to bottom right, #fefae0 0%, #bc6c25 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 10px;
  overflow: hidden;
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  gap: 10px;
  height: fit-content;
  z-index: 10;
  color: #dda15e;
  font-family: "Logo";
  user-select: none;
`;
const DesignBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-top: 50px solid #fefae0;
  border-bottom: 50px solid #bc6c25;
  top: 0;
  box-sizing: border-box;
  user-select: none;
`;
const MailContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 17px;
  z-index: 10;
  position: relative;
`;
const TitleInput = styled.input`
  display: block;
  width: 270px;
  transition: 200ms;
  background-color: transparent;
  padding: 5px 0;
  color: white;
  border: 1px solid #a0b3b0;
  :focus {
    outline: 0;
    border: 1px solid #1ab188;
  }
  z-index: 10;
`;
const BodyBox = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 270px;
  height: 300px;
  transition: 200ms;
  background-color: transparent;
  color: white;
  border: 1px solid #a0b3b0;
  :focus {
    outline: 0;
    border: 1px solid #1ab188;
  }
  resize: none;
  z-index: 10;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #fefae0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bc6c25;
    border-radius: 2px;
  }
`;
const LabelTag = styled.label<{ shown: boolean }>`
  font-size: 15px;
  position: absolute;
  top: 2px;
  left: 0;
  user-select: none;
  color: #a0b3b0;
  animation: ${({ shown }) =>
    shown
      ? "100ms linear both labelMoveUp"
      : "100ms linear both labelMoveDown"};
  @keyframes labelMoveUp {
    from {
      top: 2px;
    }
    to {
      top: -19px;
    }
  }
  @keyframes labelMoveDown {
    from {
      top: -19px;
    }
    to {
      top: 2px;
    }
  }
`;
const SubmitButton = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #1ab188;
  border: 3px solid #a0b3b0;
  border-radius: 5px;
  width: 270px;
  margin-top: 15px;
  :hover {
    font-weight: bold;
  }
  :active {
    background-color: #a0b3b0;
    border: 3px solid #1ab188;
  }
  z-index: 10;
  user-select: none;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 10px;
`;
const InfoText = styled.span`
  font-size: 10px;
`;
function MailBox() {
  const [mailTitle, setMailTitle] = useState<string>("");
  const [mailBody, setMailBody] = useState<string>("");
  const [maxLength, setMaxLength] = useState<number>(2000);
  const titleHandler = useCallback((e) => {
    setMailTitle(e.target.value);
    console.log(encodeURI(e.target.value));
    setMaxLength(
      (maxLength) => maxLength - encodeURI(e.target.value).length - 42
    );
  }, []);
  const bodyHandler = useCallback(
    (e) => {
      if (encodeURI(e.target.value).length >= maxLength) {
        alert([
          "최대 길이에 도달했습니다. \n이후 내용 및 첨부파일은 메일프로그램에서 이어서 작성할수 있습니다. \n전송버튼을 누르신후 이어서 작성해주세요.",
        ]);
      } else {
        setMailBody(e.target.value);
      }
    },
    [maxLength]
  );
  return (
    <MailBoxContainer>
      <DesignBorder />
      <TextBox>
        Contact Me!
        <MdMarkEmailRead size={50} color="#dda15e" />
      </TextBox>
      <MailContents>
        <LabelTag shown={mailTitle !== ""}>Mail Title</LabelTag>
        <TitleInput
          required
          type="text"
          value={mailTitle}
          onChange={titleHandler}
        />
      </MailContents>
      <MailContents>
        <LabelTag shown={mailBody !== ""}>Mail Body</LabelTag>
        <BodyBox onChange={bodyHandler} value={mailBody} />
      </MailContents>
      <SubmitButton
        onClick={() => {
          if (mailTitle !== "" && mailBody !== "") {
            window.location.assign(
              `mailto:minicastle@kakao.com?subject=${mailTitle}&body=${mailBody}`
            );
          } else if (mailTitle === "") {
            alert("📤메일 제목을 입력해주세요.📤");
          } else {
            alert("📤메일 내용을 입력해주세요.📤");
          }
        }}
      >
        Mail Send
      </SubmitButton>
      <InfoContainer>
        <InfoText>* 내장된 메일 프로그램을 통해 발송됩니다.</InfoText>
        <InfoText>
          * 최대 길이 이상 혹은 첨부파일이 필요한경우 전송버튼을 누른후
        </InfoText>
        <InfoText>메일 프로그램에서 이어서 작성해주시기 바랍니다.</InfoText>
      </InfoContainer>
    </MailBoxContainer>
  );
}

export default MailBox;
