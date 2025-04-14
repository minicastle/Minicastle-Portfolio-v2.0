import Footer from "../components/FooterBar";
import styled from "@emotion/styled";
import ProjectCard from "../components/ProjectCard";
import { Original, Clone } from "../assets/data/projectList";
import { ReactElement, useCallback, useEffect, useState } from "react";
import Modal from "../functions/Modal";
const allProjects = [...Original, ...Clone];
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
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 50%;
  flex-wrap: wrap;
  gap: 20px;
  flex-shrink: 1;
  padding: 50px 0;
`;

function Projects() {
  const [modal, setModal] = useState<number>(0);
  const modalHandler = useCallback((e: number): void => {
    setModal(e);
  }, []);
  const projectCardGen = useCallback(() => {
    const contents: ReactElement[] = [];
    for (let i = 0; i < allProjects.length; i++) {
      contents.push(
        <ProjectCard
          deg={allProjects[i].deg}
          data={allProjects[i]}
          key={`project card ${i}`}
          modalHandler={modalHandler}
          index={i + 1}
        />
      );
    }
    return contents;
  }, [modalHandler]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ProjectsMainContainer>
      <ProjectCardContainer>{projectCardGen()}</ProjectCardContainer>
      <Modal
        shown={modal !== 0}
        modalHandler={modalHandler}
        data={allProjects[modal - 1]}
      />
      <Footer />
    </ProjectsMainContainer>
  );
}

export default Projects;
