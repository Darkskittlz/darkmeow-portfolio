import React, {useState, useRef, useEffect } from 'react';
import "antd/dist/antd.min.css";
import styled from "styled-components";
import axios from 'axios';
import { Select, Form } from 'antd';
import Clock from 'react-live-clock';
import date from 'date-and-time';
import { emotions } from '../../constants/constants';
import Layout from '../layouts/article';

const EmailContainer = styled.div`
  display: flex; 
  justify-content: center;
  width: 100%;
`

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;


`

const GridContainer2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  span {
    flex-direction: column;    
  }
  
`

const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`

const SendContainer = styled.div`
  width: 40%;
  margin-right: 6px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  button {
    cursor: pointer;
    margin-top: 10px;
    height: 40px;
    // color: var(--text-color);
    width: 150px;
    // background-color: var(--background-color);
    border-radius: 10px;
    border: none;
  }

  input {
    cursor: pointer;
    // color: var(--text-color);
  }

  @media screen and (max-width:900px){
    margin-top: 20px;
  }
`

const ContactForm = styled.div`
//   background: var(--background-color);
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.9);
  margin-right: 5px;
  margin-left: 5px;
  padding: 5px;
  display: flex;
  width: 100%;
  border-radius: 12px;


  h2 {
    //   color: var(--text-color);
      text-align: center;
      font-size: 80px;
      
      @media (max-width: 900px){
      margin-left: 26px;
    }
  }

  h3 {
    // color: var(--text-color);
    margin-left: 7px;

    @media (max-width: 900px){
      margin-left: 26px;
    }
  }


  form {
    display: flex;
    flex-direction: column;
    width: 511px;

    @media (max-width: 900px){
      width: 100%;
    }
  }
  
  input {
    display: flex;
    width: 100%;
    margin-left: 0px;
    justify-content: center;
    margin-bottom: 5px;
    border-radius: 5px;
    // background: var(--background-color);
    border-radius: 10px;
    // color: var(--text-color);
    border: 0px solid black;
    height: 40px;

    @media (max-width: 900px){
      margin-left: 26px;
      width: 83%;
    }
  }
  

  span {
    // color: var(--text-color);
    display: flex;
    justify-content: center;
  }
  
  textarea {
    height: 90px;
    margin-bottom: 5px;
    
    #message {
      height: 200px;
    }
  }

  #send {
    width: 200px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
  }

  @media (max-width: 900px){
    width: 80%;
    display: flex;
    margin-left: 25px;

    h2 {
      font-size: 70px;
    }
  }
`

const Container2 = styled.div`
  width: 50%;
  margin-left: 5px;
  display: flex;
  justify-content: center;

  h1 {
    //   color: var(--text-color);
  }

  @media screen and (max-width:900px){
    margin-top: 20px;
  }
`

const Container3 = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const DropdownContainer = styled.div`
  width: 100%;

  span.ant-select-selection-placeholder {
    // color: lightgrey;
  }

  span.ant-select-selection-item {
    // color: var(--text-color);
  }
`

const TimeContainer = styled.div`
    font-size: 22px;
    margin-bottom: -25px;
    font-weight: 400;
    display: flex;
    grid-gap: 10px;
    width: 100%;
    align-items: baseline;
    justify-content: center;

    h1 {
        font-size: 25px;
        // color: var(--text-color);
        font-weight: 600;
    }
`

const DateContainer = styled.div`
    font-size: 20px;
    font-weight: 400;
    align-items: baseline;
    display: flex;
    grid-gap: 10px;
    width: 100%;
    justify-content: center;
    margin-bottom: -25px;

    h1 {
        font-size: 23px;
        font-weight: 600;
        // color: var(--text-color);
    }
`





export default function Subscribe() {
  const [message, setMessage] = useState(null)
  const form = useRef();
  const [mood, setMood] = useState('text')
  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)
  
  const fetchData = async () => {
    const formattedName = encodeURIComponent(name)
    const formattedMood = encodeURIComponent(mood)
    const formattedEmail = encodeURIComponent(email)
    const formattedMessage = encodeURIComponent(message)

    
    const URL = `name=${formattedName}&mood=${formattedMood}&email=${formattedEmail}&message=${formattedMessage}`;
    const results = await axios.get("/api/email/" + URL);
    console.log(results)
    console.log(URL);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  }
  
  console.log(`mood: `, mood);
  console.log(`Email: `, email);
  console.log(`Name: `, name);
  console.log(`Message: `, message);


  const now = new Date();
  date.format(now, 'MMM DD YYYY');

  return (
      <ContactForm>
          <Layout>
          <EmailContainer>
            <form ref={form} onSubmit={(event) => handleSubmit(event)}>
              <Container3>
                <TimeContainer>
                    <h1>Time: </h1><Clock format={'h:mm a'} ticking={true} id="time"/>
                </TimeContainer>
                <DateContainer>
                    <h1>Date: </h1> {date.format(now, 'ddd, MMM DD YYYY')}
                </DateContainer>
              </Container3>
              <GridContainer>            
                <Container2>
                  <DropdownContainer>
                      <Select 
                        allowClear
                        showSearch
                        placeholder='Select Mood' 
                        style={{width:'100%'}}
                        onSelect={(value,event) => setMood(value)}
                      >
                        {emotions.map(({ id, title }) => {
                          return <Select.Option 
                              key={id} 
                              id="mood"
                              value={title}
                              name="mood"
                            >{title}
                          </Select.Option>
                        })}
                      </Select>
                    </DropdownContainer> 
                </Container2>
              </GridContainer>
              <h3>Name</h3>
                <input type="text" id="name" placeholder="Jack Sparrow" name="user_name" onChange={(event) => setName(event.target.value)} />
              <h3>Email</h3>
                <input type="email" id="email" placeholder="Parley@Gmail.com" name="user_email" onChange={(event) => setEmail(event.target.value)}/>
              <h3>Message</h3>
                <input type="message" id="message" placeholder="How you feelin today?" name="user_message" onChange={(event) => setMessage(event.target.value)}/>
              <GridContainer2>
                <ButtonContainer>
                  <SendContainer><button id="btn" type="submit" value="Send">Send</button></SendContainer>
                  <SendContainer><button id="btn2"><input type="reset"></input></button></SendContainer>
                </ButtonContainer>
                {message && <span> Thanks, Press Send </span>}
                {message && <span> and Check Your Inbox! </span>}
                {message && <span>🌴 📧 🔜 📬 🌴</span>}
              </GridContainer2>
          </form>
        </EmailContainer>
        </Layout>
    </ContactForm> 
    );
  };

