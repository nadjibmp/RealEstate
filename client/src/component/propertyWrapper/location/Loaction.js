import React from 'react'
import { LocationHeader, LocationWrapper, LocationWrapperImg } from './Location.styled'
const Loaction = ({ children, title }) => {
    return (
        <>
            <LocationWrapper>
                <LocationHeader>
                    {title}
                </LocationHeader>
                <LocationWrapperImg>
                    {children}
                </LocationWrapperImg>
            </LocationWrapper>
        </>
    )
}

export default Loaction
