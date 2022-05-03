import styled from 'styled-components';
import { StatContainer } from '../mainDashboard/MainDashboard.styled';
import { AlertBox } from "../../heroSection/Hero.styled";
export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
`;

export const Header = styled.h3`
    font-family:'Open sans', sans-serif;
    font-weight: 700;
    font-size: 2.0rem;

`;

export const CardContainer = styled(StatContainer)`
    width: 100%;
    display: flex;
    justify-content: center;
    form{
        display: flex;
        width: 60%;
        .input-wrapper{
            margin-top:10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            label{
                margin-left: 05px;
                margin-top: 5px;
            }
            .eye-icon{
                position: absolute;
                right:7%;
                color: rgba(0, 0, 0, 0.5);
                font-size: 18px;
                top:50%;
                cursor:pointer;
            }
        }
        .image-profile-wrapper{
            width: 150px;
            height: 150px;
            border: 2px solid #EFA13B;
            border-radius: 50%;
            position: relative;
            background-color: #000;
            margin-bottom: 30px;
            box-shadow: rgba(239, 161, 59, 0.2) 0px 10px 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            .edit-icon {
                position: absolute;
                right: 5px;
                border-radius:50%;
                width: 36px;
                height:36px;
                background-color: #EFA13B;
                top:0;
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease-out;
                &:hover{
                    background-color:#A28052;
                }
                > * {
                    color: #fff;
                    font-size:20px;
                }
            }
        }
        img{
            max-width: 100%;
            height: 100%;
            border-radius:50%;
        }
    }
    
`;

export const SaveBtn = styled.button`
    margin-top: 30px;
    padding: 12px 35px;
    font-family: 'poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.3px;
    background-color: #1A2B41;
    color: #f1f1f1;
    border: none;
    border-radius: .3rem;
    transition: all 0.3s ease-out;
    cursor:pointer;
    &:hover {
        opacity: 0.95;
    }
`;

export const EditBtn = styled.button`
    margin-top: 30px;
    padding: 12px 35px;
    font-family: 'poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.3px;
    background-color: #EFA13B;
    color: #000;
    border: none;
    border-radius: .3rem;
    transition: all 0.3s ease-out;
    cursor:pointer;
    &:hover {
        opacity: 0.95;
    }
`

export const ButtonWrapper = styled.div`
display:flex;
flex-direction:row ;
width:100% ;
justify-content:center ;
align-items:center ;
> * {
    margin-right: 20px ;
}
`
export const Alert = styled(AlertBox)`
    top:10% !important;
    left: 58% !important;
`