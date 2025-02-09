import styled from "@emotion/styled";
import { FiExternalLink } from "react-icons/fi";
import { FaSchoolFlag } from "react-icons/fa6";
import { MdCastForEducation, MdOnlinePrediction } from "react-icons/md";
// import CarouselWithScroll from "../components/CarouselWithScroll";
import "../fonts.css";
import TextWriter from "../components/TextWriter";
import FixTitleElement, {
  FixInfoDetailBox,
  FixInfoDetailEnter,
  FixInfoDetailSpan,
  FixInfoTitle,
  FixTitle,
  FixTitleContainer,
} from "../components/FixTitleElement";
interface Props {
  scrollEvent?: number;
}
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 100px;
`;
const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &#site_info {
    max-width: 900px;
  }
  gap: 20px;
  z-index: 10;
  min-height: 600px;
  height: fit-content;
`;
const SectionBackground = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: 0.2;
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
  z-index: 10;
`;
const GrowImage = styled.img<{ borderRadius?: string }>`
  width: 100%;
  max-width: 450px;
  flex-grow: 1;
  border-radius: ${({ borderRadius }) => borderRadius};
  flex-shrink: 0.5;
  z-index: 10;
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
const LinkButton = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #c7f9cc;
  cursor: pointer;
  padding: 0 10px;
`;
const AnimateSpan = styled.span``;
function Home({ scrollEvent }: Props) {
  console.log(scrollEvent);
  return (
    <HomeContainer id="homeContainer">
      <Section id="home section1">
        <SectionContainer id="site_info">
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
            src="./images/Home Me.png"
          />
          <SectionBackground src="./images/home background.png" />
        </SectionContainer>
      </Section>
      <Section id="home section2">
        <SectionContainer id="about" style={{ width: "90%" }}>
          <FixTitleElement
            title={
              <FixTitleContainer>
                <FixTitle>Introduce</FixTitle>
                <FixTitle>My</FixTitle>
                <FixTitle>Educations?</FixTitle>
              </FixTitleContainer>
            }
            info={
              <>
                <FixInfoDetailBox id="school_Info">
                  <FixInfoTitle>
                    School
                    <FaSchoolFlag color="#c7f9cc" />
                  </FixInfoTitle>
                  <FixInfoDetailSpan>
                    Name : 수도전기 공업고등학교
                    <LinkButton
                      target="_blank"
                      href="https://sudo.sen.hs.kr/"
                      about="Link to course"
                    >
                      Link
                      <FiExternalLink />
                    </LinkButton>
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Department : 정보통신학과
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>Period : 2016Y ~ 2019Y</FixInfoDetailSpan>
                  <FixInfoDetailEnter>
                    수도전기 공업고등학교는 한국전력공사의 지원으로
                    설립되었습니다. 국내 최고의 '마이스터고'라는 불리우며 많은
                    인재를 배출했습니다. <br></br>자신의 꿈을 키워나가는
                    학교라는 목적성을 가지고 학생 모두가 현직에서의 업무능력을
                    키우기 위해 노력하고 있습니다.
                  </FixInfoDetailEnter>
                </FixInfoDetailBox>
                <FixInfoDetailBox id="online_course_info">
                  <FixInfoTitle>
                    Online Course
                    <MdOnlinePrediction color="#c7f9cc" />
                  </FixInfoTitle>
                  {/* GraphQL */}
                  <FixInfoDetailEnter>GraphQL</FixInfoDetailEnter>
                  <FixInfoDetailSpan>
                    Course : GraphQL로 영화 API만들기
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Period : 2024.10.01 ~ 2024.10.29
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Organ : Nomad Coder
                    <LinkButton
                      target="_blank"
                      href="https://nomadcoders.co/graphql-for-beginners"
                      about="Link to course"
                    >
                      Link
                      <FiExternalLink />
                    </LinkButton>
                  </FixInfoDetailSpan>
                  {/* TypeScript */}
                  <FixInfoDetailEnter>TypeScript</FixInfoDetailEnter>
                  <FixInfoDetailSpan>
                    Course : Typescript로 블록체인 만들기
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Period : 2024.07.15 ~ 2024.07.20
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Organ : Nomad Coder
                    <LinkButton
                      target="_blank"
                      href="https://nomadcoders.co/typescript-for-beginners"
                      about="Link to course"
                    >
                      Link
                      <FiExternalLink />
                    </LinkButton>
                  </FixInfoDetailSpan>
                  {/* React Native */}
                  <FixInfoDetailEnter>React Native</FixInfoDetailEnter>
                  <FixInfoDetailSpan>
                    Course : ReactNative 101
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Period : 2024.06.20 ~ 2024.07.05
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Organ : Nomad Coder
                    <LinkButton
                      target="_blank"
                      href="https://nomadcoders.co/react-native-for-beginners"
                      about="Link to course"
                    >
                      Link
                      <FiExternalLink />
                    </LinkButton>
                  </FixInfoDetailSpan>
                  {/* ReactJS */}
                  <FixInfoDetailEnter>ReactJS</FixInfoDetailEnter>
                  <FixInfoDetailSpan>
                    Course : 30개 프로젝트로 배우는 프론트엔드 with.React
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Period : 2022.10 ~ 2022.11
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Organ : Fast Campus
                    <LinkButton
                      target="_blank"
                      href="https://fastcampus.co.kr/"
                      about="Link to course"
                    >
                      Link
                      <FiExternalLink />
                    </LinkButton>
                  </FixInfoDetailSpan>
                </FixInfoDetailBox>
                <FixInfoDetailBox id="academy_info">
                  <FixInfoTitle>
                    Academy
                    <MdCastForEducation color="#c7f9cc" />
                  </FixInfoTitle>
                  {/* FrontEnd */}
                  <FixInfoDetailEnter>Front End</FixInfoDetailEnter>
                  <FixInfoDetailSpan>Course : 자율팀프로젝트</FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Period : 2024.07.24 ~ 2024.10.25
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Organ : Korea IT
                    <LinkButton
                      target="_blank"
                      href="https://koreaitacademy.com/community/project_view.asp?idxnum=206&clkMater=&txtMenu=&GoTopage=1&selMater="
                      about="Link to course"
                    >
                      Link
                      <FiExternalLink />
                    </LinkButton>
                  </FixInfoDetailSpan>
                  {/* BackEnd */}
                  <FixInfoDetailEnter>Back End</FixInfoDetailEnter>
                  <FixInfoDetailSpan>Course : 리눅스 마스터</FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Period : 2022.11 ~ 2024.01
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Organ : Korea IT
                    <LinkButton
                      target="_blank"
                      href="https://g-sa.koreaisacademy.com/curriculum/server/linux.asp?ACE_REF=adwords_g&ACE_KW=%EB%A6%AC%EB%88%85%EC%8A%A4&gad_source=1&gclid=CjwKCAiAwaG9BhAREiwAdhv6Y97mVBYdIOAB4omjb143lVtHhh8-8i7qJTWcbyzh9q5PYSmmWQnPixoCWagQAvD_BwE"
                      about="Link to course"
                    >
                      Link
                      <FiExternalLink />
                    </LinkButton>
                  </FixInfoDetailSpan>
                </FixInfoDetailBox>
              </>
            }
          />
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
