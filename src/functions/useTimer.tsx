import { useState } from "react";

interface Props {
  content: string;
  handleText: (e: string) => void;
}
/** 하나의 콘텐트를 받아와 이를 타이핑 형식이 적용가능하게끔 타이머를 적용해주는 함수 */
function useTimer({ content, handleText }: Props) {
  const [counter, setCounter] = useState(0);
  const [desCounter, setDesCounter] = useState(
    typeof content === "string" ? content.length : 0
  );
  if (typeof content === "string") {
    // let counter: number = 0;
    // let desCounter: number = content.length;
    const contentArray = content.split("");
    const actionTimer = () => {
      console.log(counter);
      if (content.length === counter) {
        const buf = counter + 1;
        setCounter(buf);
        handleText(contentArray.slice(0, buf).join(""));
      } else if (desCounter !== 0) {
        const buf = desCounter - 1;
        setDesCounter(buf);
        handleText(contentArray.slice(0, buf).join(""));
      }
    };
    const timer = setInterval(() => {
      actionTimer();
    }, 500);
    if (desCounter === 0) {
      console.log("end");
      clearInterval(timer);
    }
  }
}

export default useTimer;
