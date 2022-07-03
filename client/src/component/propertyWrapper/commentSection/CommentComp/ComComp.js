import React from 'react'
import {
    CommentBox,
    Header,
    ProfilePicture,
    NameTimeWrapper,
    Name,
    Time,
    Message
} from './ComComp.styled'

const ComComp = ({ imgProfilePath, nom, prenom, date, comment }) => {
    return (
        <>
            <CommentBox>
                <Header>
                    <ProfilePicture>
                        <img src='/profile.jpg' alt="profileimg" />
                    </ProfilePicture>
                    <NameTimeWrapper>
                        <Name>{nom + prenom}</Name>
                        <Time>{new Date(date).toDateString()}</Time>
                    </NameTimeWrapper>
                </Header>
                <Message>
                    {comment}
                </Message>
            </CommentBox>
        </>
    )
}

export default ComComp
