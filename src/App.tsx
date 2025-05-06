import styled from "@emotion/styled";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import { useCallback, useEffect, useState } from "react";
import Logo from "./components/Logo";
import TestPage from "./pages/TestPage";
import Footer from "./components/FooterBar";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: #1b263b;
  color: white;
  overflow: hidden;
`;

export const MainTitle = styled.span<{ color?: string }>`
  width: fit-content;
  font-size: 80px;
  font-family: "logo";
  color: ${({ color }) => (color ? color : "white")};
`;

function App() {
  const [scroll, setScroll] = useState<number>(0);
  const [logo, setLogo] = useState<boolean>(true);
  const scrollEvent = useCallback(() => {
    setScroll(window.scrollY);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLogo(false);
    }, 6000);
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scrollEvent]);
  return (
    <MainContainer id="mainContainer">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              logo ? (
                <Logo />
              ) : (
                <>
                  <Logo />
                  <Home scrollEvent={scroll} />
                </>
              )
            }
          />
          <Route path="/home" element={<Home scrollEvent={scroll} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
        {logo ? "" : <Footer />}
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
