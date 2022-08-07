import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const RowOfInputs = styled(({ row, paddingTop, ...props }) => (
    <Grid {...props} />
))`
    display: flex;
    flex-direction: ${({ row }) =>
        row ? "row !important" : "column !important"};
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${({ paddingTop }) => (paddingTop ? "10px  0 !important" : "none")};
    > label {
        width: 100%;
    }
    > input {
        width: 420px;
        &:focus {
            border-color: #efa13b;
        }
        }
    `;
