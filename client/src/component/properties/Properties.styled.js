import { Container, Grid } from '@mui/material';
import styled  from 'styled-components';

export const PropWrapper = styled.section`
    display: flex;
    padding: 50px 0;
`;

export const PropContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Row  = styled(({column, center, ...props}) => <Grid {...props}/>)`
    display: flex;
    flex-direction: ${({column}) => column ? 'column' : 'row' };
    justify-content: ${({center}) => center ? 'center' : 'flex-star'};
    align-items: center;

`;

export const Heading = styled.h2`
    font-family: 'poppins', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    position: relative;
    color: #0D2435;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-family: 'poppins',sans-serif;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    color: rgba(0,0,0,0.6);
    margin: 10px 0 40px 0 !important;
    line-height: 1.5;
`;