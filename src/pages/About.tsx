import { useEffect } from "react";
import Footer from "../components/FooterBar";
import styled from "@emotion/styled";

const AboutMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-top: 100px;
`;

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AboutMainContainer>
      About
      <Footer />
    </AboutMainContainer>
  );
}

export default About;
