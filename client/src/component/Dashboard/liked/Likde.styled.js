import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import styled from "styled-components";


export const Icon = styled(FaMapMarkerAlt)`
font-size: 12px;
color:#EFA13B;
margin-right: 3px;
`;

export const DeleteButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
width: 40px;
height: 40px;
background-color: #EFA13B;
color: #fff;
border-radius: 8px;
margin: 0 5px;
border: 1px solid transparent;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover{
    background-color: #F0F4F8;
    color: #000;
    border: 1px solid #e9e9e9;
}
`;