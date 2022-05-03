import styled from "styled-components";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

export const SaveShareWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 25px 15px;
    box-sizing: border-box;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
`;


export const HeartIcon = styled(AiOutlineHeart)`
    font-size: 1.4rem;
    margin-right: 10px;
    color:#082032;
    opacity: 0.6;
`;

export const ShareIcon = styled(AiOutlineShareAlt)`
    font-size: 1.4rem;
    margin-right: 10px;
    color:#000;
    opacity: 0.6;
`;

export const SaveShareButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width:50%;
    margin: 5px;
    background-color: #fff;
    border: 1px solid #E99037;
    color: #082032;
    border-radius: 0.4rem;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s ease-out;
    letter-spacing: 0.5px;
    &:first-child {
        color: #082032;
        background-color: #E4DDFD;
        border-color: #E4DDFD;
    }
    &:nth-child(2) {
        color: #000;
        background-color: #39D5A2;
        border-color: #39D5A2;
    }
    &:hover {
        background-color: rgba(8, 32, 50, 1);
        color: #fff;
        border-color: rgba(8, 32, 50, 1);
        > * {
            color: #fff;
        }
    }
`;