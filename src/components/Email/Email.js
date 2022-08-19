import { Link } from '@chakra-ui/react';
import ParticlesBg from 'particles-bg';
import React, { useState, useRef } from 'react';
import styled from "styled-components";
import ParticleComponent from '../../ParticleBackground2';
import Layout from '../layouts/article';
import Section from '../section';
import Subscribe from './Subscribe';
// import emailjs from '@emailjs/browser';
// import{ init } from '@emailjs/browser';
// init("user_5ir65fREMKq7eQSSWuTYq");


const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  backdrop-filter: blur(10px);
  flex-direction: column;

  @media (max-width: 860px){
    width: 800px;
  }
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    font-size: 60px;
    color: var(--text-color);
  }

  img {
    border-radius: 50%;  
    object-fit: cover;
    margin-right: 20px;
    box-shadow: inset 0 0 30px #2595b1, 0 0 15px 7px #123ece;
    border: 1px solid #fff;
    cursor: pointer;

    @media (max-width: 860px){
            height: 55%;
            padding: 2px;
        }
  }

  @media (max-width: 900px){
      justify-content: space-around;
    }
` 


export default function Email() {
  
    return (
        <Layout>
            <Section nopadding id="contact">
                <SectionContainer>
                <FormContainer>
                    <TitleContainer>
                    <h1>Contact</h1>
                    <Link href="/">
                        <img src="https://media.discordapp.net/attachments/784663350331310090/784663370724933672/Darkskittles-1.jpg?width=130&height=140" />
                    </Link>
                    </TitleContainer>
                    <Subscribe />
                </FormContainer>
                </SectionContainer>
            </Section>
        </Layout>
    );
  };

