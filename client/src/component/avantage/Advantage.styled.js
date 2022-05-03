import  styled  from 'styled-components';
import { Container } from '@material-ui/core';
import Grid from '@mui/material/Grid';

export const Avantages = styled.section`
    display: flex;
    position: relative;
    padding: 110px 0;
    color: #fff;
    box-shadow: rgba(149, 157, 165, 0.03) 0px 8px 24px;
`;

export const Wrapper = styled(Container)`
    display:flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Row = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const Title = styled.h5`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1.1px;
    font-weight: 500;
    color: #EFA13B;
    margin: 0px 0 15px 0!important;
    @media (max-width: 900px) { 
        text-align: center;
        font-size: 1.5rem;
        width: 100%;
     }
`;

export const TitleResp = styled.h4`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
    color: #082032;
    margin: 5px 0!important;
    @media (max-width: 900px) { 
        text-align: center;
        font-size: 1.5rem;
     }
`;

export const Description = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1.2rem;
    color: rgba(0,0, 0,0.6);
    line-height: 1.5;
    @media (max-width: 900px) { 
        text-align: center;
        font-size: 1.0rem;
     }
`;