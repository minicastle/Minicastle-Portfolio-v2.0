import styled from "@emotion/styled";
import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaSchoolFlag } from "react-icons/fa6";
import { MdCastForEducation, MdOnlinePrediction } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";
import "../fonts.css";
import TextWriter from "../components/TextWriter";
import FixTitleElement, {
  FixInfoDetailBox,
  FixInfoDetailEnter,
  FixInfoDetailSpan,
  FixInfoImage,
  FixInfoTitle,
  FixTitle,
  FixTitleContainer,
  FixTitleImage,
} from "../components/FixTitleElement";
import WaveCard, { WaveCardContainer } from "../components/WaveCard";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/FooterBar";
import Particle from "../components/Particle";
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
  position: relative;
`;
const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;
const SectionContainer = styled.div<{ direction: "row" | "column" }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
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
export const SectionBackground = styled.img`
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
  const Titles = useRef<HTMLDivElement[]>([]);
  const [titleView, setTitleView] = useState<number>(0);
  console.log(scrollEvent);
  useEffect(() => {
    window.scrollTo(0, 0);
    const Title1 = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setTitleView(1);
        }
      },
      { rootMargin: "-100px 0px -20% 0px" }
    );
    const Title2 = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setTitleView(2);
        }
      },
      { rootMargin: "-100px 0px -20% 0px" }
    );
    const Title3 = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setTitleView(3);
        }
      },
      { rootMargin: "-100px 0px -20% 0px" }
    );
    if (Titles.current) {
      Title1.observe(Titles.current[0]);
      Title2.observe(Titles.current[1]);
      Title3.observe(Titles.current[2]);
    }
  }, []);
  return (
    <HomeContainer id="homeContainer">
      <Particle />
      <Section id="home section1">
        <SectionContainer id="site_info" direction="row">
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
        <SectionContainer
          id="about"
          style={{ width: "90%", marginTop: 50 }}
          direction="column"
        >
          <FixTitleElement
            ref={(el) => {
              if (el === null) return;
              else {
                Titles.current[0] = el;
                return Titles;
              }
            }}
            title={
              <FixTitleContainer titleView={titleView === 1}>
                <FixTitle>Introduce</FixTitle>
                <FixTitle>My</FixTitle>
                <FixTitle>Educations?</FixTitle>
                <FixTitleImage src="./images/school.png" />
              </FixTitleContainer>
            }
            info={
              <>
                <FixInfoDetailBox id="school_Info">
                  <FixInfoTitle>
                    School
                    <FaSchoolFlag
                      color="#c7f9cc"
                      style={{ marginLeft: "10px" }}
                    />
                  </FixInfoTitle>
                  <FixInfoImage src="./images/school logo.png" />
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
                    인재를 배출했습니다. <br />
                    자신의 꿈을 키워나가는 학교라는 목적성을 가지고 학생 모두가
                    현직에서의 업무능력을 키우기 위해 노력하고 있습니다.
                  </FixInfoDetailEnter>
                </FixInfoDetailBox>
                <FixInfoDetailBox id="online_course_info">
                  <FixInfoTitle>
                    Online Course
                    <MdOnlinePrediction
                      color="#c7f9cc"
                      style={{ marginLeft: "10px" }}
                    />
                  </FixInfoTitle>
                  {/* GraphQL */}
                  <FixInfoDetailEnter>
                    <GrGraphQl color="#E10098" size={30} />
                    GraphQL
                  </FixInfoDetailEnter>
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
                  <FixInfoDetailEnter>
                    <SiTypescript color="#007acc" size={30} />
                    TypeScript
                  </FixInfoDetailEnter>
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
                  <FixInfoDetailEnter>
                    <TbBrandReactNative color="#61DBFB" size={30} />
                    React Native
                  </FixInfoDetailEnter>
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
                  <FixInfoDetailEnter>
                    <FaReact color="#61dbf8" size={30} />
                    ReactJS
                  </FixInfoDetailEnter>
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
                    <MdCastForEducation
                      color="#c7f9cc"
                      style={{ marginLeft: "10px" }}
                    />
                  </FixInfoTitle>
                  {/* FrontEnd */}
                  <FixInfoDetailEnter>Front End</FixInfoDetailEnter>
                  <FixInfoDetailEnter>
                    <RiTeamFill color="coral" size={30} />
                    Course : 자율팀프로젝트
                  </FixInfoDetailEnter>
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
                  <FixInfoDetailEnter> Back End</FixInfoDetailEnter>
                  <FixInfoDetailEnter>
                    <FcLinux size={30} />
                    Course : 리눅스 마스터
                  </FixInfoDetailEnter>
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
          <FixTitleElement
            ref={(el) => {
              if (el === null) return;
              else {
                Titles.current[1] = el;
                return Titles;
              }
            }}
            title={
              <FixTitleContainer titleView={titleView === 2}>
                <FixTitle>My</FixTitle>
                <FixTitle>Skills</FixTitle>
                <FixTitleImage src="./images/skillset.png" />
              </FixTitleContainer>
            }
            info={
              <WaveCardContainer>
                <WaveCard
                  title={"javascript"}
                  percent={90}
                  waveColor="#F0DB4F"
                  fontColor="black"
                />
                <WaveCard
                  title={"TypeScript"}
                  percent={80}
                  waveColor="#007acc"
                  fontColor="black"
                />
                <WaveCard
                  title={"css"}
                  percent={80}
                  waveColor="#1572B6"
                  fontColor="black"
                />
                <WaveCard
                  title={"react"}
                  percent={90}
                  waveColor="#61DAFB"
                  fontColor="black"
                />
                <WaveCard
                  title={"Styled Component"}
                  percent={75}
                  waveColor="#DB7093"
                  fontColor="black"
                />
                <WaveCard
                  title={"react native"}
                  percent={70}
                  waveColor="#61DAFB"
                  fontColor="black"
                />
                <WaveCard
                  title={"nextjs"}
                  percent={70}
                  waveColor="black"
                  fontColor="white"
                />
                <WaveCard
                  title={"electron"}
                  percent={60}
                  waveColor="#47848F"
                  fontColor="black"
                />
                <WaveCard
                  title={"linux"}
                  percent={70}
                  waveColor="#FCC624"
                  fontColor="black"
                />
                <WaveCard
                  title={"node.js"}
                  percent={80}
                  waveColor="#339933"
                  fontColor="black"
                />
                <WaveCard
                  title={"Mysql & maria DB"}
                  percent={70}
                  waveColor="#4479A1"
                  fontColor="black"
                />
              </WaveCardContainer>
            }
          />
          <FixTitleElement
            ref={(el) => {
              if (el === null) return;
              else {
                Titles.current[2] = el;
                return Titles;
              }
            }}
            title={
              <FixTitleContainer titleView={titleView === 3}>
                <FixTitle>My</FixTitle>
                <FixTitle>Career?</FixTitle>
                <FixTitleImage src="./images/career.png" />
              </FixTitleContainer>
            }
            info={
              <>
                <FixInfoDetailBox id="school_Info">
                  <FixInfoTitle>
                    Company
                    <FaSchoolFlag
                      color="#c7f9cc"
                      style={{ marginLeft: "10px" }}
                    />
                  </FixInfoTitle>
                  <FixInfoImage src="./images/career logo.png" />
                  <FixInfoDetailSpan>
                    Name : 다손테크
                    <LinkButton
                      target="_blank"
                      href="http://www.dasontech.com/main/"
                      about="Link to company"
                    >
                      Link
                      <FiExternalLink />
                    </LinkButton>
                  </FixInfoDetailSpan>
                  <FixInfoDetailSpan>
                    Period : 2019.11 ~ 2020.07
                  </FixInfoDetailSpan>
                  <FixInfoDetailEnter>
                    다손테크는 전력자동화 시스템을 설계하고 구현하는 회사입니다.
                    근무중에는 SCADA시스템을 설계하고 Client가 사용할 UI설계 및
                    서버렉 설계 업무를 진행했습니다. <br />
                    <br />
                    참여 프로젝트
                    <br />
                    - 평촌IDC센터
                    <br />
                    - 가산IDC센터
                    <br />
                    - 용인 세브란스병원
                    <br />
                  </FixInfoDetailEnter>
                </FixInfoDetailBox>
              </>
            }
          />
        </SectionContainer>
      </Section>
    </HomeContainer>
  );
}

export default Home;
