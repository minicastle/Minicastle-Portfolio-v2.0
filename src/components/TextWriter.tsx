import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import typingData from "../data/homeTypingData";
const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c7f9cc;
  ::after {
    content: "|";
    animation: blink 1s linear infinite;
  }
  @keyframes blink {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

function TextWriter() {
  const [text, setText] = useState<string>("");
  const [arrayInfo, setArrayInfo] = useState<number>(0);
  const [content, setContent] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [desCounter, setDesCounter] = useState<number>(0);
  const handleTimer = useCallback(() => {
    if (content.length !== counter) {
      setCounter((counter) => counter + 1);
      setText(content.slice(0, counter));
    } else if (desCounter > 0) {
      setDesCounter((desCounter) => desCounter - 1);
      setText(content.slice(0, desCounter));
    } else {
      if (arrayInfo === typingData.length - 1) setArrayInfo(0);
      else setArrayInfo((arrayInfo) => arrayInfo + 1);
      setCounter(0);
      setDesCounter(typingData[arrayInfo].length);
    }
  }, [arrayInfo, content, counter, desCounter]);
  useEffect(() => {
    const interval = setInterval(() => {
      handleTimer();
      setContent(typingData[arrayInfo]);
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, [arrayInfo, handleTimer]);
  return <TypeContainer>{text}</TypeContainer>;
}

export default TextWriter;
