"use client";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 344px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    width: 1300px;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 100px;
    justify-content: space-between;
    align-items: center;
    &.flex-normal {
      align-items: stretch;
    }
    &.column {
      flex-direction: column;
    }
    &.gray {
      background-color: #f5f5f5;
    }
  }
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`;

export const SectionTitle = styled.h3`
  text-align: center;
  color: var(--brown);
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    &.start {
      text-align: start;
    }
    &.big-margin {
      margin-bottom: 48px;
    }
  }
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  @media screen and (min-width: 1440px) {
    max-width: 414px;
    &.process {
      height: 313px;
      display: flex;
      padding: 58px;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const AppointmentButton = styled.button`
  font-size: 16px;
  line-height: 24px;
  color: var(--brown);
  background-color: var(--brown_transparent);
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    width: 164px;
  }
`;

export const OnlyMobile = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const OnlyDesktop = styled.div`
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;
