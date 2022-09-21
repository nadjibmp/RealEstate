import styled from "styled-components";
import { StatWrapper,StatContainer } from '../mainDashboard/MainDashboard.styled';
export const AgendaWrapper =  styled.div`
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
