"use client";
import styled from "@emotion/styled";
import circle from "/src/assets/advantage_circle.webp";

export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px 106px;
  flex-wrap: wrap;
`;

export const AdvantageItem = styled.li`
  width: 118px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AdvantageImage = styled.div`
  background-image: url(${circle.src});
  width: 100%;
  height: 118px;
  padding: 20px 55px;
  font-family: serif;
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
`;
