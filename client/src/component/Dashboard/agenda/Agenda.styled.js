import styled from "styled-components";
import { StatWrapper, StatContainer } from '../mainDashboard/MainDashboard.styled';
import { BsCheckCircleFill } from "react-icons/bs";


export const AgendaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
    width: 100%;
    .rbc-calendar {
        width: 100%;
    }
    .rbc-today {
        background-color: transparent;
    }
    .rbc-off-range-bg {
        background-color: rgba(147, 121, 238, 0.1);
    }
    .rbc-event.rbc-selected,.rbc-event{
        background-color: rgba(147, 121, 238, 1);
        color: #000;
        font-size: 14px !important;
        font-weight: 600;
        font-family: 'Open sans';
        padding: 8px 5px;
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
    .rbc-date-cell {
        a {
            color: rgba(0, 0, 0, 0.6);
        }
    }
    .rbc-toolbar button:active, .rbc-toolbar button.rbc-active {
        background-color:rgba(234, 238, 242, 1) ;
    }
    button {
        &:hover {
            background-color: rgba(234, 238, 242, 1) ;
        }
     }
    h3 {
    font-family: 'Open sans',sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1A2B41;
    }
`

export const AgendaContainer = styled(StatWrapper)`
    width: 100%;
    height: 80vh;
`;

export const Container = styled(StatContainer)`
    width: 100%;
    height: 100%;
    font-family: 'poppins';
    margin-top: 0;
    padding: 15px 20px;
    font-size: 14px;
`;

export const ModalContainer = styled.div`
    .modal-title
    {
        font-size: 26px;
        font-family: 'poppins', sans-serif;
        line-height: 1.2;
        font-weight: 500;
        width:100%;
        border-bottom: 2px solid #ededed;
        color:#1d1d1d;
        padding-bottom: 20px;
    }

    form {
        width:100%;
    }

    input {
        width: 100%;
        border-color: #e7e7e7;
        background-color: #f7f7f7!important;
        outline: none!important;
    } 
        .date-picker {
            > div{
                padding: 7.5px 12px !important;
                width: 90%;
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-radius: 5px;
                outline: none;
                font-family: "Open Sans";
                font-size: 14px;
                width: 100%;
                border-color: #e7e7e7;
                background-color: #f7f7f7;
                &:focus {
                    border-color: #efa13b;
                }
            }
        }
    .align-text{
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        font-family: 'poppins', sans-serif;
        font-size: 15px;
        color: #737373;
        font-weight: 300;
    }
    .submit-btn{
        width: 100%;
        padding: 15px 20px;
        font-size: 16px;
        font-family: 'open sans', sans-serif;
        letter-spacing: 0.4px;
    }
    
`;

export const SuccessIcon = styled(BsCheckCircleFill)`
    color: #00BA34;
    margin-right: 5px;
    font-size: 16px;
`;


