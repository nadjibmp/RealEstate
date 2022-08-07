import styled from "styled-components";
import { Grid } from "@mui/material";
import { MdOutlineNotificationsActive, MdOutlineAdd } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";
import { RendezVous } from "../../propertyWrapper/openHouse/OpenHouse.styled";
import { keyframes } from 'styled-components'


const breatheAnimation = keyframes`
    0% { height: 8px; width: 8px; }
    50% { height: 10px; width: 10px; opacity: 1 }
    100% { height: 8px; width: 8px; opacity: 0.6; }
`
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
`;

export const Row  = styled(({row, paddingTop, ...props}) => <Grid {...props}/>)`
    display: flex;
    flex-direction: ${({ row }) => row ?  'row !important' : 'column !important'}; 
    justify-content: ${({justifyCenter}) => justifyCenter ? 'center' : 'flex-start !important'};
    align-items: ${({alignCenter}) => alignCenter ? 'center' : 'flex-start !important'};
    width: 100%;
    padding: ${({ paddingTop }) => paddingTop ? '20px  0 !important' : 'none'};
    .right-wrapper {
        display: flex !important;
        align-items: center;
        justify-content: end;
        width: 100%;
    }
    .title-header{
        padding: 10px 0;
        margin: 10px 0;
        font-family: 'poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 600;
    }
    .extended-container{
        width: 98%;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .icon-wrapper{
        margin-right: 15px;
        display: flex;
        flex-direction: row;
        .notification-sign {
            position: relative;
        &::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #EFA13B;
            right: 8px;
            top:0;
            transition: all  ease-out;
            border: 1px solid #EFA13B;
            animation-name: ${breatheAnimation};
            animation-duration: 0.5s;
            animation-iteration-count: infinite;
        }
        }
    }
    .profile-icon {
        display: flex;
        cursor: pointer;
        > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: end;
        }
        .profile-img-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: fill;
            object-position: 100% 100%;
        }
    }
        #username {
                font-size: 14px;
                font-family: 'poppins', sans-serif;
                font-weight: 600;
                padding: 2px;
                color: #000;
                letter-spacing: 0.4px;
            }
        #email {
                font-size: 12px;
                font-family: 'poppins', sans-serif;
                font-weight: 600;
                padding: 2px;
                color:rgba(0,0,0,0.7);
                letter-spacing: 0.4px;
        }    
    }
`;

export const AgendaBtn = styled.button`
    font-size: 15px;
    font-family: 'poppins', sans-serif;
    background-color: #082032;
    color: #f1f1f1;
    border: 1px solid transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.5px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    transition: all 0.3s ease-out;
    margin-right:10px ;
    &:hover {
        opacity: 0.95;
    }
`;

export const StatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
`;

export const StatContainer = styled.div`
    margin-top: 20px;
    background-color: #fff;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: rgba(17, 17, 26, 0.02) 0px 4px 16px, rgba(17, 17, 26, 0.06) 0px 8px 32px;
    .comment-title{
        font-family: 'poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: #737B8B;
        margin-bottom: 25px;
    }
    .stat-type{
        display: flex;
        flex-direction: column;
        p,span {
            padding: 5px;
        }
        p{
            font-size: 15px;
            font-family: 'poppins', sans-serif;
            font-weight: 500;
            letter-spacing: 0.4px;
            color: #737B8B;
        }
        span {
            font-size: 2.5rem;
            font-family: 'poppins', sans-serif;
            font-weight: 600;
            letter-spacing: 0.4px;
            color: #000;
        }
    }
`;

export const CommentsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    max-height: 1137px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #E7E0FD; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #9379EE; 
    }
    hr {
        
        border-color: rgba(221, 221, 221, 0.2);
        border-width: 1px;
        width: 90%;
        margin-top: 10px;
    }
`;

export const VoirTout = styled(RendezVous)`
    
`;
// Icon 
export const AgendaIcon = styled(BsCalendarDateFill)`
    color: #f1f1f1;
    font-size: 22px !important;
`;

export const NotifIcon = styled(MdOutlineNotificationsActive)`
    color: #082032;
    font-size: 28px;
    margin: 0 15px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    position: relative;
    &:hover{
        transform: scale(1.1);
    }
`;

export const MessageIcon = styled(AiOutlineMessage)`
    color: #082032;
    font-size: 28px;
    margin: 0 15px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover{
        opacity: 0.80;
    }
`;

export const AddPropIcon = styled(MdOutlineAdd)`
    color: #f1f1f1;
    font-size: 28px !important;
`;
