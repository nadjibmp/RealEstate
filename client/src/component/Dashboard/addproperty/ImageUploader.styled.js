import styled, { keyframes } from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";

export const ImageUploaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    .form-group
    {
        margin: 10px;
        width: 60% ;
        display: flex;
        height:200px;
        flex-direction: column;
        border-radius: 7px ;
        display: flex ;
        justify-content:center ;
        align-items:center ;
        position: relative; 
        input
        {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index:-1;
        }
        input + label 
        {
            font-size: 1.25em;
            font-weight: 700;
            color: #9379EE;
            background-color: #D3C4F0;
            display: inline-block;
            cursor: pointer;
            padding: 10px;
            margin-left:12px;
            border-radius: 7px ;
        }
        input:focus + label,
        input + label:hover {
            background-color: red;
        }
        label
        {
            color:#EFA13B;
            font-family: "poppins", sans-serif;
            text-align:center ;
            font-size:0.9rem ;
            cursor:pointer;
        }
    }
    .row-container
    {
        width:60% !important ;
        margin-top: 20px ;
        .image-container
        {
            height: 200px ;
            width:100% !important ;
            padding: 10px;
            position:relative;
            img
            {
                width:100% ;
                height: 100%;
                object-fit: fill;
                border-radius: 7px ;
            } 
        }

    }
`;

export const CloseSpan = styled.span`
    width:25px ;
    height:25px ;
    display: flex ;
    justify-content:center;
    align-items: center ;
    position:absolute ;
    top: 15px;
    right:15px;
    background-color: transparent;
    font-family:'Open sans', sans-serif ;
    border-radius:50% ;
    cursor:pointer;
    color: #fff ;
    z-index:5 ;
    font-size: 12px ;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    transition: all ease-out 0.2s;

`;

export const CloseIcon = styled(RiCloseFill)`
    position:absolute;
    z-index:0;
    font-size:15px;
    top: 20px;
    right:19px;
    color:black;
`

const Mymove = keyframes`
    0% { transform: translateX(-5px);}
    50% { transform: translateX(5px); opacity: 1 }
    100% { transform: translateX(-5px); opacity: 1; }
`;

export const UploadIcon = styled(AiOutlineCloudUpload)`
    color: #EFA13B;
    font-size: 4.5rem;
    animation: ${Mymove} 1s infinite;
`;