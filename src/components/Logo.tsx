import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #22577a;
  color: #c7f9cc;
  font-family: "Logo";
  z-index: 100;
  animation: heightControl 1s ease-in-out both;
  animation-delay: 4.5s;
  @keyframes heightControl {
    from {
      height: 100vh;
    }
    to {
      height: 200px;
    }
  }
`;
const LogoItem1 = styled.div<{ starter: boolean }>`
  transition: 300ms;
  font-size: 100px;
  width: 0px;
  animation: birth 1s ease-in-out both;
  animation-delay: 3s;
  @keyframes birth {
    from {
      opacity: 0;
    }
    80% {
      width: fit-content;
      opacity: 0;
    }
    to {
      width: fit-content;
      opacity: 1;
    }
  }
`;
const LogoItem2 = styled.span<{ starter: boolean; left: number }>`
  width: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 300ms;
  font-size: 200px;
  user-select: none;
  animation: smallerToDown 1.5s ease-in-out both;
  animation-delay: 500ms;
  user-select: none;
  @keyframes smallerToDown {
    from {
      transform: translateY(-70%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
const LogoItem3 = styled.span<{ starter: boolean; left: number }>`
  width: max-content;
  transition: 300ms;
  font-size: 200px;
  animation: smallerToUp 1.5s ease-in-out both;
  animation-delay: 500ms;
  user-select: none;
  @keyframes smallerToUp {
    from {
      transform: translateY(70%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
const LogoImage = styled.img`
  height: 50%;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
  animation: widthControl 2s ease-in-out both;
  animation-delay: 4.5s;
  @media screen and (max-width: 1420px) {
    opacity: 0;
  }
  @keyframes widthControl {
    from {
      height: 50%;
      left: auto;
    }
    50% {
      height: 180px;
    }
    to {
      height: 180px;
      left: 10px;
    }
  }
`;
function Logo() {
  const [logoViewing, setLogoViewing] = useState<boolean>(false);
  const [logoPosition, setLogoPosition] = useState<number>(10);
  const logoRef = useRef(null);
  useEffect(() => {
    if (logoRef.current) {
      setLogoViewing(true);
      setTimeout(() => {
        setLogoViewing(false);
        setLogoPosition(30);
      }, 3000);
    }
  }, []);
  return (
    <LogoContainer id="logo animation" ref={logoRef}>
      <LogoItem2 starter={logoViewing} left={0 + logoPosition}>
        <LogoItem1 starter={logoViewing}>Mini</LogoItem1>C
      </LogoItem2>
      <LogoItem3 starter={logoViewing} left={10 + logoPosition}>
        A
      </LogoItem3>
      <LogoItem2 starter={logoViewing} left={20 + logoPosition}>
        S
      </LogoItem2>
      <LogoItem3 starter={logoViewing} left={25 + logoPosition}>
        T
      </LogoItem3>
      <LogoItem2 starter={logoViewing} left={35 + logoPosition}>
        L
      </LogoItem2>
      <LogoItem3 starter={logoViewing} left={42 + logoPosition}>
        E
      </LogoItem3>
      <LogoImage src="./images/castle.png" />
    </LogoContainer>
  );
}

export default Logo;
