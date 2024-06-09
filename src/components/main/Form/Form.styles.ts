"use client";
import styled from "@emotion/styled";
import form_mobile from "/src/assets/form_mobile.webp";

export const BackgroundWrapper = styled.div`
  background-image: url(${form_mobile.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BgFilterWrapper = styled.div`
  background-color: rgba(19, 18, 18, 0.7);
  padding: 142px 0 60px;
`;

export const FormTitle = styled.h3`
  text-align: center;
  color: white;
  font-size: 28px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const FormForm = styled.form``;

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
`;
