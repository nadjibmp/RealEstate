import { Formik, Form, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Row } from "../Dashboard.styled";
import { initialValues, validationSchema } from './ProfileArgs.js'
import { ErrorFieldWrapper } from '../../signup/Signup.styled'
import {
  ProfileWrapper,
  Header,
  CardContainer,
  SaveBtn,
  EditBtn,
  ButtonWrapper,
  Alert
} from "./Profile.styled";
import {
  InputLabel,
  InputItem,
  GenderWrapper,
  RadioItem,
} from "../../signup/Signup.styled";

const Profile = () => {
  axios.defaults.withCredentials = true;
  //state to manage show/hide password fields
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealPassword2, setRevealPassword2] = useState(false);

  //state to show if the update is successfull
  const [display, setDisplay] = useState(false)

  //setting all the inputs disable or enable
  const [disabled, setDisabled] = useState(true);
  const handleInputState = () => {
    setDisabled(!disabled);
  };

  //state to store field informations
  const [information, setInformation] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    naissance: "",
    sexe: "",
    motdepass1: ""
  });
  const {nom, prenom, email, tel, naissance, sexe, motdepass1} = information;
  //submit function to update user information based on the user id
  const UpdateInformation = (values) => {
    axios
      .put("http://localhost:3006/api/updateUser", {
        information,
        withCredentials: true,
      })
      .then((response) => {
        setDisplay(true)
        setDisabled(true)
        timer()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //timer to show that the updates are done
  const timer = () => {
    setTimeout(() => {
      setDisplay(false)
    }, 5000)
  }

  // useEffect to get user information from db and show them in the inputs
  useEffect(() => {
    const id = JSON.parse(window.localStorage.getItem("userID"));
    axios
      .post("http://localhost:3006/api/userinfo", {
        userId: id.userId,
        withCredentials: true,
      })
      .then((response) => {
        const { nom, prenom, email, tel, naissance, sexe } = response.data;
        setInformation({
          nom,
          prenom,
          email,
          tel,
          naissance: naissance.slice(0, 10),
          sexe,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Formik
      enableReinitialize
      initialValues={{nom, prenom, email, tel, naissance, sexe, motdepass1, motdepass2:""}}
      onSubmit={UpdateInformation}
      validationSchema={validationSchema}
    >
      {
        Formik => {
          return (
            <>
              {
                display ?
                  <Alert variant="filled" severity="success">Vos Informations sont à jour !</Alert>
                  : null
              }
              <ProfileWrapper>
                <Row container>
                  <Row item xs={12}>
                    <CardContainer>
                      <Header>Paramètres</Header>
                    </CardContainer>
                  </Row>
                  <Row item xs={12}>
                    <CardContainer>
                      <Form>
                        <Row container row>
                          <Row item xs={12} alignCenter>
                            <div className="image-profile-wrapper">
                              <div className="edit-icon">
                                <MdEdit />
                              </div>
                              <img src="/profile.jpg" alt="my-profile-pic" />
                            </div>
                          </Row>
                          <Row item xs={12} md={6}>
                            <div className="input-wrapper">
                              <InputLabel>Nom</InputLabel>
                              <InputItem
                                type="text"
                                name="nom"
                                onKeyUp={(e) =>
                                  setInformation({
                                    ...information,
                                    nom: e.target.value,
                                  })
                                }
                                disabled={disabled}
                              />
                              <ErrorFieldWrapper>
                                <ErrorMessage name="nom" />
                              </ErrorFieldWrapper>
                            </div>
                          </Row>
                          <Row item xs={12} md={6}>
                            <div className="input-wrapper">
                              <InputLabel>Prénom</InputLabel>
                              <InputItem
                                type="text"
                                name="prenom"
                                onKeyUp={(e) =>
                                  setInformation({
                                    ...information,
                                    prenom: e.target.value,
                                  })
                                }
                                disabled={disabled}
                              />
                              <ErrorFieldWrapper>
                                <ErrorMessage name="prenom" />
                              </ErrorFieldWrapper>
                            </div>
                          </Row>
                          <Row item xs={12} md={6}>
                            <div className="input-wrapper">
                              <InputLabel>Email</InputLabel>
                              <InputItem
                                type="email"
                                name="email"
                                disabled={disabled}
                                onKeyUp={(e) =>
                                  setInformation({
                                    ...information,
                                    email: e.target.value,
                                  })
                                }
                              />
                              <ErrorFieldWrapper>
                                <ErrorMessage name="email" />
                              </ErrorFieldWrapper>
                            </div>
                          </Row>
                          <Row item xs={12} md={6}>
                            <div className="input-wrapper">
                              <InputLabel>Numéro de téléphone</InputLabel>
                              <InputItem
                                type="tel"
                                name="tel"
                                disabled={disabled}
                                onKeyUp={(e) =>
                                  setInformation({
                                    ...information,
                                    tel: e.target.value,
                                  })
                                }
                              />
                              <ErrorFieldWrapper>
                                <ErrorMessage name="tel" />
                              </ErrorFieldWrapper>
                            </div>
                          </Row>
                          <Row item xs={12} md={6}>
                            <div className="input-wrapper">
                              <InputLabel>Date de naissance</InputLabel>
                              <InputItem
                                type="date"
                                placeholder="JJ/MM/AAAA"
                                name="naissance"
                                disabled={disabled}
                                onKeyUp={(e) =>
                                  setInformation({
                                    ...information,
                                    naissance: e.target.value,
                                  })
                                }
                              />
                              <ErrorFieldWrapper>
                                <ErrorMessage name="naissance" />
                              </ErrorFieldWrapper>
                            </div>
                          </Row>
                          <Row item xs={12} md={6} paddingTop>
                            <div className="input-wrapper">
                              <InputLabel>Sexe</InputLabel>
                              <GenderWrapper>
                                <GenderWrapper>
                                  <RadioItem
                                    type="radio"
                                    name="sexe"
                                    defaultChecked
                                    disabled={disabled}
                                    onChange={(e) =>
                                      setInformation({
                                        ...information,
                                        sexe: e.target.value,
                                      })
                                    }
                                  />
                                  <InputLabel>Homme</InputLabel>
                                </GenderWrapper>
                                <GenderWrapper>
                                  <RadioItem
                                    type="radio"
                                    name="sexe"
                                    value="female"
                                    disabled={disabled}
                                  />
                                  <InputLabel>Femme</InputLabel>
                                </GenderWrapper>
                              </GenderWrapper>
                            </div>
                          </Row>
                          <Row item xs={12} md={6}>
                            <div className="input-wrapper">
                              <InputLabel>Nouveau Mot de pass</InputLabel>
                              {revealPassword ? (
                                <AiFillEye
                                  className="eye-icon"
                                  onClick={() => setRevealPassword(!revealPassword)}
                                />
                              ) : (
                                <AiFillEyeInvisible
                                  className="eye-icon"
                                  onClick={() => setRevealPassword(!revealPassword)}
                                />
                              )}
                              <InputItem
                                type={revealPassword ? "text" : "password"}
                                name="motdepass1"
                                disabled={disabled}
                                onKeyUp={(e) =>
                                  setInformation({
                                    ...information,
                                    motdepass1: e.target.value,
                                  })}
                              />
                              <ErrorFieldWrapper>
                                <ErrorMessage name="motdepass1" />
                              </ErrorFieldWrapper>
                            </div>
                          </Row>
                          <Row item xs={12} md={6}>
                            <div className="input-wrapper">
                              <InputLabel>Comfirmer le Mot de pass</InputLabel>
                              {revealPassword ? (
                                <AiFillEye
                                  className="eye-icon"
                                  onClick={() => setRevealPassword2(!revealPassword2)}
                                />
                              ) : (
                                <AiFillEyeInvisible
                                  className="eye-icon"
                                  onClick={() => setRevealPassword2(!revealPassword2)}
                                />
                              )}

                              <InputItem
                                type={revealPassword2 ? "text" : "password"}
                                name="motdepass2"
                                disabled={disabled}
                              />
                              <ErrorFieldWrapper>
                                <ErrorMessage name="motdepass2" />
                              </ErrorFieldWrapper>
                            </div>
                          </Row>
                          <Row item xs={12} alignCenter>
                            <ButtonWrapper>
                              <EditBtn onClick={handleInputState} type="button">
                                Éditer vos données
                              </EditBtn>
                              <SaveBtn disabled={disabled}>Enregistrer</SaveBtn>
                            </ButtonWrapper>
                          </Row>
                        </Row>
                      </Form>
                    </CardContainer>
                  </Row>
                </Row>
              </ProfileWrapper>
            </>
          )
        }
      }
    </Formik >
  );
};

export default Profile;
