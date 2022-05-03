import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { FaSearch } from "react-icons/fa";
import { Field } from 'formik';

export const SearchWrapper = styled.div`
    z-index:995;
    position: sticky;
    top: 89px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:90px;
    padding: 10px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    > Form {
        width: 100%;
    }

    @media (max-width: 576px) { 
        position: inherit !important;
    }
    @media (min-width: 577px) { 
        position: inherit !important;
    }
    @media (min-width: 992px) { 
        position: sticky !important;
    }
`;

export const Row  = styled(({row, paddingTop, alignStart, ...props}) => <Grid {...props}/>)`
    display: flex;
    flex-direction: ${({ row }) => row ?  'row !important' : 'column !important'}; 
    justify-content: center;
    align-items: ${({alignStart}) => alignStart ? 'flex-start' : 'center'};
    width: 100%;
    padding: ${({ paddingTop }) => paddingTop ? '10px  0 !important' : 'none'};
    > Select {
        margin: 7px 5px;
        width: 100%;
        padding: 7px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        font-family: 'Open-sans', sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        outline: none;
        color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        &:focus{
            box-shadow: 0 0 5px #1976d2;
            border: 1px solid #1976d2;
        }
    }
`;

export const SearchDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
`;

export const SearchIcon = styled(FaSearch)`
    position: absolute;
    top: 50%;
    right:15px;
    transform: translateY(-50%);
    color: #082032;
    cursor: pointer;
`;

export const SearchItem   = styled(Field)`
    padding: 8px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    outline: none;
    font-family: 'Open Sans';
    font-size: 0.9rem;
    color: #000;
    &:focus{
        box-shadow: 0 0 5px #1976d2;
        border: 1px solid #1976d2;
    }
`;

export const SearchBtn = styled.button`
    padding: 8px 35px;
    background-color: #082032;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 5px;
    font-family: 'Open sans';
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
        background-color: #082032;
        opacity: 0.9;
    }
    @media screen and (min-width: 500px) {
        width: 100%;
    }
`;

export const DropDown = styled.div`
    position: relative;
    display: inline-block;
    width: 90%;
    &:hover{
        .dropdown-content{
            display: flex;
        }
    }
    @media screen and (min-width: 500px) {
        width: 100%;
    }
`;
export const DropdownBtn = styled.button`
    padding: 8px 35px; 
    width: 100%;
    font-family: 'Open Sans';
    font-size:14px;
    cursor:pointer;
    transition: all 0.2s ease-out;
    color: #fff;
    font-weight: 500;
    background-color:#EFA13B;
    border: 1px solid #efa13B;
    border-radius: 0.25rem;
    &:hover {
        opacity: 0.9;
    }
    `;

export const DropDownContent = styled.div`
    display: none;
    flex-direction: column;
    padding: 8px;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 999;
`;


