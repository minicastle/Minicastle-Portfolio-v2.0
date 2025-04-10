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
        <ProjectCard
          deg={-5}
          title={originalData[0].title}
          img={originalData[0].img}
          info={originalData[0].info}
          color={originalData[0].color}
          git={originalData[0].git}
          link={originalData[0].link}
          start={originalData[0].start}
          key={"test1"}
        />
        <ProjectCard
          deg={3}
          title={originalData[1].title}
          img={originalData[1].img}
          info={originalData[1].info}
          color={originalData[1].color}
          git={originalData[1].git}
          link={originalData[1].link}
          start={originalData[1].start}
          key={"test2"}
        />
        <ProjectCard
          deg={-2}
          title={originalData[2].title}
          img={originalData[2].img}
          info={originalData[2].info}
          color={originalData[2].color}
          git={originalData[2].git}
          link={originalData[2].link}
          start={originalData[2].start}
          key={"test3"}
        />
        <ProjectCard
          deg={-2}
          title={originalData[2].title}
          img={originalData[2].img}
          info={originalData[2].info}
          color={originalData[2].color}
          git={originalData[2].git}
          link={originalData[2].link}
          start={originalData[2].start}
          key={"test4"}
        />
        <ProjectCard
          deg={-2}
          title={originalData[2].title}
          img={originalData[2].img}
          info={originalData[2].info}
          color={originalData[2].color}
          git={originalData[2].git}
          link={originalData[2].link}
          start={originalData[2].start}
          key={"test5"}
        />
        <ProjectCard
          deg={-2}
          title={originalData[2].title}
          img={originalData[2].img}
          info={originalData[2].info}
          color={originalData[2].color}
          git={originalData[2].git}
          link={originalData[2].link}
          start={originalData[2].start}
          key={"test6"}
        />
        <ProjectCard
          deg={-2}
          title={originalData[2].title}
          img={originalData[2].img}
          info={originalData[2].info}
          color={originalData[2].color}
          git={originalData[2].git}
          link={originalData[2].link}
          start={originalData[2].start}
          key={"test7"}
        />
        <ProjectCard
          deg={-2}
          title={originalData[2].title}
          img={originalData[2].img}
          info={originalData[2].info}
          color={originalData[2].color}
          git={originalData[2].git}
          link={originalData[2].link}
          start={originalData[2].start}
          key={"test8"}
        />
      </ProjectCardContainer>
      Projects
      <Footer />
    </ProjectsMainContainer>
  );
}

export default Projects;
