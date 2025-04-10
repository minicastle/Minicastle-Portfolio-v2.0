import styled from "@emotion/styled";
interface Props {
  title: string;
  percent: number;
  waveColor: string;
  fontColor?: string;
}
const WaveContainer = styled.div<{
  waveColor: string;
  fontColor: string | undefined;
}>`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  box-shadow: 0 2px 30px rgba(black, 0.2);
  background: ${({ waveColor }) => waveColor};
  color: ${({ fontColor }) =>
    fontColor === "undefined" ? "white" : fontColor};
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  :after {
    content: "";
    display: block;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(#e8a, 1),
      rgba(#def, 0) 80%,
      rgba(white, 0.5)
    );
    z-index: 11;
  }
  min-height: 300px;
  min-width: 300px;
`;
const Title = styled.span`
  position: absolute;
`;
const Percent = styled.span`
  position: absolute;
  top: calc(30%);

  ::after {
    content: "%";
  }
`;
const Wave = styled.div<{ percent: number }>`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: white;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: ${({ percent }) => (-10 + percent * 5.5) * -1 + "px"};
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 4000ms infinite linear both;
  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
  &#two {
    animation-delay: 300ms;
  }
`;
function WaveCard({ title, percent, waveColor, fontColor }: Props) {
  return (
    <WaveContainer waveColor={waveColor} fontColor={fontColor}>
      <Wave percent={percent} />
      <Wave id="two" percent={percent} />
      <Title id="title">{title}</Title>
      <Percent id="percent">{percent}</Percent>
    </WaveContainer>
  );
}

export default WaveCard;
export const WaveCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: wrap;
  gap: 10px;
  width: 100%;
  max-width: 1000px;
  height: fit-content;
`;
