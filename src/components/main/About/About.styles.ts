"use client";
import styled from "@emotion/styled";

export const SectionContainer = styled.section`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 128px;
    margin-bottom: 100px;
    padding-left: 108px;
  }
`;

export const FlexDesktopContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 650px;
  }
`;
