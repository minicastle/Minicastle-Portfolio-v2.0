import styled from "@emotion/styled";
import { ReactNode } from "react";
interface Props {
  title: ReactNode;
  info: ReactNode;
}
/** 고정형 타이틀 및 설명 Element 컨테이너 */
const FixElementContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  gap: 20px;
  position: relative;
`;
/** 고정형 타이틀 Element 설명부분 */
const FixElementInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  height: fit-content;
  gap: 150px;
`;
/** 고정형 타이틀을 이용한 설명형 구성 */
function FixTitleElement({ title, info }: Props) {
  return (
    <FixElementContainer>
      {title}
      <FixElementInfo>{info}</FixElementInfo>
    </FixElementContainer>
  );
}

export default FixTitleElement;

/** 고정형 타이틀 컨테이너 */
export const FixTitleContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  border-left: 3px solid red;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
`;
/** 고정형 타이틀 */
export const FixTitle = styled.p`
  text-align: start;
  font-size: 4em;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
`;
export const FixInfoTitle = styled.p`
  font-size: 2em;
  text-align: center;
`;
/** 고정형 타이틀 Element 설명 콘테이너 */
export const FixInfoDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
/** 고정형 타이틀 Element 설명 text */
export const FixInfoDetailSpan = styled.span`
  font-size: 1em;
  text-align: start;
  width: fit-content;
`;
/** 고정형 타이틀 Element 설명 콘테이너 padding text */
export const FixInfoDetailEnter = styled.p`
  font-size: 1em;
  text-align: start;
  word-wrap: break-word;
`;
