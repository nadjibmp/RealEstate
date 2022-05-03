import styled from "styled-components";
import { Container } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Field } from "formik";

import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";

export const SignWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  position: relative;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
`;

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const Row = styled(({ row, paddingTop, ...props }) => (
  <Grid {...props} />
))`
  display: flex;
  flex-direction: ${({ row }) =>
    row ? "row !important" : "column !important"};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ paddingTop }) => (paddingTop ? "10px  0 !important" : "none")};
  > Select {
    margin: 7px 5px;
    width: 91%;
    padding: 8px 0px 8px 16px;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-family: "Open-sans", sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    &:focus {
      border-color: #efa13b;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 70% !important;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 70% !important;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 900px) {
    width: 80% !important;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 1200px) {
    width: 60% !important;
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1536px) {
    width: 50% !important;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

export const Logo = styled.img`
  width: 220px;
`;

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  justify-content: center;
`;

export const Header = styled.h4`
  font-family: "poppins";
  font-size: 16px;
  margin: 0px;
  font-weight: 400;
  color: #082032;
  margin-bottom: 15px;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

export const HaveAccountLink = styled(Link)`
  color: #efa13b !important;
  text-decoration: none;
  font-family: "poppins";
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    color: #203148 !important;
  }
`;

export const InputLabel = styled.label`
  font-family: "Poppins" !important;
  letter-spacing: 0.2px;
  font-size: 13px;
  margin-bottom: 7px;
  color: rgba(0, 0, 0, 0.8);
  width: 90%;
  > span {
    color: red;
    font-size: 12px;
  }
`;

export const InputItem = styled(Field)`
  padding: 9.5px 12px;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  outline: none;
  font-family: "Open Sans";
  font-size: 14px;
  &:focus {
    border-color: #efa13b;
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  margin-right: 15px;
  padding: 5px 0;
  > label {
    margin-bottom: 0 !important;
    margin-left: 5px;
  }
`;

export const RadioItem = styled.input`
  padding: 9.5px 12px;
  width: 85%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const SendBtn = styled.button`
  padding: 11px 35px;
  background-color: #082032;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: "Open sans";
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #082032;
    opacity: 0.9;
  }
`;

export const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * {
    margin: 10px;
  }
`;

export const FbIcon = styled(FaFacebookF)`
  color: #fff;
  background-color: rgba(8, 32, 50, 1);
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(8, 32, 50, 0.3);
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #efa13b;
    color: #fff;
    border-color: #efa13b;
  }
`;

export const GgIcon = styled(FaGoogle)`
  color: #fff;
  background-color: rgba(8, 32, 50, 1);
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(8, 32, 50, 0.3);
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #efa13b;
    color: #fff;
    border-color: #efa13b;
  }
`;

export const TwIcon = styled(FaTwitter)`
  color: #fff;
  background-color: rgba(8, 32, 50, 1);
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(8, 32, 50, 0.3);
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #efa13b;
    color: #fff;
    border-color: #efa13b;
  }
`;

export const ErrorFieldWrapper = styled.div`
  width: 90% !important;
  color: red;
  font-size: 13px;
  margin: 7px 0;
  height: 0px;
  font-family: "poppins";
`;

export const ErrorMessageBackend = styled.div`
  padding: 15px 45px;
  color: #721c24;
  font-weight: 500;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  font-family: "Open sans", sans-serif;
  border-radius: 0.25rem;
  font-size: 14px;
`;
