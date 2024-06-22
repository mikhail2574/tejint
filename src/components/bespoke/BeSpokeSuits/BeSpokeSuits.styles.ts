"use client";
import styled from "@emotion/styled";

export const FabricList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
`;

export const FabricImage = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Description = styled.h4`
  font-size: 16px;
  color: var(--brown);
  line-height: 22px;
  font-weight: 400;
`;
