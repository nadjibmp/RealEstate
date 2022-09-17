import styled from "styled-components";
import { AiFillHeart } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs'

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Wrapper = styled.div`
    margin: 1px 24px; 
    font-family: "Open Sans", sans-serif;
    width:70%;
    padding-right:24px ;

    .Button-clear{
        width: 100%;
        margin-top: 10px;
        padding: 15px 0;
        display:flex;
        justify-content: flex-end;
        > button {
            padding: 12px 15px;
            border-radius: 8px;
            border: 1px solid #EFA13B;
            background-color: #EFA13B;
            font-weight: 500;
            cursor: pointer;
            transition: all ease-out 0.2s;
            &:hover{
                transform: translateY(-10px);
            }
        }
    }
    .no-notification{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 15px 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
        transition: all 0.2s ease-out;
        font-family: 'poppins', sans-serif;
        font-size: 16px
        
    }
`;

export const NotificationBox = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    align-items: center;
    padding: 15px 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    transition: all 0.2s ease-out;
    &:hover{
        transform: translateY(-10px);
        cursor:pointer;
    }
    `;

export const ActionLikeIcon = styled.div`
    width: 35px;
    height: 35px;
    background-color: #FA4A77;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ActionCommentIcon = styled.div`
    width: 35px;
    height: 35px;
    background-color: #7AC70C;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const ActionOwner = styled.p`
    margin: 0 5px 0 15px;
    font-size:15px;
    font-family:"poppins", sans-serif !important; 
`;

export const OwnerProfilePic = styled(ActionCommentIcon)`
    margin-right: 10px;
    background-color: #000;
    overflow: hidden;
    > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Action = styled.p`
    font-size:14px;
    margin: 0 2px 0 5px;
    color: rgba(16, 15, 15, 0.7);
`;

export const ActionSubject = styled(Action)`
    color: rgba(0, 0, 0, 0.9);
`;

export const DateNotification = styled.span`
    font-size: 14px;
    margin-left: 10px;
    color: #EFA13B;
`;

export const HeartIcon = styled(AiFillHeart)`
    color: #fff;
    font-size: 16px;
`;

export const MessageIcon = styled(AiFillMessage)`
    color: #fff;
    font-size: 16px;
`;



/* Rendez vous section */

export const RdvSection = styled.div`
    width: 25%;
    display:flex;
    justify-content: center;
    align-items:center;
    h2 {
        width: 100%;
        display: flex;
        padding: 15px 20px;
        justify-content: center;
        align-items: center;
        font-family: 'Open sans', sans-serif;
        font-weight: 500;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
        transition: all 0.2s ease-out;
        font-family: 'poppins', sans-serif;
        font-size: 16px
    }
`;

export const RdvCard = styled.div`
    padding: 15px 20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    transition: all 0.2s ease-out;
    width: 100%;
    margin: 10px 0;
    .card-title
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        > h3 
        {
            font-weight: 500;
            font-family: '', sans-serif;
        }
    }

    .card-body
    {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 10px 0;
        font-family: 'open sans', sans-serif;
        line-height: 1.8;
    }

    .footer-card
    {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content:space-evenly;
        button
        {
            padding: 5px 20px;
            background: transparent;
            border: transparent;
            cursor: pointer;
            font-family: "poppins";
            border-radius: 7px;
            color: #EFA13B;
            transition: all 0.2s ease;
            &:first-child:hover
            {
                color: green;
                background-color: #C6E2C6;
            }
            &:last-child{
                background-color: #FCF1E1 ;
                &:hover{
                    background-color: transparent;
                    color: red;
                    background-color: #FFC6C6;
                }
            }
        }
    }
`;

export const InfoIcon = styled(BsFillInfoCircleFill)`
    color: #EFA13B;
    margin-right: 5px;
`;


