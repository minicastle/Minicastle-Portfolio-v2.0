import styled from "@emotion/styled";
import { forwardRef, ReactNode } from "react";
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
  margin-bottom: 30%;
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
  padding-top: 20px;
`;
/** 고정형 타이틀을 이용한 설명형 구성 */
function FixTitleElement(
  { title, info }: Props,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <FixElementContainer ref={ref}>
      {title}
      <FixElementInfo>{info}</FixElementInfo>
    </FixElementContainer>
  );
}

export default forwardRef(FixTitleElement);

/** 고정형 타이틀 컨테이너 */
export const FixTitleContainer = styled.div<{ titleView: boolean }>`
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  border-left: 3px solid red;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
  @media screen and (max-width: 1040px) {
    border-left: 0;
    border-top: 3px solid red;
    position: static;
  }
  opacity: 0;
  animation: ${({ titleView }) => (titleView ? "textAppear" : "")} 1s linear
    both;
  @keyframes textAppear {
    from {
      & {
        opacity: 0;
      }
    }
    to {
      & {
        opacity: 1;
      }
    }
  }
`;
/** 고정형 타이틀 */
export const FixTitle = styled.p`
  text-align: start;
  font-size: 4em;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
`;
export const FixTitleImage = styled.img`
  height: 300px;
`;
export const FixInfoTitle = styled.p`
  font-size: 2em;
  text-align: center;
`;

/** 고정형 타이틀 Element 설명 콘테이너 */
export const FixInfoDetailBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-shadow: 3px -3px 10px #00000057, -3px 3px 10px #00000057;
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
  display: flex;
  align-items: center;
  max-width: 80%;
`;
export const FixInfoImage = styled.img`
  width: 50%;
`;
