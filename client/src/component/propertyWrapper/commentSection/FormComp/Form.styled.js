import styled from "styled-components";
import { Field } from "formik";
import {FaRegCommentDots} from "react-icons/fa";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
`;

export const InputField = styled(Field)`
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 1px solid #E4DDFD;
    border-radius: 0.35rem;
    outline: none;
    font-family: 'Open Sans';
    color: #51547C;
    font-size: 15px;
    margin-bottom: 20px;
    width: 100%;
    &::placeholder{
        color: #082032;
        font-weight: 500;
    }
    &:focus{
        box-shadow: 0 0 5px #1976d2;
        border: 1px solid #1976d2;
    }
`;

export const ContactBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid transparent;
    background-color: #E4DDFD;
    color: #082032;
    font-weight: 400;
    padding: 14px 25px;
    border-radius: 0.35rem;
    font-family: 'Poppins';
    letter-spacing: 0.5px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        opacity: 0.9;
    }
`;

export const CommentIcon = styled(FaRegCommentDots)`
font-size: 15px;
color: #082032;
margin-right: 5px;
`;