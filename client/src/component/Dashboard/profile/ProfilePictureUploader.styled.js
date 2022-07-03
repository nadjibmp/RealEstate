import styled from "styled-components";


export const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
    background-color: #000;
    border-radius: 50%;
    border: 3px solid #F0A645;
    position:relative;
    > img {
        object-fit: cover;
    }
    


    > .form-group{
        position: absolute;
        top: 0;

        > label {
        color: #000;
        position: absolute;
        right: -55px;
        top: -5px;
        background-color: #F0A645;
        display: flex;
        padding: 7px;
        border-radius: 50%;
        border: 2px solid #fff;
    }
    }
`;