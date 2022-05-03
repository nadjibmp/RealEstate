import { Container } from '@material-ui/core';
import styled from "styled-components";
import { Grid } from '@material-ui/core';

export const PropertyMain = styled.section`
    background-color: #f8f9fca6;
    padding: 120px 0 90px 0;
`;
export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;

export const ContainerWrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Row = styled(Grid)`
    display: flex;
    flex-direction: ${({ row }) => row ?  'row !important' : 'column !important'}; 
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: ${({ paddingTop }) => paddingTop ? '10px  0 !important' : 'none'};
`;

export const PropertyInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`;

export const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`;