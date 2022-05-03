import Container from '@mui/material/Container';
import styled from 'styled-components';
import { MdSpaceDashboard, MdCircle } from "react-icons/md";
import { FaUser, FaHome } from "react-icons/fa";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { MdNotificationsActive, MdOutlineAddCircle } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

export const SideBarWrapper = styled.aside`
    padding:20px 10px;
    background-color: #1A2B41;
    height:100%;
    border-radius: 15px;
    width:100%;
    box-sizing:border-box;
`;

export const Wrapper = styled(Container)`
    display: flex;
    padding: 30px;
    flex-direction: column;
    height: 85vh;
    display: flex;
    justify-content: space-evenly;
    .logo-wrapper {
        padding: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .link-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 80px;
    }
`;

export const LogoHeader  = styled.img`
    width: 22%;
`;

export const LinkWrapper = styled.li`
    display: flex;
    width: 100%;
    margin-bottom:  30px;
    cursor: pointer;
    .dashboard-link {
            padding-bottom: 0px;
        }
    > a {
        width: 100%;
        text-decoration: none;
        color: #9ba6b2;
        font-family: 'poppins', sans-serif;
        letter-spacing: 0.4px;
        margin-left: 10px;
        font-size: 13.5px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
            display: flex;
            justify-content: center;
            align-items: end;
            span {
                margin-left: 10px;
            }
        }
    }
    .active {
        > *{
            * {
                color: #fff !important;
            }
        }
    }
    &:hover {
        >* {
            * {
                color: #fff !important;
            }
        }
        
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    .profile-img-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: fill;
            object-position: 100% 100%;
        }
    }
    .username-wrapper {
        margin-top: 10px;
        padding: 5px;
    }
    .email-wrapper {
        padding: 5px;
    }
`;

export const UserName = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 13.5px;
    color: rgba(255,255,255,0.7);
    letter-spacing: 0.6px;
    font-weight: 600;
`;

export const Email = styled.p`
    font-family: 'poppins', sans-serif;
    font-size: 11.5px;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.7px;
    font-weight: 400;
`;

// Icon Components

export const DashBoardIcon = styled(MdSpaceDashboard)`
    color: #9ba6b2;
    font-size: 22px;
`;

export const CircleIcon = styled(MdCircle)`
    color: #9ba6b2;
    font-size: 10px;
`;

export const UserIcon = styled(FaUser)`
    color: #9ba6b2;
    font-size: 22px;
`;

export const HomeIcon = styled(FaHome)`
    color: #9ba6b2;
    font-size: 22px;
`;
export const AddIcon  = styled(MdOutlineAddCircle)`
    color: #9ba6b2;
    font-size: 22px;
`;

export const LoveIcon = styled(AiFillHeart)`
    color: #9ba6b2;
    font-size: 22px;
`;

export const MessageIcon = styled(AiFillMessage)`
    color: #9ba6b2;
    font-size: 22px;
`;

export const NotifIcon = styled(MdNotificationsActive)`
    color: #9ba6b2;
    font-size: 22px;
`;

export const AgendaIcon = styled(BsCalendarDateFill)`
    color: #9ba6b2;
    font-size: 22px;
`;



