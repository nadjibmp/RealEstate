import styled, {css} from "styled-components";
import Grid from '@mui/material/Grid';
import Select from '../../signup/component/Select'
export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    position: sticky;
    overflow-y: auto;
    height: calc(100vh - 150px);
    @media screen and (max-width: 899px) {
        overflow-y: initial !important;
        height: unset!important;
}
`;

export const Row  = styled(({rowfilters, alignStart, column, flexstart, hide, ...props}) => <Grid {...props}/>)`
    display: flex;
    position: relative;
    padding: ${({paddingTop})=> paddingTop ? '20px 0 !important' : 'none'};
    justify-content: ${({flexstart}) => flexstart ? 'flex-start' : 'center'};
    align-items: ${({alignStart}) => alignStart ? 'flex-start' : 'center'};
    flex-direction: ${({column}) => column ? 'column!important' : 'row!important'};
    ${({rowfilters}) => rowfilters && css`
        display: ${({hide}) => hide ? 'none !important' : 'flex !important'};
    `}
    > .formWrapper{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0px 15px;
    }
    
`;

export const SearchTitle = styled.h1`
        box-sizing: border-box;
        font-size: 1.5rem;
        width: 100%;
        padding: 0px 15px;
        font-family:'Open Sans', sans-serif;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.9);
        margin: 10px 0;
`;

export const SearchResult = styled.h5`
    font-size: 1.0rem;
        width: 100%;
        font-family:'Open Sans', sans-serif;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
        margin: 5px 0;
`;

export const SortWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    > p{
        margin-right: 5px;
        font-size: 1rem;
        letter-spacing: 0.4px;
        color: rgba(0, 0, 0, 0.7);
    }
    > Form {
        width: 50%;
        display: flex;
        justify-content:flex-end;
    }
`;

export const SelectInput = styled(Select)`
    width: 100%;
        padding: 5px;
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
`;