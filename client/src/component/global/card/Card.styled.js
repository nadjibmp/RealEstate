import styled from 'styled-components';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { keyframes } from 'styled-components'

const likeAnimation = keyframes`
0% { transform: scale(1) }
90% { transform: scale(1.2) }
100% { transform: scale(1.1) }
`

    ;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 365px;
    height: 500px;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 230px;
    align-items: center;
    position: relative;
`;

export const LikeIconFilled = styled(ThumbUpIcon)`
    position: absolute ;
    top: 5%;
    right: 5%;
    z-index: 10;
    color: #fff;
    width: 70px;
    height:70px;
    border: 2px solid #082032;
    padding: 5px;
    font-size: 1.2rem !important;
    border-radius: 50%;
    cursor: pointer;
    background-color: #082032;
    transition: all 0.3s ease-out;
    &::before{
        content: '';
        background-color: aliceblue;
        border-radius: 50%;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: scale(0.001, 0.001);
    }
    &:hover{
        box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%)) ;
        transform: scale(1.03);
    }
    &:active {
        box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%)) ;
        transform: scale(.80)
    }
`;

export const LikeIconBorder = styled(ThumbUpOutlinedIcon)`
    position: absolute ;
    top: 5%;
    right: 5%;
    z-index: 10;
    color: #fff;
    width: 70px;
    height:70px;
    border: 2px solid #082032;
    padding: 5px;
    font-size: 1.2rem !important;
    border-radius: 50%;
    cursor: pointer;
    background-color: #082032;
    &:hover{
        box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%)) ;
        transform: scale(1.03);
    }
    &:active {
        box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%)) ;
        transform: scale(.80)
    }
`;

export const CardImg = styled.img`
    width: 100%;
    height: 230px;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px ;
`;

export const CardBodyItem = styled(({ start, row, ...props }) => <div {...props} />)`
    display: flex;
    flex-direction:${({ row }) => row ? 'row' : 'column'} ;
    margin: 10px;
    justify-content: space-between;
    align-items: ${({ start }) => {
        return start ? 'flex-start' : 'center';
    }};
    .animate{
        animation:${likeAnimation} 0.3s 1;
        cursor:pointer;
    }
`;

export const Title = styled.h5`
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0px;
    color: #082032;
`;

export const Address = styled.p`
    font-size: 13px;
    font-family: "Open Sans", sans-serif;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0!important;
`;

export const Price = styled(Title)`
    color: orange;
    color: #72CDB5;
    font-family: "poppins";
    font-size: 1.2rem;
    font-weight: 500;
`;

export const LocationIcon = styled(IoLocationSharp)`
    color: rgba(0, 0, 0, 0.8);
    margin-right: 5px;
`;

export const IconWrapper = styled(({ width, spacebetween, aligncenter, ...props }) => <div {...props} />)`
    display: flex;
    flex-direction: row;
    font-family: 'rubik', sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: rgba(0,0,0,0.5);
    align-items: ${({ aligncenter }) => aligncenter ? 'center' : ""};
    justify-content: ${({ spacebetween }) => spacebetween ? " space-between" : "unset"};
    width: ${({ width }) => width ? '100%' : 'unset'};
    > * {
        margin-right: 7px;
    } 
    
`;

export const BedIcon = styled(BiBed)`
    color: rgba(0,0,0,0.3);
    margin-right: 5px;
`;

export const BathIcon = styled(FaBath)`
    color: rgba(0,0,0,0.3);
    margin-right: 5px;
`;

export const SizeIcon = styled(GiResize)`
    color: rgba(0,0,0,0.3);
    margin-right: 5px;
`;

export const SeeMoreBtn = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 8px 18px;
    background-color: #EFA13B;
    border-radius: 5px;
    font-family: 'rubik', sans-serif;
    font-size: 14px;
    transition: all 0.3s ease-out;
    &:hover{
        background-color:#EFA13Bcc ;
    }
`;

export const Btn = styled.button`
    font-family: 'rubik';
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size:15px;
    margin-right: 5px;
    padding: 8px 7px 8px 2px;
    border-radius: 10px;
    background-color: ${({ bgcolor }) => bgcolor || '#fff'};
    border: none;
    color: ${({ color }) => color || '#000'};
    *{
        margin: 0 5px;
    }
    > svg {
        margin-bottom: 2px;
    }

`;