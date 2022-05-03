import styled from "styled-components";
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";


export const DashboardWrapper = styled.section`
    background-color:#edf2f6cf;
`; 

export const Wrapper = styled(Container)`
    padding: 110px 0 30px 0;
    display: flex;
    align-items: flex-start !important;
    justify-content: center;
`;

export const Row  = styled(({row, paddingTop, justifyCenter, alignCenter, ...props}) => <Grid {...props}/>)`
    display: flex;
    flex-direction: ${({ row }) => row ?  'row !important' : 'column !important'}; 
    justify-content: ${({justifyCenter}) => justifyCenter ? 'center' : 'flex-start !important'};
    align-items: ${({alignCenter}) => alignCenter ? 'center' : 'flex-start !important'};
    width: 100%;
    padding: ${({ paddingTop }) => paddingTop ? '10px  0 !important' : 'none'};
`;