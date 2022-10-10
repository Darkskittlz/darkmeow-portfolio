import styled from 'styled-components'
import "../Styles/App.css"
import React, { useState, useRef } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select
} from '@chakra-ui/react'
import axios from 'axios'
import date from 'date-and-time';
import Clock from 'react-live-clock';
import { emotions } from '../constants/constants'
import Totoro from './threeJS/Totoro'




const GridContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  padding: 10px;
  align-items: center;
`

const Grid2Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;



`

const ModalContainer = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 90%;
  }  
`


const Header = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
  color: var(--text-color);

  @media screen and (max-width: 960px) {
    font-size: 20px;
    text-align: left;
  }
`

const CloseContainer = styled.div`
  display: flex;
  width: 100%;
  padding-right: 200px;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    padding-right: 10px;
  }
`

const TimeContainer = styled.div`
    font-size: 22px;
    font-weight: 400;
    display: flex;
    grid-gap: 10px;

    h1 {
        font-size: 25px;
        color: white;
        font-weight: 600;
    }
`

const DateContainer = styled.div`
    font-size: 20px;
    font-weight: 400;
    display: flex;
    grid-gap: 10px;
    margin-bottom: -25px;

    h1 {
        font-size: 23px;
        font-weight: 600;
        color: white;
    }
`


const IMGContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;


  img {
    border-radius: 10px;

    @media screen and (max-width: 960px) {
      height: 150px;
    }
  }
`

const DropdownContainer = styled.div`
  margin-bottom: 10px;
`

const InputContainer = styled.div`
  input {
    font-size: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    backdrop-filter: blur(10px);
    background-color: none;
  }
`

const MessageContainer = styled.div`

  input {
    padding-top: 10px;
    padding-bottom: 60px;    
  }
`



export default function ChakraModal() {
  const form = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [message, setMessage] = useState(null)
  const [mood, setMood] = useState(null)
  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)


  const sendData = async () => {
    const formattedName = encodeURIComponent(name)
    const formattedMood = encodeURIComponent(mood)
    const formattedEmail = encodeURIComponent(email)
    const formattedMessage = encodeURIComponent(message)


    const URL = `name=${formattedName}&mood=${formattedMood}&email=${formattedEmail}&message=${formattedMessage}`;
    const results = await axios.post("/.netlify/functions/sendData/?" + URL);
    console.log(results);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData()
  }

  console.log(`mood: `, mood);
  console.log(`Email: `, email);
  console.log(`Name: `, name);
  console.log(`Message: `, message);


  const now = new Date();
  date.format(now, 'MMM DD YYYY');



  return (
    <>
      <GridContainer>
        <Button 
          onClick={onOpen}
          css={{
            borderRadius: "10px",
            border: "none",
            padding:"20px",
            cursor: "pointer",
            boxShadow: "0 0 40px rgb(1,74,250)",
            background: "rgb(1,74,250)",
            background: "linear-gradient(127deg, rgba(1,74,250,1) 0%, rgba(0,233,71,1) 100%)"
          }}
        >Contact Me</Button>
      </GridContainer>

    <Grid2Container>
        <Modal 
          closeOnOverlayClick={true} 
          isOpen={isOpen} 
          onClose={onClose}
          isCentered
          allowPinchZoom="true"
          motionPreset='slideInBottom'
        >
          <ModalContainer>
            <ModalOverlay>
              <ModalContent 
                css={{
                  display: "flex",
                  justifyContent: "center",  
                  marginTop: "-200px",
                  alignContent: "center",
                  backdropFilter: "blur(50px)"
                }}
              >
                <form ref={form} id="myForm" onSubmit={(event) => handleSubmit(event)}>
                  
                <IMGContainer>
					        <img src="https://i.gifer.com/2qQQ.gif" alt="animeGif"/>
				        </IMGContainer>

                  <ModalBody 
                    css={{
                      display: "flex", 
                      justifyContent: "center",
                      gridGap: "50px",
                      marginBottom: "5px"
                    }}>
                      <TimeContainer>
                          <h1>Time: </h1><Clock format={'h:mm a'} ticking={true} id="time"/>
                      </TimeContainer>
                  </ModalBody>
                  <ModalBody 
                    css={{
                      display: "flex", 
                      justifyContent: "center",
                      gridGap: "50px",
                      marginBottom: "30px"
                    }}>
                      <DateContainer>
                          <h1>Date: </h1> {date.format(now, 'ddd, MMM DD YYYY')}
                      </DateContainer>
                  </ModalBody>



                  
                  <ModalBody 
                    css={{
                      display: "Flex", 
                      justifyContent: "center",
                    }}
                    pb={6}
                  >
                    <FormControl>
                    <FormLabel 
                      css={{
                        fontSize: "25px",
                        textAlign: "center",
                        marginBottom: "10px"
                      }}
                      >Contact Form</FormLabel>
                      <InputContainer>
                        <DropdownContainer>
                          <Select
                            placeholder="Select Mood"
                            css={{width: "100%", padding: "10px"}}
                            onChangeCapture={(event) => setMood(event.target.value)}
                          > 
                            {emotions.map(({ id, title }) => {
                              return <option
                                key={id}
                                id="mood"
                                value={title}
                                name="user_mood"
                                type="text"
                              >
                                {title} 
                              </option>
                            })}
                          </Select>
                        </DropdownContainer>
                        <input 
                          id="name"
                          type="name"
                          name="user_name"
                          placeholder="Captain Jack"
                          onChange={(event) => {
                            setName(event.target.value)
                          }}
                        />
                        <input 
                          id="email"
                          type='email'
                          name="user_email"
                          placeholder="Parley@gmail.com"
                          onChange={(event) => {
                            setEmail(event.target.value)
                          }}
                        />
                        <MessageContainer>
                          <input
                            type="message"
                            id="message"
                            placeholder="Message"
                            name="user_message"
                            onChange={(event) => setMessage(event.target.value)}
                          />
                        </MessageContainer>
                      </InputContainer>
                        
                    </FormControl>
                  </ModalBody>
                  <ModalFooter
                    css={{display: "flex", justifyContent: "center", }}
                    >
                    <Button 
                      className="modalButton"
                      id="btn"
                      value="send"
                      type="submit"
                      onClick={() => {
                        alert("Message Sent. Please Check your inbox")
                      }}
                      > Send </Button>
                    <Button className="modalButton" onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </ModalOverlay>
          </ModalContainer>
        </Modal>
      </Grid2Container>
    </>
  )
}