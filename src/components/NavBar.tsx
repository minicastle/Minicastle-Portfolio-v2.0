import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
const NavContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: #00000034;
  position: fixed;
`;
const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;
const MenuItem = styled.li<{ page: boolean }>`
  font-size: 25px;
  font-weight: ${({ page }) => (page ? "bold" : "400")};
  cursor: pointer;
  &:after {
    display: block;
    content: "";
    border-bottom: 3px solid #ea2129;
    transform: ${({ page }) => (page ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: 0% 50%;
    transition: 300ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <NavContainer id={"navBar"}>
      <MenuList id="menu List">
        <MenuItem page={pathname === "/"} onClick={() => navigate("/")}>
          Home
        </MenuItem>
        <MenuItem
          page={pathname === "/about"}
          onClick={() => navigate("/about")}
        >
          About
        </MenuItem>
        <MenuItem
          page={pathname === "/projects"}
          onClick={() => navigate("/projects")}
        >
          Project
        </MenuItem>
        <MenuItem
          page={pathname === "/contact"}
          onClick={() => navigate("/contact")}
        >
          Contact
        </MenuItem>
      </MenuList>
    </NavContainer>
  );
}

export default NavBar;
