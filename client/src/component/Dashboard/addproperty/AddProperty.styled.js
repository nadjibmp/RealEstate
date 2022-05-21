import styled, { css } from 'styled-components'
import { InputLabel } from '../../signup/Signup.styled';
import { StatContainer } from '../mainDashboard/MainDashboard.styled'

export const AddPropWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    .control-wrapper{
        width:100% ;
        .steps-wrapper
        {
            display: flex;
            flex-direction: row ;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
        }
    }
.card-container
        {
            display:flex;
            flex-direction:column !important;
            .step-control-wrapper{
                margin-top:50px;
                display:flex;
                justify-content:center ;
                align-items: center;
            }
        }
`;

export const Step = styled.div`
                padding: 10px;
                width: 60px;
                height: 60px;
                border-radius: 50% ;
                background-color: #F0F4F8;
                display: flex;
                justify-content: center;
                align-items:center;
                font-family: 'open-sans', sans-serif ;
                font-weight: 600;
                font-size: 20px;
                position:relative;
                z-index: 10;
                color: #000;
                &:first-child
                {
                    ${({ step }) => step <= 3 && css`
                        background-color: #39D5A2;
                        color: #FFF;
                    `}
                }
                &:nth-child(2)
                {
                    ${({ step }) => step <= 3 && step > 1 && css`
                        background-color: #39D5A2;
                        color: #FFF;
                    `}
                    &::before
                    {
                        content:" ";
                        border-bottom: 3px solid #f0f4f8 ;
                        ${({ step }) => step <= 3 && step > 1 && css`
                            border-bottom: 3px solid #39D5A2;
                            color: #FFF;
                        `}
                        position: absolute;
                        top:50%;
                        right:60px;
                        width:176px;
                        z-index:0;
                    }
                }
                &:nth-child(3)
                {
                    ${({ step }) => step === 3 && css`
                        background-color: #39D5A2;
                        color: #FFF;
                    `}
                    &::before
                    {
                        content:" ";
                        border-bottom: 3px solid #f0f4f8 ;
                        ${({ step }) => step === 3 && css`
                            border-bottom: 3px solid #39D5A2;
                        `}
                        position: absolute;
                        top:50%;
                        right:60px;
                        width:176px;
                        z-index:0;
                    }
                }
`

export const FormHeader = styled.h4`
    width:100%;
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 5px 0 ;
    color: #EFA13B;
    border-bottom:1px solid rgba(0, 0, 0, 0.041) ;
    margin-top: 25px ;
`

export const FormControl = styled.div`
    display: flex;
    flex-direction: ${({ row }) => row ? 'row' : 'column'};
    margin-top: 15px ;
    width:100%;
    justify-content:${({ center }) => center ? 'center' : 'flex-start'};
    align-items:  ${({ row }) => row ? 'center' : 'flex-start'};
    .adresse-input, .price-input{
        width:95% !important ;
    }
    Select {
        width: 90%;
        padding: 9.7px 12px;
        border-color: rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: "Open-sans", sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        outline: none;
        cursor: pointer;
        &:focus {
            border-color: #efa13b;
        }
    }
    .text-area
    {
        width: 95%;
        padding:20px;
    }
    .checkbox-wrapper
    {
        display: flex ;
        flex-direction: row;
        width:100%;
        justify-content: center ;
        align-items:center ;
        > *{
            margin-top:5px !important ;
        }
    }
`

export const LabelInput = styled(InputLabel)`
    margin-top: 8px ;
    margin-left: 10px;
`

export const BtnSubmit = styled.button`
    padding:10px 45px;
    margin: 0 10px;
    background-color: #9379EE;
    border: transparent ;
    color: #fff;
    font-family: 'Open sans', sans-serif;
    font-size:15px ;
    font-weight:400;
    border-radius:0.35rem;
    cursor:pointer;
`;

export const LocationFormWrapper = styled.div`
    display:none;
    ${({ step }) => step === 2 && css`
        display: flex ;
    `}
`;

export const MapWrapper = styled(StatContainer)`
    width:100% ;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:none ;
    margin-top:0;
    > * {
        display:flex;
        width:61% !important;
        border-radius:15px ;
    }
`