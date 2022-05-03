import styled, {css} from "styled-components";
import Grid from '@mui/material/Grid';

export const Annonces = styled.div`
    height: calc(100vh - 159px) !important;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 899px) {
        height: calc(100vh - 215px) !important;
        overflow:initial !important;
}

    @media screen and (max-width: 1919px) {
        height: calc(100vh - 215px) !important;
}
`;


export const Row  = styled(({rowfilters, alignStart, column, flexstart,sticky,stickytop, hide, ...props}) => <Grid {...props}/>)`
    display: flex;
    position: ${({sticky}) => sticky ? 'sticky !important' : 'relative'};
    justify-content: ${({flexstart}) => flexstart ? 'flex-start' : 'center'};
    align-items: ${({alignStart}) => alignStart ? 'flex-start' : 'center'};
    flex-direction: ${({column}) => column ? 'column!important' : 'row!important'};
    ${({rowfilters}) => rowfilters && css`
        display: ${({hide}) => hide ? 'none !important' : 'flex !important'};
    `}

`;