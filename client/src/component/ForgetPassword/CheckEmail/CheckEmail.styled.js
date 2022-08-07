import styled from "styled-components";

import { BtnResetPassword } from "../PasswordSend/EmailStep.styled";

export const OpenEmailAppBtn = styled(BtnResetPassword)`
        width: 420px;
    `;

export const BackContainer = styled.div`
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
    `;