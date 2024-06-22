"use client";
import styled from "@emotion/styled";
import circle from "/src/assets/advantage_circle.webp";

export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px 106px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    gap: 291px;
    padding-bottom: 100px;
  }
`;

export const AdvantageItem = styled.li`
  width: 118px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 1440px) {
    &.extended {
      width: 184px !important;
      text-align: center;
    }
  }
`;

export const AdvantageImage = styled.div`
  background-image: url(${circle.src});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 118px;
  padding: 20px 55px;
  font-family: serif;
  margin: 0 auto;
`;

export const AdvantageNumber = styled.span`
  color: var(--brown);
  font-weight: 700;
  font-size: 48px;
  align-items: center;
`;

export const AdvantageDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const BackgroundFilter = styled.div`
  @media screen and (min-width: 1440px) {
    background-color: #f5f5f5;
  }
`;
