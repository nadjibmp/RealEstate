import styled from "styled-components";
import { SearchDiv, SearchItem } from "../../SearchBar/SearchBar.styled";
import Select from '../../signup/component/Select';
import { StatContainer } from '../mainDashboard/MainDashboard.styled';

export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`;

export const Header = styled.p`
    font-family: 'poppins';
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 40px;
    padding: 0 10px;
`

export const SearchWrapper = styled(SearchDiv)`
    * {
        color: rgba(121,121,121,0.5);
    }
    input {
        padding: 15px 15px;
        width: 100%;
        font-family: 'poppins';
        border-radius: 0.45rem;
        border: 1px solid rgba(121,121,121,0.3);
        outline: none;
        color: rgba(121,121,121,1)!important;
    }
`;

export const SearchInput = styled(SearchItem)`
    padding: 12px 10px;
    border-radius: .35rem;

`;

export const SelectBox = styled(Select)`
    padding: 10px 10px;
    border-radius: 0.35rem;
    width: 90%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 0.35rem;
    outline: none;
    font-family: 'Open Sans';
    font-size: 0.9rem;
    color: #000;
`;

export const CardContainer = styled(StatContainer)`
    display: flex;
    flex-direction: column;
    .pagination-wrapper{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        .page-num {
            background-color: #1A2B41;
            color:#f1f1f1;
            font-size: 14px;
            padding:9px 25px;
            border-radius: 3px;
            font-family: 'Open sans';
            margin-right: 3px;
            border: 1px solid transparent;
        }
        > div:last-child {
            display: flex;
            > button {
                cursor: pointer;
                transition: all 0.3s ease-out;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #1A2B41;
                color:#f1f1f1;
                padding:9px 25px;
                font-family: 'Open sans';
                margin-right: 3px;
                &:hover{
                    opacity:0.9;
                }
            }
            > button:first-child {
                border-radius: 2px;
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
                border: 1px solid transparent;
                font-size: 16px;
            }
            > button:last-child {
                border-radius: 2px;
                border: 1px solid transparent;
                font-size: 16px;
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;
            }
            > button:nth-child(2),button:nth-child(4) {
                border-radius: 2px;
                border: 1px solid transparent;
                font-size: 14px;
            }
        }
        }
    .styled-table {
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: 'poppins',sans-serif;
    width: 100%;
    font-weight: 400;
    min-width: 100%;
    }
    .styled-table thead tr {
    background-color: #fff;
    color: #000;
    text-align: left;
    }   

    .styled-table th, .styled-table td {
        padding: 25px 15px;
    }

    .styled-table td img {
        width: 160px;
        border-radius: 7px;
    }
    .styled-table thead tr th {
        border-bottom: 1px solid rgba(121,121,121,0.2);
        font-weight: 400;
    }

    .styled-table tbody tr:last-of-type {
        border-bottom: 2px solid rgba(121,121,121,0.2);
    }

    .styled-table tbody tr.active-row {
        font-weight: bold;
        color: #009879;
    }
    
    table th, tfoot td{
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #fff;
        color: rgba(122,122,122);
    }

    .table-title {
        font-weight: 500;
        margin-bottom: 4px;
    }

    .table-address {
        color: rgba(121,121,121,0.7);
        margin-right: 3px;
    }

    .table-price {
        color: #EFA13B;
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 3px;
        margin-left: 3px;
    }

    .wrapper {
        display: flex;
    }
`;