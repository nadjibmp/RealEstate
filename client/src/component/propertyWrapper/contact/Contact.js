import { Formik, Form } from 'formik'
import React, { useState, useEffect, useRef } from 'react'
import { initialValues, validationSchema } from './Contact.Args';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSocket } from '../../GlobalContext/SocketContext';
import {
    ContactBtn,
    ContactWrapper,
    Header,
    InputField,
    SendIcon
} from './Contact.styled';

const Contact = () => {
    //Refs
    const btnRef = useRef(null);
    const inputRef = useRef(null);

    //Get the ID of the listing from the url...
    const params = useParams();
    const socket = useSocket();
    const [roomId, setRoomId] = useState('');
    const [disable, setDisable] = useState(false);

    //Getting the roomId for the user if exist... 
    const GetRoomId = async () => {
        try {
            const id_user = JSON.parse(localStorage.getItem("userID"));
            await axios
                .get("http://localhost:3006/api/GetRoomId",
                    {
                        params: {
                            id_user: id_user.userId,
                            id_listing: params.id,
                        }
                    }
                )
                .then(response => {
                    const { data } = response.data;
                    setRoomId(data);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    //Sending the message with socket and strore it in db...
    const SendFirstMessage = async (message) => {

        console.log(roomId);
        // emit the message 
        //joint the room...
        socket.emit("join_room", roomId);

        //send the message...
        socket.emit("send_message", { message });

        // stroring the message in db 
        const listingID = params.id;
        axios
            .post("http://localhost:3006/api/AddFirstMessage", {
                withCredentials: true,
                message: message,
                time: new Date(),
                receiverID: listingID,
                roomId: roomId
            })
            .then(response => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const onSubmit = (values) => {
        SendFirstMessage(values.message);
        btnRef.current.disabled = true;
        setDisable(inputRef.current.isSubmitting);
    };


    useEffect(() => {
        //get the roomId before emmitingthe message and store it in db 
        GetRoomId();
    }, [])

    return (
        <Formik
            innerRef={inputRef}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <ContactWrapper>
                    <Header >
                        Contactez-nous
                    </Header>
                    <InputField
                        type="text"
                        name="message"
                        placeholder="Bonjour, Je suis intéressé par votre bien !"
                        disabled={disable}
                    />
                    <ContactBtn type='submit' ref={btnRef}>
                        <SendIcon />
                        Contacter le propriétaire
                    </ContactBtn>
                </ContactWrapper>
            </Form>

        </Formik>
    )
}

export default Contact
