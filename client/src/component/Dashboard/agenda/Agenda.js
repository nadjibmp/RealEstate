import React from "react";
import { AgendaWrapper } from "./Agenda.styled";
import {
  AddPropIcon,
  AgendaBtn,
  Row,
} from "../mainDashboard/MainDashboard.styled";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AgendaContainer, Container } from "./Agenda.styled";
import Popup from "reactjs-popup";
import CustomModal from "./CustomModal.js";
const localizer = momentLocalizer(moment);

const Agenda = (props) => {
    const now = new Date();
    const messages = {
    allDay: "journée",
    previous: "précédent",
    next: "suivant",
    today: "aujourd'hui",
    month: "mois",
    week: "semaine",
    day: "jour",
    agenda: "Agenda",
    date: "date",
    time: "heure",
    event: "événement", // Or anything you want
    };
    return (
        <>
        <AgendaWrapper>
            <Row container>
            <Row item xs={12}>
                <Container>
                <h3>Agenda</h3>
                <CustomModal />
                </Container>
            </Row>
            </Row>
            <Row container>
            <Row item xs={12}>
                <AgendaContainer>
                <Container>
                    <Calendar
                    localizer={localizer}
                    events={[]}
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
    );
};

export default Agenda;
