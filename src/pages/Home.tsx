import styled from "@emotion/styled";
// import CarouselWithScroll from "../components/CarouselWithScroll";
import "../fonts.css";
import TextWriter from "../components/TextWriter";
interface Props {
  scrollEvent?: number;
}
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  height: 200vh;
`;
const Section = styled.section``;
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  gap: 20px;
`;
const GrowTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-grow: 1;
  min-width: 300px;
  min-height: 300px;
  flex-shrink: 0.5;
`;
const GrowImage = styled.img<{ borderRadius?: string }>`
  width: 100%;
  max-width: 450px;
  flex-grow: 1;
  border-radius: ${({ borderRadius }) => borderRadius};
  flex-shrink: 0.5;
`;
const Title = styled.h1`
  display: flex;
  width: 100%;
  word-wrap: normal;
  flex-wrap: wrap;
  font-size: 2.4em;
  padding: 0 0 5px 0;
`;
const ShakeDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  animation: shake 1s infinite;
  transform-origin: bottom right;
  @keyframes shake {
    from {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(15deg);
    }
  }
`;
const ColorSpan = styled.span`
  color: #c7f9cc;
`;
const AnimateSpan = styled.span``;
function Home({ scrollEvent }: Props) {
  console.log(scrollEvent);
  return (
    <HomeContainer id="homeContainer">
      <Section id="home section1">
        <SectionContainer id="site info">
          <GrowTextBox id="info text">
            <Title>
              Hi, There!
              <span>
                <ShakeDiv className="handshake">👋</ShakeDiv>
              </span>
              <AnimateSpan />
            </Title>
            <Title>
              Welcome to <ColorSpan> Minicastle</ColorSpan> Portfolio
            </Title>
            <Title>
              <TextWriter />
            </Title>
          </GrowTextBox>
          <GrowImage
            borderRadius="20px"
            id="info image"
            src="../../public/images/Home Me.png"
          ></GrowImage>
        </SectionContainer>
      </Section>
      <Section id="home section2">
        <SectionContainer id="about">
          <div id="about title"></div>
          <div id="about info"></div>
        </SectionContainer>
      </Section>
      <Section id="home section3" style={{ width: "100%" }}>
        {/* <CarouselWithScroll itemList={["test1", "test2", "test3"]} /> */}
        {/* <div id="project carousel">
          <div id="project item"></div>
        </div> */}
      </Section>
      <Section id="home section4">
        <SectionContainer id="contact">
          <div id="contact1"></div>
          <div id="contact2"></div>
          <div id="contact3"></div>
          <div id="contact4"></div>
        </SectionContainer>
      </Section>
    </HomeContainer>
  );
}

export default Home;
