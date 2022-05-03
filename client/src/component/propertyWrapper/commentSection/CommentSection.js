import React from 'react'
import {
    CommentWrapper,
    Header,
    CommWrapper,
    FormWrapper
} from './Comment.styled'
import ComComp from './CommentComp/ComComp'
import FormComp from './FormComp/FormComp'
const CommentSection = () => {
    return (
        <>
            <CommentWrapper>
                <Header>Commentaire</Header>
                <CommWrapper>
                    <ComComp/>
                    <ComComp/>
                </CommWrapper>
                <FormWrapper>
                    <FormComp/>
                </FormWrapper>
            </CommentWrapper>
        </>
    )
}

export default CommentSection
