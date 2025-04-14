import styled from "@emotion/styled";
import Footer from "../components/FooterBar";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-top: 100px;
`;
function Contact() {
  return (
    <ContactContainer>
      Contact
      <Footer />
    </ContactContainer>
  );
}

export default Contact;
