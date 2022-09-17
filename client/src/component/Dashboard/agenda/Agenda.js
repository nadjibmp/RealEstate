import React from 'react'
import { AgendaWrapper } from './Agenda.styled';
import { Row } from '../mainDashboard/MainDashboard.styled';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { AgendaContainer, Container } from './Agenda.styled';
const localizer = momentLocalizer(moment)

const Agenda = (props) => {
    const now = new Date();
    const myEventsList = [
        {
            title: "Hello it annane ahmed nadjib requesting a rdv at ",
            start: now,
            end: now,
            allDay: true,
        },
        {
            title: "Hello",
            start: now,
            end: now,
            allDay: true,
        },
        {
            title: "Hello",
            start: now,
            end: now,
            allDay: true,
        },
                {
            title: "Hello",
            start: now,
            end: now,
            allDay: true,
        },
        {
            title: "must meet debch ",
            start: "2022-02-27T03:24:00",
            end: "2022-02-27T03:24:00",
            allDay: true,
        }

    ]
    const messages = {
        allDay: 'journée',
        previous: 'précédent',
        next: 'suivant',
        today: 'aujourd\'hui',
        month: 'mois',
        week: 'semaine',
        day: 'jour',
        agenda: 'Agenda',
        date: 'date',
        time: 'heure',
        event: 'événement', // Or anything you want
    }
    return (
        <>
            <AgendaWrapper >
                <Row container>
                    <Row item xs={12}>
                        <Container>
                            <h3>Agenda</h3>
                        </Container>
                    </Row>
                </Row>
                <Row container>
                    <Row item xs={12}>
                        <AgendaContainer>
                            <Container>
                                <Calendar
                                    localizer={localizer}
                                    events={myEventsList}
                                    startAccessor="start"
                                    endAccessor="end"
                                    messages={messages}
                                />
                            </Container>
                        </AgendaContainer>
                    </Row>
                </Row>
            </AgendaWrapper>
        </>
    )
}

export default Agenda