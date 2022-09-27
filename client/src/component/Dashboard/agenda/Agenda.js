import React, { useEffect, useState } from "react";
import { AgendaWrapper } from "./Agenda.styled";
import {
    Row
} from "../mainDashboard/MainDashboard.styled";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AgendaContainer, Container, ModalContainer, SuccessIcon } from "./Agenda.styled";
import CustomModal from "./CustomModal.js";
import { Formik, Form, ErrorMessage } from "formik";
import { ErrorFieldWrapper, InputItem, InputLabel, SendBtn } from "../../signup/Signup.styled";
import { DatePicker } from "../../propertyWrapper/openHouse/OpenHouse.styled";
import { initialValues, validationSchema } from './Agenda.Args'
import axios from "axios";

const localizer = momentLocalizer(moment);

const Agenda = (props) => {
    const [dateDebut, setDateDebut] = useState(new Date());
    const [dateFin, setDateFin] = useState(new Date());
    const [showError, setShowError] = useState(false);
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
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
    const getDateDebut = (datedebut) => {
        if (datedebut == null) {
            return "DD/MM/YYYY";
        }
        return `${String(datedebut.toISOString()).slice(0, 10)} à ${String(datedebut.toISOString()).slice(11, 16)} GMT`;
    }

    const getDateFin = (datefin) => {
        if (datefin == null) {
            return " ";
        }
        return ` aux ${String(datefin.toISOString()).slice(0, 10)} à ${String(datefin.toISOString()).slice(11, 16)} GMT`;
    }


    const GetAllEvents = async () => {
        try {
            const Response = await axios.get('http://localhost:3006/api/GetAllEvents');
            if (Response) {
                const { data } = Response.data;
                const tempArray = [events];

                data.forEach(element => {
                    let newObj = {
                        title: element.description,
                        start: element.start_date,
                        end: element.date_end,
                        allDay: true
                    }
                    tempArray.push(newObj);
                });
                setEvents(tempArray);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const onSubmit = async (values, { setSubmitting }) => {
        try {

            if (dateDebut == null) {
                setShowError(true);
                return;
            }
            const Response = await axios.post('http://localhost:3006/api/AddEvenet', {
                values,
                dateDebut,
                dateFin,
            })
            if (Response) {
                setSubmitting(false);
                setOpen(false);
                GetAllEvents();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetAllEvents();
    }, [])

    return (
        <>

            <AgendaWrapper>
                <Row container>
                    <Row item xs={12}>
                        <Container>
                            <h3>Agenda</h3>
                            <CustomModal open={open} setOpen={setOpen}>
                                <ModalContainer>
                                    <Row container>
                                        <Row item xs={12}>
                                            <h3 className="modal-title">Créer un évènement</h3>
                                        </Row>
                                        <Row item >
                                            <Formik
                                                initialValues={initialValues}
                                                onSubmit={onSubmit}
                                                validationSchema={validationSchema}
                                            >
                                                {
                                                    formik => {
                                                        console.log(formik);
                                                        return (
                                                            <Form>
                                                                <Row container>
                                                                    <Row item paddingTop>
                                                                        <InputLabel>
                                                                            Titre <span>*</span>
                                                                        </InputLabel>
                                                                        <InputItem type="text" name="title" placeholder="Titre d'evenement" />
                                                                        <ErrorFieldWrapper>
                                                                            <ErrorMessage name="title" />
                                                                        </ErrorFieldWrapper>
                                                                    </Row>
                                                                    <Row item xs={12}>
                                                                        <InputLabel>
                                                                            Date de début  <span>*</span>
                                                                        </InputLabel>
                                                                        <DatePicker className="date-picker" onChange={setDateDebut} value={dateDebut} />

                                                                        {
                                                                            showError ? <ErrorFieldWrapper >
                                                                                <p> Veuillez sélectionner une date de début</p>
                                                                            </ErrorFieldWrapper>
                                                                                : null
                                                                        }
                                                                    </Row>

                                                                    <Row item xs={12} paddingTop>
                                                                        <InputLabel>
                                                                            Date de fin
                                                                        </InputLabel>
                                                                        <DatePicker className="date-picker" onChange={setDateFin} value={dateFin} />
                                                                    </Row>

                                                                    <Row item xs={12} paddingTop>
                                                                        <p className="align-text"> <SuccessIcon />
                                                                            {
                                                                                `Cet événement aura lieu le ${getDateDebut(dateDebut)} ${getDateFin(dateFin)}`
                                                                            }
                                                                        </p>
                                                                    </Row>

                                                                    <Row>
                                                                        <SendBtn className="submit-btn" type="submit" disabled={formik.isSubmitting}>Créer l'évènement</SendBtn>
                                                                    </Row>
                                                                </Row>
                                                            </Form>
                                                        )
                                                    }}
                                            </Formik>

                                        </Row>
                                    </Row>
                                </ModalContainer>
                            </CustomModal>
                        </Container>
                    </Row>
                </Row>
                <Row container>
                    <Row item xs={12}>
                        <AgendaContainer>
                            <Container>
                                <Calendar
                                    localizer={localizer}
                                    events={events}
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
