import styled from "styled-components";

export const CommentBox = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
    background-color: #f8f9fca6;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ProfilePicture = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 10px;
    > img {
        width: 100% !important;
        height: 100%;
        border-radius: 0.25rem;
        object-fit:cover;
        object-position:50% 50%;
    }
`;

export const NameTimeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.h6`
    color:#3E416D;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    margin: 0 0 7px 0;
    font-weight: 600;

    `;

export const Time = styled.span`
    font-size: 12px;
    font-family: "poppins", sans-serif;
    font-weight: 500;
    color:#6B6D8F ;
`;

export const Message = styled.p`
    margin-top: 15px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #6B6D8F;
    letter-spacing: 0.5px;
    line-height: 1.7;
    font-weight: 400;
`;