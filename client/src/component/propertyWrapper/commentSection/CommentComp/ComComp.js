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

const ComComp = () => {
    return (
        <>
            <CommentBox>
                <Header>
                    <ProfilePicture>
                        <img src='/profile.jpg' alt="profileimg"/>
                    </ProfilePicture>
                    <NameTimeWrapper>
                        <Name>Ahmed Nadjib</Name>
                        <Time>06:30 pm</Time>
                    </NameTimeWrapper>
                </Header>
                <Message>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Message>
            </CommentBox>
        </>
    )
}

export default ComComp
