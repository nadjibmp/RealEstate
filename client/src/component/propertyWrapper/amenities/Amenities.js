import React from 'react'
import {
    AmenitiesWrapper,
    InfoWrapper,
    IconWrapper,
    Info,
    InfoToShow,

} from './Amenities.styled'

const Amenities = ({children, info, infotoshow}) => {
    return (
        <>
            <AmenitiesWrapper>
                <IconWrapper>
                    { children }
                </IconWrapper>
                <InfoWrapper>
                    <Info>
                        {
                            info
                        }
                    </Info>
                    <InfoToShow>
                        {
                            infotoshow
                        }
                    </InfoToShow>
                </InfoWrapper>
            </AmenitiesWrapper>
        </>
    )
}

export default Amenities
