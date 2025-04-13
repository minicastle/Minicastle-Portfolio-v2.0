import styled from "@emotion/styled";
import { useState } from "react";
import { FaExternalLinkSquareAlt, FaGithubSquare } from "react-icons/fa";
import { ProjectSet } from "../../public/data/projectList";
import { FaBookOpen } from "react-icons/fa6";
interface Props {
  data: ProjectSet;
  deg: number;
  modalHandler: (e: number) => void;
  index: number;
}
const CardContainer = styled.div<{ deg: number }>`
  transition: 300ms;
  width: 250px;
  min-width: 250px;
  height: 400px;
  min-height: 400px;
  background: #9b9084;
  border: 5px solid #fefae0;
  border-radius: 5px;
  position: relative;
  padding: 5px;
  box-sizing: border-box;
  transform: ${({ deg }) => `rotate(${deg}deg)`};
  :hover {
    scale: 1.2;
    transform: rotate(0);
    z-index: 10;
  }
`;
const CardContents = styled.div<{ hover: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ hover }) => (hover ? "#dda15e" : "dda15e")};
  padding: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: 300ms;
`;
const CardToBlack = styled.div<{ hover: boolean }>`
  display: block;
  background-color: #444039ac;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${({ hover }) => (hover ? "display:none" : "")};
`;
const CardThumbnail = styled.img`
  width: 100%;
  border: 2px solid white;
`;
export const CardJustifyContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
`;
export const CardButton = styled.a`
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  background-color: #839645;
  border: 2px white solid;
  border-radius: 4px;
  font-size: 15px;
  gap: 5px;
  width: 40%;
  user-select: none;
  :hover {
    color: white;
  }
`;
const ModalButton = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #839645;
  border: 2px white solid;
  border-radius: 4px;
  font-size: 15px;
  gap: 5px;
  color: black;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
const CardTitle = styled.p``;

function ProjectCard({ data, deg, modalHandler, index }: Props) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <CardContainer
      deg={deg}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardToBlack hover={hover} />
      <CardContents hover={hover}>
        <CardThumbnail src={data.img} />
        <CardTitle>{data.title}</CardTitle>
        <CardJustifyContainer>
          <CardButton href={data.link} target="blank">
            SITE
            <FaExternalLinkSquareAlt size={15} />
          </CardButton>
          <CardButton href={data.git} target="blank">
            GIT <FaGithubSquare size={15} />
          </CardButton>
        </CardJustifyContainer>
        <ModalButton onClick={() => modalHandler(index)}>
          Open Info
          <FaBookOpen />
        </ModalButton>
      </CardContents>
    </CardContainer>
  );
}

export default ProjectCard;
