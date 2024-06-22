"use client";
import styled from "@emotion/styled";

export const SectionContainer = styled.section`
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 100px;
  }
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
`;

export const FlexDesktopContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    padding: 169px 0;
    gap: 32px;
    max-width: 650px;
  }
`;
