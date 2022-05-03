import styled from "styled-components";

export const AmenitiesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
    box-sizing: border-box;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FAFBFD;
    padding: 15px;
    margin-right: 10px;
    border-radius: 50%;
    .icon-orange{
            color:#E99037 ;
            font-size: 24px;
        }
    .icon-green{
        color:#39D5A2 ;
        font-size: 24px;
    }
    .icon-purple{
        color:#9379EE ;
        font-size: 24px;
    }
`;

export const Info  = styled.h5`
    font-size: 17px;
    font-family: 'Open sans';
    margin: 0;
    text-transform: uppercase;
    color: #6B6D8F;
    font-weight: 600;
    margin-bottom: 5px;
    box-sizing: border-box;
`;

export const InfoToShow  = styled.p`
    font-size: 13px;
    font-family: 'Open sans';
    letter-spacing:0.2px;
    margin: 0;
    text-transform: capitalize;
    color: #6B6D8F;
    box-sizing: border-box;
`;