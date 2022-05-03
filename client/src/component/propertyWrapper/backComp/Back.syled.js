import styled from "styled-components";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
export const BackWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    padding: 20px 15px;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
`;

export const BackLink = styled(Link)`
    font-family: 'Open sans', sans-serif;
    font-size: 1.1rem;
    text-decoration: none;
    color: #082032;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    transition: all 0.2s ease;
    font-weight: 500;
    &:hover {
        opacity: 0.8;
    }
`;

export const BackIcon = styled(HiArrowLeft)`
    color: #082032;
    font-size: 1.2rem;
    margin-right: 10px;
    box-sizing: border-box;
`;