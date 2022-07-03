import styled from "styled-components";
import { AiFillHeart } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';


export const Wrapper = styled.section`
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