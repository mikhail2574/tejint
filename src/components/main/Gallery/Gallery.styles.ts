"use client";
import styled from "@emotion/styled";
import text_on_image_mobile from "/src/assets/gallery/text_on_image_mobile.webp";

export const TextOnImageContainer = styled.div`
  background-image: url(${text_on_image_mobile.src});
  padding: 26px 0;
`;

export const TextOnImage = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: white;
  text-align: center;
`;
