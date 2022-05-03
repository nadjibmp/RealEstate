import React from 'react'
import {
    SaveShareWrapper,
    SaveShareButton,
    HeartIcon,
    ShareIcon
} from './SaveShare.styled'
const SaveShare = () => {
    return (
        <>
            <SaveShareWrapper>
                <SaveShareButton>
                    <HeartIcon/>
                    Sauvegarder
                </SaveShareButton>
                <SaveShareButton>
                    <ShareIcon/>
                    Partager
                </SaveShareButton>
            </SaveShareWrapper>
        </>
    )
}

export default SaveShare
