import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { OpenHouseWrapper, Header, DatePicker, RendezVous, } from './OpenHouse.styled'

const OpenHouse = () => {
    //! TODO : make the button desible when picking rdv 
    //to get the id of property
    const params = useParams();

    const [disable, setDisable] = useState(false);

    const [date, setDate] = useState(new Date());

    const [displaySuccess, setDisplayPopUp] = useState(false);

    const CheckIfRdvExist = async () => {
        try {
            const Response = await axios.get('http://localhost:3006/api/CheckIfRdvExist', {
                params: {
                    id_listings: params.id,
                }
            })
            if (Response) {
                console.log(Response.data.message);
                if (Response.data.message === true) {
                    setDisable(true);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    /*Check if the listing is mine to disable the rdv button*/
    const CheckIfListingIsMine = async () => {
        try {
            const Response = await axios.get("http://localhost:3006/api/CheckIfListingIsMine", {
                params: {
                    id_listings: params.id,
                }
            })
            if (Response) {
                if (Response.data.data === true) {
                    console.log(Response.data.data);
                    setDisable(true);
                }
                else {
                    console.log('heloooo');
                    CheckIfRdvExist();
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const TakeAnAppointment = () => {
        try {
            axios
                .post("http://localhost:3006/api/TakeAnAppointment",
                    {
                        date,
                        id_listing: params.id,
                    })
                .then(response => {
                    if (response.data.response == "ok") {
                        setDisable(true);
                        setDisplayPopUp(true);
                        timer();
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const timer = () => {
        setTimeout(() => {
            setDisplayPopUp(false);
        }, 5000)
    }

    useEffect(() => {
        CheckIfListingIsMine();
    }, [])

    return (
        <>
            <OpenHouseWrapper>
                <Header>
                    Prendre un rendez-vous pour une visite
                </Header>
                <DatePicker onChange={setDate} value={date} />

                {
                    displaySuccess ?
                        <RendezVous
                            className='Success-rdv'
                            onClick={TakeAnAppointment}
                            disabled={disable}>
                            Rendez-vous pris avec success !
                        </RendezVous> :
                        <RendezVous
                            className={disable ? 'disable Success-rdv' : null}
                            onClick={TakeAnAppointment}
                            disabled={disable}> Demander un Rendez-vous !</RendezVous>
                }
            </OpenHouseWrapper>
        </>
    )
}

export default OpenHouse
