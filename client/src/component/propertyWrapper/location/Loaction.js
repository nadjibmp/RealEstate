import React from 'react'
import { LocationHeader, LocationWrapper, LocationWrapperImg } from './Location.styled'
const Loaction = ({ children }) => {
    return (
        <>
            <LocationWrapper>
                <LocationHeader>
                    Position
                </LocationHeader>
                <LocationWrapperImg>
                    {children}
                </LocationWrapperImg>
            </LocationWrapper>
        </>
    )
}

export default Loaction
