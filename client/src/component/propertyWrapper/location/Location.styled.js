import styled from "styled-components";

export const LocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;

export const LocationHeader = styled.h4`
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    color: #3E416D;
    margin:0 0 10px 0;
    box-sizing:border-box;
    padding: 5px;
`;

export const LocationWrapperImg = styled.div`
    padding: 20px;
    width: 100%;
    background-color: #fff;
    box-sizing:border-box;
    box-shadow: rgb(100 100 111 / 10%) 0px 7px 29px 0px;
    border-radius: 10px;
    > * {
    width:100%;
    height:550px !important;
    object-position:50% 50%;
    box-sizing: border-box;
    }
`;

