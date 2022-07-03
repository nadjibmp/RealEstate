import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    CommentWrapper,
    Header,
    CommWrapper,
    FormWrapper
} from './Comment.styled'
import ComComp from './CommentComp/ComComp'
import FormComp from './FormComp/FormComp'
const CommentSection = () => {
    //to get the id of property
    const params = useParams();

    //to store all comments 
    const [comments, setComments] = useState([]);

    //must update when adding new comment
    const [shouldUpdate, setShouldUpdate] = useState(true);

    //get all comments by id of property
    const GetAllCommentsByIdProperty = () => {
        console.log(params.id);
        axios
            .get("http://localhost:3006/api/GetAllCommentsByIdProperty", {
                params: {
                    id_user: params.id,
                }
            })
            .then(result => {
                const { data } = result.data;
                setComments(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        GetAllCommentsByIdProperty();
    }, [shouldUpdate])

    return (
        <>
            <CommentWrapper>
                <Header>Commentaire</Header>
                <CommWrapper>
                    {
                        comments.map((element) => {
                            return (<ComComp
                                nom={element.nom}
                                prenom={element.prenom}
                                date={element.date_publish}
                                comment={element.description} />
                            )
                        })
                    }
                </CommWrapper>
                <FormWrapper>
                    <FormComp update={setShouldUpdate} state={shouldUpdate} />
                </FormWrapper>
            </CommentWrapper>
        </>
    )
}

export default CommentSection
