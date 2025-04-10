import styled from "@emotion/styled";
import { useState } from "react";
import { FaExternalLinkSquareAlt, FaGithubSquare } from "react-icons/fa";
interface Props {
  title: string;
  info: string;
  img: string;
  link: string;
  git: string;
  color: string;
  start: string;
  deg: number;
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
const CardJustifyContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px;
`;
const CardButton = styled.a`
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
  :hover {
    color: white;
  }
`;
const CardTitle = styled.p``;

function ProjectCard({
  title,
  info,
  img,
  link,
  git,
  color,
  start,
  deg,
}: Props) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <CardContainer
      deg={deg}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardToBlack hover={hover} />
      <CardContents hover={hover}>
        <CardThumbnail src={img} />
        <CardTitle>{title}</CardTitle>
        <CardJustifyContainer>
          <CardButton href={link} target="blank">
            SITE
            <FaExternalLinkSquareAlt size={15} />
          </CardButton>
          <CardButton href={git} target="blank">
            GIT <FaGithubSquare size={15} />
          </CardButton>
        </CardJustifyContainer>
      </CardContents>
    </CardContainer>
  );
}

export default ProjectCard;
