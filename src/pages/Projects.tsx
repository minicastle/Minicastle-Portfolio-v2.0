import Footer from "../components/FooterBar";
import styled from "@emotion/styled";
import ProjectCard from "../components/ProjectCard";
import { Original } from "../../public/data/projectList";
const originalData = Original;
const ProjectsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-top: 100px;
`;
const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  width: 50%;
  flex-wrap: wrap;
  gap: 20px;
  flex-shrink: 1;
`;

function Projects() {
  return (
    <ProjectsMainContainer>
      <h1>Project List</h1>
      <h1></h1>
      <ProjectCardContainer>
        <ProjectCard deg={-5} data={originalData[0]} key={"test1"} />
        {/* <ProjectCard deg={3} data={originalData[1]} key={"test2"} />
        <ProjectCard deg={-2} data={originalData[2]} key={"test3"} />
        <ProjectCard deg={-2} data={originalData[3]} key={"test4"} />
        <ProjectCard deg={-2} data={originalData[4]} key={"test5"} />
        <ProjectCard deg={-2} data={originalData[5]} key={"test6"} />
        <ProjectCard deg={-2} data={originalData[6]} key={"test7"} /> */}
      </ProjectCardContainer>
      Projects
      <Footer />
    </ProjectsMainContainer>
  );
}

export default Projects;
