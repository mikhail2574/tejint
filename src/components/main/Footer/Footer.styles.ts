"use client";
import styled from "@emotion/styled";

export const FooterSect = styled.footer`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 180px;
    align-items: center;
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 1440px) {
    flex-direction: column;

    &.main {
      flex-direction: row;
      gap: 216px;
    }
  }
`;

export const NavItem = styled.li`
  font-size: 16px;
  line-height: 22px;
`;

export const LogoContainer = styled.div``;
