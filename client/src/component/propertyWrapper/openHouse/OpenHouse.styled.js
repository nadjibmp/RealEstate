import styled from "styled-components";
import DateTimePicker from 'react-datetime-picker';
import { ContactBtn } from "../contact/Contact.styled";
export const OpenHouseWrapper = styled.div`
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
    margin-bottom: 15px;
    text-align: center;
`;

export const DateOpenHouse  = styled.p`
    padding: 15px 15px;
    font-family: 'Open sans', sans-serif;
    font-size: 15px;
    width: 100%;
    box-sizing: border-box;
    font-weight: 500;
    margin: 0px;
    line-height: 1.5;
    border: 1px solid #B6C1D0;
    border-radius: .45rem;
    color: #6B6D8F;
`;

export const DatePicker = styled(DateTimePicker)`
    width: 100%;
    cursor: pointer;
    * {
        cursor: pointer;
    }
    .react-datetime-picker__wrapper{
        padding: 8px;
        border-radius: 0.25rem;
        border: 1px solid #E4DDFD;
    }
    .react-datetime-picker__inputGroup__input{
        outline-offset: 1px;
        outline-color: rgba(147, 121, 238, 0.7);
    }
`;

export const RendezVous = styled(ContactBtn)`
    background-color: #E4DDFD;
    color: #000;
    margin-top: 20px;
    &:hover{
        background-color: rgba(8,32,50,1);
        color: #fff;
    }
`;