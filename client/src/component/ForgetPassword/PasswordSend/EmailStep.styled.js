import styled from "styled-components";
import { keyframes } from "styled-components";

const AnimateLock = keyframes`
    0% { transform: scale(0.9)}
    50% { transform: scale(1.1)}
    100% { transform: scale(0.9) }
    `;

const AnimateBoxShadow = keyframes`
    0% { box-shadow: rgba(239, 161, 59, 0.2) 0px 12px 29px 0px;}
    50% {box-shadow: rgba(239, 161, 59, 0.6) 0px 0px 60px 5px;}
    100% { box-shadow: rgba(239, 161, 59, 0.2) 0px 12px 29px 0px;}
    `;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    padding: 7%;
    width: 100%;
    .input-control {
        padding: 5px 0;
        margin-top: 20px;
        width: 440px;
        display: flex;
        flex-direction: column;

        > label {
        font-size: 15px;
        font-family: "open sans", sans-serif;
        margin-bottom: 5px;
        }

        > input {
        width: 100% !important;
        }

        .back-control {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        cursor: pointer;

        span {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-family: "poppins", sans-serif;
            font-size: 13px;
            transition: all 0.2s ease-out;
            &:hover {
            color: #ffa13b;
            }
            > svg {
            margin-right: 10px;
            }
        }
        }
    }
    .lock-icon {
        transition: all 0.2s ease-in-out;
        animation-name: ${AnimateLock};
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }
    `;

export const ImgWrapper = styled.div`
  padding: 15px;
  width: 60px;
  height: 60px;
  background-color: ${({ orange }) => orange ? 'rgba(255, 149, 59, 0.5)!important' : 'rgba(209, 249, 223,1) !important'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow:${({ orange }) => orange ? 'rgba(239, 161, 59, 0.2) 0px 12px 15px 0px;' : 'rgba(209, 249, 223,0.8) 0px 02px 25px 5px !important'} ;
  animation-name: ${AnimateBoxShadow};
    animation-duration: 4s;
    animation-iteration-count: infinite;
`;


export const MainTitle = styled.h1`
  margin-top: 35px;
  font-size: 22px;
  margin-bottom: 0;
  font-family: "poppins", sans-serif;
  font-weight: 500;
`;

export const HintText = styled.p`
  text-align: center;
  font-family: "open sans", sans-serif;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.5;
  > * {
    margin-top: 5px;
  }
  > a {
    cursor: pointer;
    color: #EFA13B;
    transition: all 0.2s ease-in-out;
    &:hover{
      opacity: 0.7;
    }
  }
`;

export const BtnResetPassword = styled.button`
  padding: 12px 25px;
  margin-top: 30px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  background-color: #ffa13b;
  border-radius: 8px;
  border-color: transparent;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #ff953b;
  }
`;
