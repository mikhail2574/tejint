"use client";
import styled from "@emotion/styled";

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const ContactsItem = styled.li`
  width: 100%;
  border-bottom: 1px solid var(--brown);
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1440px) {
    padding: 6px;
    gap: 26px;
    border: none;
    width: 305px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: #f5f5f5;
    flex-direction: column;
    &.loc1 {
      position: absolute;
      top: 0;
      left: 0;
    }
    &.loc2 {
      position: absolute;
      top: 0;
      left: 325px;
    }
    &.loc3 {
      position: absolute;
      top: 204px;
      left: 325px;
    }
    &.loc4 {
      width: 197px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const LocationContainer = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;

export const TextContainer = styled.div``;

export const SocialMediaList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

export const SocialMediaItem = styled.li``;
