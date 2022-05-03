import styled from 'styled-components';
import { Container} from '@material-ui/core';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

export const FooterSection = styled.section`
    padding: 20px;
    background-color: #082032;
    color: #fff;
    font-family: 'open sans';
    display: ${({show}) => show ? 'flex' : 'none'};
    box-sizing: border-box;
    flex-direction: column;
`;

export const Wrapper = styled(({border, ...props}) => <Container {...props}/>)`
    display:flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: ${({border}) => border ? '1px solid rgba(255,255,255,0.1)' : 'none'};
    padding: ${({padding}) => padding || 'none'};
`;

export const Row = styled(({column, center, ...props}) => <Grid {...props}/>)`
    display: flex;
    justify-content: center;
    align-items: ${({center}) => center ? 'center !important' : 'flex-start !important'};
    flex-direction: ${({column}) => column ? 'column !important' : 'row !important'};
`;

export const Title = styled.h3`
    font-family: 'poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
`;

export const SubTitle = styled.p`
    font-family: 'poppins';
    font-size: 0.8rem;
    line-height: 1.5;
    color: #bababa !important;
`;

export const UsefulLink = styled(Link)`
    font-family: 'poppins';
    font-size: 0.8rem;
    line-height: 1.5 !important;
    text-decoration: none;
    color: #fff !important;
    cursor: pointer;
    margin: 1em 0;
    color: #bababa !important;
    transition: all 0.3s ease-out;
    &:hover{
        color: #fff !important;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    * {
        margin: 0 10px;
        font-size: 25px;
        color: #bababa !important;
        transition: all 0.3s ease-out;
        cursor: pointer;
        &:hover{
            color:#fff !important;
        }
    };
`;