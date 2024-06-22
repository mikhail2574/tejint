"use client";
import styled from "@emotion/styled";

export const CardList = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const Card = styled.li`
  width: 100%;
`;

export const CardTitle = styled.h4`
  text-align: center;
  margin-bottom: 10px;
  color: var(--brown);
  font-weight: 700;
  font-size: 20px;
  @media screen and (min-width: 1440px) {
    font-size: 32px;
    line-height: 36px;
    &.process {
      padding-bottom: 32px;
    }
  }
`;

export const CardDescription = styled.div`
  width: 100%;
  padding: 14px 22px;
  border: 1px solid var(--brown);
`;
