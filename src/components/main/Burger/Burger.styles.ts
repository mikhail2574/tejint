"use client";
import styled from "@emotion/styled";

export const BurgerContainer = styled.div`
  height: 147px;
  padding: 4px 0;
  background-color: white;
  border-top: 1px solid var(--brown);
  z-index: 2;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100vw;
  overflow: hidden;
  @media screen and (min-width: 1440px) {
    display: none;
  }
  &.disabled {
    width: 1px;
    height: 1px;
    transform: translateX(-1px);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 104px;
`;

export const FlexItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

export const FlexItemItem = styled.li``;

export const BurgerButton = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: var(--brown);
`;
