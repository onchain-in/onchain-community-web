import { EColor } from "../../styles/color";
import styled, { css, keyframes } from "styled-components";

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Navbar = styled.nav`
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  background-color: ${EColor.COLOR_PRIMARY};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 16px;
  }
`

export const NavbarLogo = styled.div`
  font-size: 24px;
  color: ${EColor.TEXT_300};
`

export const NavbarLogoI = styled.i`
  coloe: ${EColor.COLOR_INTERACTION};
`
const slideIn = keyframes`
  from {
    transform: translateY(-20%);
  }
  to {
    transform: translateY(0);
  }
`;

export const NavbarMenu = styled.ul<{ toggle: string }>`
  display: flex;
  padding-left: 0;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
    flex-direction: column;
    text-align: center;
    width: 100%;
    display: ${(props) => props.toggle ? 'none' : 'flex'};
    animation: ${props =>
      props.toggle ? 'none' :
      css`
        ${slideIn} 1s ease-in-out
      `};
  }
`

export const NavbarMenuItem = styled.li`
  padding: 4px 4px;
  &:hover {
    background-color: ${EColor.TEXT_500};
    border-radius: 4px;
  }
`

export const NavbarMenuItemText = styled.a`
  color: ${EColor.TEXT_200};
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const NavbarIcon = styled.ul`
  list-style: none;
  color: ${EColor.TEXT_900};
  display: flex;
  padding-left: 0;
  @media screen and (max-width: 768px) {
    display: none;
    justify-content: center;
    width: 100%;
  }
  &:active {
    display: flex;
  }
`

export const NavbarIconItem = styled.li`
  padding: 4px 12px;
`

export const NavbarToggleBtn = styled.a`
  display: none;
  position: absolute;
  top: 14px;
  right: 20px;
  color: ${EColor.TEXT_600};
  @media screen and (max-width: 768px) {
    display: block;
  }
`