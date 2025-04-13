import styled from "@emotion/styled";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ProjectSet } from "../../public/data/projectList";
import { CardButton, CardJustifyContainer } from "../components/ProjectCard";
import { FaExternalLinkSquareAlt, FaGithubSquare } from "react-icons/fa";
interface Props {
  shown: boolean;
  modalHandler: (e: number) => void;
  data?: ProjectSet;
}

const ModalContainer = styled.div<{ shown: boolean }>`
  transition: 300ms;
  display: flex;
  width: ${({ shown }) => (shown ? "90%" : "0px")};
  height: ${({ shown }) => (shown ? "90%" : "0px")};
  position: fixed;
  top: 70px;
  background-color: white;
  border-radius: 10px;
  border: ${({ shown }) => (shown ? "1px" : "0px")} solid #eee;
  z-index: 101;
  overflow-y: hidden;
  box-shadow: 2px 2px 10px 2px #000;
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
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  height: 100%;
  width: 30%;
  padding: 10px;
  border-right: 1px solid black;
  color: black;
  user-select: none;
`;
const ModalThumb = styled.img`
  box-sizing: border-box;
  display: block;
  width: 480px;
  height: fit-content;
  padding: 5px;
  border: 1px solid #adadad;
  box-shadow: 0px 0px 10px 0px black;
  border-radius: 8px;
`;
const ModalTitle = styled.p`
  font-size: 20px;
  text-shadow: 1px 1px 1px black;
`;
const ModalTags = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
const ModalTag = styled.span`
  font-size: 15px;
  color: #089750;
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
function Modal({ shown, modalHandler, data }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(shown);
  const ModalArea = useRef<HTMLDivElement | null>(null);
  const tagGen = useCallback(() => {
    const contents: ReactElement[] = [];
    for (const i in data?.tags) {
      contents.push(<ModalTag key={`tags ${i}`}>#{data?.tags[i]}</ModalTag>);
    }
    return contents;
  }, [data]);
  useEffect(() => {
    if (!isOpen) setIsOpen(shown);
    const clickOutSide = (e) => {
      if (!ModalArea?.current?.contains(e.target)) {
        modalHandler(0);
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
  }, [modalHandler, isOpen, shown]);
  return (
    <ModalContainer ref={ModalArea} shown={isOpen}>
      <ModalFnContainer>
        <ModalFnButton
          onClick={() => {
            setIsOpen(false);
            modalHandler(0);
          }}
        >
          <IoMdClose />
        </ModalFnButton>
      </ModalFnContainer>
      <ModalThumbContainer>
        <ModalThumb src={data?.img} />
        <ModalTitle>{data?.title}</ModalTitle>
        <ModalTags>{tagGen()}</ModalTags>
        <CardJustifyContainer>
          <CardButton href={data?.link} target="blank">
            SITE
            <FaExternalLinkSquareAlt size={15} />
          </CardButton>
          <CardButton href={data?.git} target="blank">
            GIT <FaGithubSquare size={15} />
          </CardButton>
        </CardJustifyContainer>
      </ModalThumbContainer>
      <ModalInfoContainer>
        <Markdown remarkPlugins={[remarkGfm]} children={data?.info} />
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
