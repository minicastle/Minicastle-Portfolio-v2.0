import { useEffect } from "react";
import styled from "@emotion/styled";
import { MainTitle } from "../App";
import school from "../../public/images/school logo.png";
import RollUp from "../components/RollUp";

const AboutMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-top: 100px;
`;
const AboutList = styled.ul`
  width: 80%;
  height: fit-content;
  list-style: none;
`;
const AboutListItem = styled.li`
  width: 100%;
  height: fit-content;
`;
const AboutListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  padding: 10px;
  background: linear-gradient(to right bottom, #23324e 50%, #1b263b);
  border-radius: 5px;
  box-shadow: 5px 5px 2px 0 #172133;
`;
const AboutTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  font-family: "SPGothic";
  padding-bottom: 10px;
`;
const AboutImageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
`;
const AboutImage = styled.img`
  max-height: 250px;
`;

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AboutMainContainer>
      <MainTitle color="#81cce9">About ME!</MainTitle>
      <AboutList>
        <AboutListItem>
          <AboutTitle>School</AboutTitle>
          <AboutListItemContent>
            <AboutImageContainer>
              <AboutImage
                src="https://sudo.myapply.kr/Content/sudo/images/main_img_1.png"
                alt="school"
                loading="lazy"
              />
              <AboutImage src={school} alt="school logo" loading="lazy" />
              <AboutImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/SUDO_Electrical_Engineering_High_School_Front_View.jpg/800px-SUDO_Electrical_Engineering_High_School_Front_View.jpg"
                alt="school poster"
                loading="lazy"
              />
            </AboutImageContainer>
            <RollUp></RollUp>
          </AboutListItemContent>
        </AboutListItem>
        <AboutListItem>
          <AboutTitle>Career</AboutTitle>
          <AboutListItemContent>
            <AboutImageContainer>
              <AboutImage
                src="https://sudo.myapply.kr/Content/sudo/images/main_img_1.png"
                alt="school"
                loading="lazy"
              />
            </AboutImageContainer>
            <RollUp></RollUp>
          </AboutListItemContent>
        </AboutListItem>
        <AboutListItem>
          <AboutTitle>Education</AboutTitle>
          <AboutListItemContent>
            <AboutImageContainer>
              <AboutImage
                src="https://sudo.myapply.kr/Content/sudo/images/main_img_1.png"
                alt="school"
                loading="lazy"
              />
            </AboutImageContainer>
            <RollUp></RollUp>
          </AboutListItemContent>
        </AboutListItem>
      </AboutList>
    </AboutMainContainer>
  );
}

export default About;
