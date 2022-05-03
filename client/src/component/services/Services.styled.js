import  styled, {css}  from 'styled-components';
import { Container } from '@material-ui/core';
import Grid from '@mui/material/Grid';

export const Service = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    padding: 60px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.02);
    box-shadow: rgba(149, 157, 165, 0.03) 0px 8px 24px;
;`


export const Wrapper = styled(({column, ...props}) => <Container {...props}/>)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({column}) => column ? 'column' : 'row'};
`;

export const Row = styled(({ cardRow, column, ...props }) => <Grid {...props}/>)`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({cardRow}) => cardRow && css`
        position: relative !important;
    `}
    flex-direction: ${({column}) => column ? 'column !important' : 'row'};
`;

export const Heading = styled.h2`
    font-family: 'poppins', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    position: relative;
    color: #0D2435;
`;

export const SmallHeading = styled.h5`
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    color: rgba(0, 0, 0, 0.6);
    margin: 10px 0 30px 0 !important;
    text-align: center
`;
