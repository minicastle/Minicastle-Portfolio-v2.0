import styled from "@emotion/styled";
import { SectionBackground } from "./Home";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import MailBox from "../components/MailBox";
import { MainTitle } from "../App";
const { kakao } = window;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-top: 100px;
`;
const ContactContents = styled.div`
  display: flex;
  width: 80%;
  min-height: 80vh;
  position: relative;
  box-sizing: border-box;
  padding: 10px 30px 10px 100px;
`;
const ContactContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  z-index: 10;
`;
const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  z-index: 10;
`;
const ContactTitle = styled.span`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-top: 10px;
`;
const ContactInfo = styled.span`
  font-size: 20px;
  color: white;
  & * {
    margin-left: 10px;
    :hover {
      scale: 0.95;
    }
    :active {
      scale: 1;
    }
  }
`;
const StickyBox = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 70px;
  right: 0px;
  display: flex;
  width: fit-content;
  height: fit-content;
`;
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const container = document.getElementById("kakaomap");
    const options = {
      center: new kakao.maps.LatLng(37.5642135, 127.0016985), //지도의 중심좌표.
      level: 9, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options);
    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new kakao.maps.MapTypeControl();
    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(
        37.644909106647,
        127.007480203776
      ) /** 마커 위치 */,
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    const infoMarker = `
    <div style="padding:5px;display:flex;flex-direction:column;width:fit-content;height:fit-content;color:black;">
    MiniCastle Home
      <br>
        <a href="https://map.kakao.com/link/map/Minicastle Home,37.644909106647,127.007480203776" style="color:#70a9ff" target="_blank">
          지도보기 →
        </a> 
        <a href="https://map.kakao.com/link/to/Minicastle Home,37.644909106647,127.007480203776" style="color:#70a9ff" target="_blank">
          길찾기 →
        </a>
    </div>`;
    const infoWindow = new kakao.maps.InfoWindow({
      position: new kakao.maps.LatLng(37.644909106647, 127.007480203776),
      content: infoMarker,
    });
    infoWindow.open(map, marker);
  }, []);
  return (
    <ContactContainer>
      <MainTitle color="#81cce9">Contact me!</MainTitle>
      <ContactContents>
        <ContactContent>
          <ContactColumn>
            <a id="email" />
            <ContactTitle>E-mail</ContactTitle>
            <ContactInfo>
              minicastle@kakao.com
              <FaExternalLinkAlt
                onClick={() => {
                  window.open("mailto:minicastle@kakao.com", "_blank");
                }}
              />
            </ContactInfo>
            <a id="git" />
            <ContactTitle>GitHub</ContactTitle>
            <ContactInfo>
              https://github.com/minicastle
              <FaExternalLinkAlt
                onClick={() => {
                  window.open("https://github.com/minicastle", "_blank");
                }}
              />
            </ContactInfo>
            <ContactTitle>SNS</ContactTitle>
            <ContactInfo>
              https://instagram.com/jk598200
              <FaExternalLinkAlt
                onClick={() => {
                  window.open("https://instagram.com/jk598200", "_blank");
                }}
              />
            </ContactInfo>
          </ContactColumn>
          <ContactColumn>
            <ContactTitle>Address</ContactTitle>
            <ContactInfo>서울특별시 4.19로 13길</ContactInfo>
            <div
              id="kakaomap"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "15px",
                marginTop: "10px",
              }}
            />
          </ContactColumn>
        </ContactContent>
        <SectionBackground src="../../public/images/Background.png" />
        <StickyBox>
          <MailBox />
        </StickyBox>
      </ContactContents>
    </ContactContainer>
  );
}

export default Contact;
