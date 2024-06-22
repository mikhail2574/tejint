"use client";
import { Wrapper } from "@/app/GlobalStyles";
import styled from "@emotion/styled";

export const SectionContainer = styled.section`
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 100px;
  }
`;

export const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin-bottom: 66px;
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

export const FormContainer = styled.form`
  padding: 48px 0;
  background-color: rgba(150, 70, 2, 0.31);
`;

export const FormTitle = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
`;

export const FormInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 20px;
  line-height: 22px;
`;

export const FormInput = styled.input`
  background-color: transparent;
  border-bottom: 1px solid black;
  width: 143px;
`;

export const OrderButton = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 8px 0;
  display: block;
  width: 220px;
  margin: 0 auto;
  font-weight: 700;
  line-height: 32px;
`;
