import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ProjectSet } from "../../public/data/projectList";
interface Props {
  shown: boolean;
  closer: (e: number) => void;
  data?: ProjectSet;
}

const ModalContainer = styled.div<{ shown: boolean }>`
  transition: 300ms;
  display: flex;
  width: ${({ shown }) => (shown ? "90%" : "0px")};
  height: ${({ shown }) => (shown ? "90%" : "0px")};
  position: absolute;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #eee;
  z-index: 101;
  overflow-y: hidden;
  box-shadow: 0 10 10 10 black;
`;
const ModalFnContainer = styled.div`
  position: absolute;
  right: 0;
`;
const ModalFnButton = styled.div`
  font-size: 20px;
  background-color: #cccccc8b;
  color: red;
`;
const ModalThumbContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  height: 100%;
  width: 30%;
  padding: 10px;
  border-right: 1px solid black;
`;
const ModalInfoContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 70%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 20px;
  border-left: 1px solid black;
  color: black;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 2px;
  }
`;
function Modal({ shown, closer, data }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(shown);
  const ModalArea = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!isOpen) setIsOpen(shown);
    const clickOutSide = (e) => {
      if (!ModalArea?.current?.contains(e.target)) {
        closer(0);
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", clickOutSide);
      return () => {
        document.removeEventListener("mousedown", clickOutSide);
      };
    } else {
      document.removeEventListener("mousedown", clickOutSide);
    }
  }, [closer, isOpen, shown]);
  return (
    <ModalContainer ref={ModalArea} shown={isOpen}>
      <ModalFnContainer>
        <ModalFnButton
          onClick={() => {
            setIsOpen(false);
            closer(0);
          }}
        >
          <IoMdClose />
        </ModalFnButton>
      </ModalFnContainer>
      <ModalThumbContainer></ModalThumbContainer>
      <ModalInfoContainer>
        <Markdown remarkPlugins={[remarkGfm]} />
      </ModalInfoContainer>
    </ModalContainer>
  );
}

export default Modal;
export const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
  border: 2px solid #eee;
  user-select: none;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;
