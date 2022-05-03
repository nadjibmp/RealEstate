import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 25px 15px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
    > * {
        box-sizing: border-box;
    }
`;

export const Row  = styled(({row, paddingTop, ...props}) => <Grid {...props}/>)`
    display: flex;
    flex-direction: ${({ row }) => row ?  'row !important' : 'column !important'}; 
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${({ paddingTop }) => paddingTop ? '10px  0 !important' : 'none'};
`;

export const Header = styled.h4`
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
    color: #082032;
    box-sizing:border-box;
    font-weight: 500;
    width: 100%;
    margin: 0;
`;

export const CommWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;