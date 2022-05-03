import styled from "styled-components";
import { Field } from 'formik';
import {FiSend} from "react-icons/fi";

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 25px 15px;
    box-sizing: border-box;
    margin-top: 20px;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
`;

export const Header = styled.h3`
    margin-top: 0!important;
    font-size: 1.4rem;
    font-family: 'Open sans', sans-serif;
    color: #082032;
    width: 100%;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const InputField = styled(Field)`
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 0.35rem;
    outline: none;
    font-family: 'Open Sans';
    color: #51547C;
    font-size: 15px;
    margin-bottom: 20px;
    &::placeholder{
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
    }
    &:focus{
        box-shadow: 0 0 5px #efa13b;
        border: 1px solid #efa13b;
    }
`;

export const ContactBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid transparent;
    background-color: #E99037;
    color: #fff;
    font-weight: 400;
    padding: 14px 25px;
    border-radius: 0.35rem;
    font-family: 'poppins';
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        opacity: 0.9;
    }
`;

export const SendIcon = styled(FiSend)`
    color: #fff;
    margin-right: 8px;
`; 

