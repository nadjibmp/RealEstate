import React, { useState, useEffect } from 'react'
import { Row } from '../../heroSection/Hero.styled'
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineAttachFile, MdSend } from "react-icons/md";
import io from 'socket.io-client';
import {
  Wrapper,
  SideMsgBar,
  ProfilePic,
  MsgItem,
  MsgInfoWrapper,
  MsgSender,
  MsgBrief,
  MsgRow,
  MessageContentWrapper,
  MessagesBox,
  FormWrapper,
  Status
} from './MsgDashboard.styled';

const socket = io.connect("http://localhost:3006");
const MsgDashBoard = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentReceiver, setCurrentReceiver] = useState("");
  const [allMessages,  setAllMessage] = useState([]);
  const [room, setRoom] = useState('000');

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room,
        author: "nadjib",
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      };

      socket.emit("send_message", messageData);
    }
  }

  useEffect(() => {
    socket.emit("join_room", room);
    socket.on("receive_message", (data) => {
      console.log('');
    })
  }, [socket])

  return (
    <>
      <Wrapper>
        <MsgRow container>
          <MsgRow item xs={3}>
            <SideMsgBar >
              <div className='header'>
                <span>Discussion</span>
                <AiOutlineSearch color={"#323B4D"} size={24} />
              </div>
              <MsgItem >
                <ProfilePic>
                  <img src="/profile.jpg" alt="profile" />
                </ProfilePic>
                <MsgInfoWrapper>
                  <div>
                    <MsgSender>
                      Annane Ahmed Nadjib
                    </MsgSender>
                    <span className='time'>
                      10-02
                    </span>
                  </div>
                  <MsgBrief>
                    Hello i'am interested in your house situated in annaba
                  </MsgBrief>
                </MsgInfoWrapper>
              </MsgItem>

              <MsgItem>
                <ProfilePic><img src="/profile.jpg" alt="profile" /></ProfilePic>
                <MsgInfoWrapper>
                  <div>
                    <MsgSender>
                      Annane Ahmed Nadjib
                    </MsgSender>
                    <span className='time'>
                      10-02
                    </span>
                  </div>
                  <MsgBrief>
                    Hello i'am interested in your house situated in annaba
                  </MsgBrief>
                </MsgInfoWrapper>
              </MsgItem>

              <MsgItem>
                <ProfilePic>
                  <img src="/profile.jpg" alt="profile" />
                </ProfilePic>
                <MsgInfoWrapper>
                  <div>
                    <MsgSender>
                      Annane Ahmed Nadjib
                    </MsgSender>
                    <span className='time'>
                      10-02
                    </span>
                  </div>
                  <MsgBrief>
                    Hello i'am interested in your house situated in annaba
                  </MsgBrief>
                </MsgInfoWrapper>
              </MsgItem>
            </SideMsgBar>
          </MsgRow>
          <MsgRow item xs={9}>
            <MessageContentWrapper>
              <div class="receiver-username">
                <h3>Oussama Debch  </h3>
                <Status />
              </div>
              <span>
              </span>
              <MessagesBox>

                <div className='Message-Wrapper Wrapper-sender'>
                  <ProfilePic >
                    <img src="/profile.jpg" alt="profile" />
                  </ProfilePic>
                  <div className='msg-infos'>
                    <div className='username-date'>
                      <span>Ahmed nadjib</span>
                      <span className='time'>10:30 AM</span>
                    </div>
                    <p className='sender message'>I want to get some details about your home</p>
                  </div>
                </div>

                <div className='Message-Wrapper '>
                  <ProfilePic >
                    <img src="/profile.jpg" alt="profile" />
                  </ProfilePic>
                  <div className='msg-infos'>
                    <div className='username-date'>
                      <span>Ahmed nadjib</span>
                      <span className='time'>10:30 AM</span>
                    </div>
                    <p className='receiver message'>I want to get some details about your home</p>
                  </div>
                </div>

                <div className='Message-Wrapper'>
                  <ProfilePic >
                    <img src="/profile.jpg" alt="profile" />
                  </ProfilePic>
                  <div className='msg-infos'>
                    <div className='username-date'>
                      <span>Ahmed nadjib</span>
                      <span className='time'>10:30 AM</span>
                    </div>
                    <p className='receiver message'>I want to get some details about your home</p>
                  </div>
                </div>
                <div className='Message-Wrapper Wrapper-sender'>
                  <ProfilePic >
                    <img src="/profile.jpg" alt="profile" />
                  </ProfilePic>
                  <div className='msg-infos'>
                    <div className='username-date'>
                      <span>Ahmed nadjib</span>
                      <span className='time'>10:30 AM</span>
                    </div>
                    <p className='sender message'>I want to get some details about your home</p>
                  </div>
                </div>
              </MessagesBox>
              <FormWrapper>
                <MsgRow containerend>
                  <MsgRow item xs={1} >
                    <MdOutlineAttachFile size={24} color={"#9ba6b2"} />
                  </MsgRow>
                  <MsgRow item xs={10} >
                    <input type={"text"}
                      placeholder="Ecrire un Message..."
                      onChange={event => setCurrentMessage(event.target.value)} />
                  </MsgRow>
                  <MsgRow item xs={1} >
                    <MdSend onClick={sendMessage} size={24} color={"#4E38A3"} />
                  </MsgRow>
                </MsgRow>
              </FormWrapper>
            </MessageContentWrapper>
          </MsgRow>
        </MsgRow>
      </Wrapper>
    </>
  )
}

export default MsgDashBoard