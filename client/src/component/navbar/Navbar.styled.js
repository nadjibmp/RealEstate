import  styled  from 'styled-components';
import { Container } from '@material-ui/core';
import { Link,NavLink } from 'react-router-dom'


export const NavbarWrapper = styled.nav`
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgColor }) => bgColor ? "#082032" : "transparent"};
    position: fixed;
    top: 0;
    z-index: 999;
    width:100%;
    padding: 5px 0;
    transition: all 0.5s ease-out;
    
    opacity: 1;
    @media screen and (max-width: 960px) {
        background-color:${({click,bgColor}) =>{
            if ( bgColor || click) {
                return (
                    "#082032 !important"
                )
        }} 
    };
    }
`;


export const Containner = styled(Container)`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 80px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 190px;
    height: 100px;
`;

export const LogoLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-family: 'poppins', sans-serif;
    display: flex;
    width: 100%;
`;

export const ImgLogo = styled.img`
    width: 100%;
    height: 100% !important;
`;

export const NavMobile = styled.div`
    display:none;
    transition: all 0.3s ease-out;
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size:1.8rem;
        cursor: pointer;
        color: #fff;
        
    }
`;

export const NavMenu = styled.ul`
    padding: 0;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
@media screen and (max-width: 960px) {
    flex-direction: column;
    height:90vh;
    width:100%;
    position: absolute;
    left: ${({click}) => (click ? '0' : '-1000px')};
    top: 80px;
    opacity: 1;
    background-color: #082032 !important;
    transition: all 0.6s ease;
    z-index: 999;
}
`;

export const NavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    height:100%;
    position: relative;
    .active{
        &:after{
        content: "";
                letter-spacing: 1px;
                position: absolute;
                display: block;
                width: 100%;
                height: 3.5px;
                bottom: -35.5px;
                left: 0;
                background-color: #FF4C29;
                transform: scaleX(0);
                transition: transform 0.3s ease; 
    }
        &:focus{
            &:after{
                transform: scaleX(1);
            }
    }
    }
    .profile-img-wrapper {
            width: 40px;
            height: 40px;
            border: 2px solid #EFA13B;
            border-radius: 50%;
            position: relative;
            margin-right: 7px;
            background-color: #000;
            box-shadow: rgba(239, 161, 59, 0.15) 0px 10px 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
            max-width: 100%;
            height: 100%;
            border-radius:50%;
        }
    }
    .username {
        font-size: 14px;
        font-family: 'poppins', sans-serif;
        font-weight: 300;
    }
    > * {
        color: #fff;
        cursor:pointer;
    }
    .dropdown-content {
        padding: 10px 0px;
        border-radius:5px;
        display: none;
        flex-direction: column;
        position: absolute;
        background-color: #E9EAEB;
        min-width: 180px;
        bottom: -210px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        > button {
            font-family: 'poppins';
            font-size: 14px;
            border:none;
            cursor:pointer;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            > * {
                margin-right: 4px;
                font-size: 16px;
            }
            &:hover {
                background-color: #EFA13B;
            }
        }
    }
    &:hover {
        .dropdown-content {
            display: flex;
        }
    }
`;

export const NavigationLink = styled(NavLink)`
    & > * {
        margin-right: 7px;
    }
    padding: 0 5px;
    color: #f1f1f1;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease-out;
    font-weight: 300;
    position: relative;
    transition: all 0.2s ease-out  ;
    &:after{
        content: "";
                letter-spacing: 1px;
                position: absolute;
                display: block;
                width: 100%;
                height: 3.5px;
                bottom: -30.5px;
                left: 0;
                background-color: #FF4C29;
                transform: scaleX(0);
                transition: transform 0.3s ease; 
    }
    &:hover{
        &:after{
            transform: scaleX(1);
        }
    }

    /* letter-spacing: 1.1px; */
    @media screen and (max-width: 960px) {
        color: #f1f1f1;
        font-weight:500;
        font-size: 1.2rem;
        border-bottom: 2px solid transparent;
        &:hover {
        }
    }   
`;


