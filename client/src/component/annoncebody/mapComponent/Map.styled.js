import styled, {css} from "styled-components";
import { MapContainer } from 'react-leaflet'

export const MapContain = styled(MapContainer)`
    width: 100%;
    height: calc(100vh - 159px) !important;
`;