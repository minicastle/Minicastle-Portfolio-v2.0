import styled from "@emotion/styled";
import { ReactElement, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
interface Props {
  children: ReactElement[];
}
const RollUpComponent = styled.div<{ rollUp: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: hidden;
  padding: 10px 10px 30px 0;
  border-radius: 10px;
  /* box-shadow: 2px 2px 5px 0px black; */
  width: 100%;
  box-sizing: border-box;
  position: relative;
  height: ${({ rollUp }) => (rollUp ? "fit-content" : "100px")};
  padding-bottom: ${({ rollUp }) => (rollUp ? "30px" : "50px")};
`;
const RollUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  height: fit-content;
  box-sizing: border-box;
  background: linear-gradient(#1b263b, #000000ae);
  user-select: none;
  position: absolute;
  bottom: 0;
  left: 0;
`;
function RollUp({ children }: Props) {
  const [rollUp, setRollUp] = useState<boolean>(false);
  return (
    <RollUpComponent rollUp={rollUp}>
      {children}
      <RollUpButton
        onClick={() => {
          setRollUp((rollUp) => !rollUp);
        }}
      >
        {rollUp ? (
          <>
            <BiSolidUpArrow style={{ marginRight: "3px" }} />
            간단히
          </>
        ) : (
          <>
            <BiSolidDownArrow style={{ marginRight: "3px" }} />
            더보기
          </>
        )}
      </RollUpButton>
    </RollUpComponent>
  );
}

export default RollUp;
