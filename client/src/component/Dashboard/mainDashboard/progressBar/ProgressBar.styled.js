import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

export const ProgresBar = styled(ProgressBar)`
    width: 100%;
`;

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    > div {
        width: 100% !important;
        margin-bottom: 15px;
        > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 10px;
            align-items: center;
            > span:first-child {
                font-family: "poppins", sans-serif;
                font-weight: 500;
                letter-spacing: 00.4px;
                font-size: 14px;
                color: #000;
            }
            > span:last-child {
                font-family: "poppins", sans-serif;
                font-weight: 400;
                letter-spacing: 00.4px;
                font-size: 13px;
                color: rgba(0,0,0,0.8);
            }
        }
    }
`;