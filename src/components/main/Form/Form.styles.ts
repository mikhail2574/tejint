"use client";
import styled from "@emotion/styled";
import form_mobile from "/src/assets/form_mobile.webp";
import form_desktop from "/src/assets/form_desktop.webp";

export const BackgroundWrapper = styled.div`
  background-image: url(${form_mobile.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 1440px) {
    background-image: url(${form_desktop.src});
    width: 100%;
  }
`;

export const BgFilterWrapper = styled.div`
  background-color: rgba(19, 18, 18, 0.7);
  padding: 142px 0 60px;
  @media screen and (min-width: 1440px) {
    background-color: transparent;
    padding: 100px 0 203px 0;
  }
`;

export const FormTitle = styled.h3`
  text-align: center;
  color: white;
  font-size: 28px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    line-height: 36px;
  }
`;

export const FormForm = styled.form`
  @media screen and (min-width: 1440px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const FormInput = styled.input`
  background-color: transparent;
  border-bottom: 1px solid white;
  width: 100%;
  font-size: 20px;
  line-height: 22px;
  color: white;
  ::placeholder {
    color: white;
  }

  @media screen and (min-width: 1440px) {
    width: 230px;
    :focus-visible {
      outline: none;
    }
  }
`;

export const FormInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormSelect = styled.select`
  background-color: transparent;
  border-bottom: 1px solid white;
  width: 100%;
  font-size: 20px;
  line-height: 22px;
  color: white;
  ::placeholder {
    color: white;
  }

  option {
    background-color: black;
    color: white;
  }

  @media screen and (min-width: 1440px) {
    width: 230px;
  }
`;

export const FormSubmit = styled.button`
  margin-top: 220px;
  padding: 18px 93px;
  width: 100%;
  color: white;
  border: 1px solid white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;

  @media screen and (min-width: 1440px) {
    display: block;
    margin: 0 auto;
    margin-top: 48px;
    width: 220px;
    padding: 12px 32px;
  }
`;

export const InputContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 20px;
    line-height: 22px;
  }
`;
