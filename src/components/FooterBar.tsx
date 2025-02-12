import styled from "@emotion/styled";
import { BsGithub } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import WobbleTop from "../functions/WobbleTop";
import WobbleVertical from "../functions/WobbleVertical";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  max-height: 400px;
  height: fit-content;
`;
/** 메인 리스트 */
const MainList = styled.ul`
  display: flex;
  width: 60%;
  list-style: none;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px 0 100px;
  padding: 0;
  max-width: 850px;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    margin: 50px 0;
  }
`;
/** 메인 리스트 아이템 */
const MainListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 25px;
  position: relative;
  gap: 30px;
  :hover {
    ::after {
      content: "▶";
      color: #c9f4aa;
      position: absolute;
      top: 0;
      font-size: 20px;
      left: -25px;
      @media screen and (max-width: 400px) {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    gap: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
    gap: 15px;
  }
`;
/** 서브 리스트 */
const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 0;
  @media screen and (max-width: 600px) {
    gap: 15px;
  }
  @media screen and (max-width: 400px) {
    gap: 10px;
  }
`;
/** 서브 리스트 아이템 */
const SubListItem = styled.li`
  font-size: 20px;
  position: relative;
  transition: 500ms ease-in-out;
  :hover {
    ::after {
      content: "●";
      color: #e5fdd1;
      position: absolute;
      top: 7px;
      font-size: 10px;
      left: -15px;
      @media screen and (max-width: 400px) {
        top: 3px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;
/** 나와 관련된 사이트 리스트 */
const SiteList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 40px;
  @media screen and (max-width: 400px) {
    margin: 0 0 10px;
    gap: 40px;
  }
`;
/** 나와 관련된 사이트 리스트 아이템 */
const SiteListItem = styled.li`
  font-size: 30px;
`;
/**Footer Bar */
function Footer() {
  const navigate = useNavigate();
  return (
    <Container>
      <MainList>
        <MainListItem
          onClick={() => {
            navigate("/about");
          }}
        >
          <WobbleTop>About</WobbleTop>
          <SubList>
            <SubListItem onClick={() => navigate("/about#school")}>
              <WobbleTop>School</WobbleTop>
            </SubListItem>
            <SubListItem onClick={() => navigate("/about#career")}>
              <WobbleTop>Career</WobbleTop>
            </SubListItem>
            <SubListItem onClick={() => navigate("/about#education")}>
              <WobbleTop>Education</WobbleTop>
            </SubListItem>
          </SubList>
        </MainListItem>
        <MainListItem
          onClick={() => {
            navigate("/projects");
          }}
        >
          <WobbleTop>Projects</WobbleTop>
        </MainListItem>
        <MainListItem
          onClick={() => {
            navigate("/contact");
          }}
        >
          <WobbleTop>Contact</WobbleTop>
          <SubList>
            <SubListItem onClick={() => navigate("/contact#email")}>
              <WobbleTop>E-mail</WobbleTop>
            </SubListItem>
            <SubListItem onClick={() => navigate("/contact#git")}>
              <WobbleTop>Git</WobbleTop>
            </SubListItem>
            <SubListItem onClick={() => navigate("/contact#address")}>
              <WobbleTop>Address</WobbleTop>
            </SubListItem>
          </SubList>
        </MainListItem>
      </MainList>
      <SiteList>
        <WobbleVertical>
          <Link to={"https://github.com/minicastle"} target="blank">
            <SiteListItem>
              <BsGithub color="white" />
            </SiteListItem>
          </Link>
        </WobbleVertical>
        <WobbleVertical>
          <Link to="mailto:minicastle@kakao.com" target="blank">
            <SiteListItem>
              <AiOutlineMail color="white" />
            </SiteListItem>
          </Link>
        </WobbleVertical>
        <WobbleVertical>
          <Link to={"https://www.instagram.com/jk598200/"} target="blank">
            <SiteListItem>
              <AiFillInstagram color="white" />
            </SiteListItem>
          </Link>
        </WobbleVertical>
      </SiteList>
    </Container>
  );
}

export default Footer;
