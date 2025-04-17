import styled from "@emotion/styled";
import Modal, { ModalButton } from "../functions/Modal";
import { useCallback, useState } from "react";
import MailBox from "../components/MailBox";

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

function TestPage() {
  // modal test
  const [modal, setModal] = useState<number>(0);
  const modalHandler = useCallback((e: number): void => {
    setModal(e);
  }, []);
  return (
    <TestContainer>
      {/* modal test */}
      <Modal shown={modal === 1} modalHandler={modalHandler}></Modal>
      <ModalButton onClick={() => modalHandler(1)}>OPEN MODAL</ModalButton>
      {/* <MailBox /> */}
      <MailBox></MailBox>
    </TestContainer>
  );
}

export default TestPage;
