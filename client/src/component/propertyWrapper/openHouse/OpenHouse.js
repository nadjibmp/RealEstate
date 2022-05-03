import React, {useState} from 'react'
import { OpenHouseWrapper, Header, DatePicker, RendezVous, } from './OpenHouse.styled'


const OpenHouse = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <OpenHouseWrapper>
                <Header>
                    Prendre un rendez-vous pour une visite
                </Header>
                <DatePicker onChange={onChange} value={value} />
                <RendezVous>Demander un Rendez-vous !</RendezVous>
            </OpenHouseWrapper>
        </>
    )
}

export default OpenHouse
