import styled from 'styled-components'
import "../Styles/App.css"
import React, { useState, useRef } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'



const GridContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  padding: 20px;
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
`


const Header = styled.h1`
  font-size: 29px;
  margin-bottom: 20px;
  text-align: center;
  color: var(--text-color);
`

const Header2 = styled.h1`
  font-size: 19px;
  margin-bottom: 20px;
  text-align: center;
  color: var(--text-color);
`

const CloseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const IMGContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-bottom: 10px;

  img {
    border-radius: 10px;
  }
`

export default function ChakraModal() {
  const form = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [email, setEmail] = useState(null)
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  // const sendData2 = async () => {
  //   const formattedName = encodeURIComponent(name)
  //   const formattedEmail = encodeURIComponent(email)


  //   const URL = `name=${formattedName}&genre=${formattedGenre}&email=${formattedEmail}&src=${formattedSrc}`;
  //   const results = await axios.get"/.vercel/functions/email/?" + URL);
  //   console.log(results);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // sendData2();
  }


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
              w="40%"
              h="65%"
              ml="30%"
              mt="8%"
              p="10px"
              pl="120px"
              pr="120px"
              css={{
                display: "flex",
                justifyContent: "center",  
                alignContent: "center",
                backdropFilter: "blur(50px)",
              }}
            >
              <CloseContainer>
                <ModalCloseButton />
              </CloseContainer>
              <form ref={form} id="myForm" onSubmit={(event) => handleSubmit(event)}>
              <Header>Contact Me</Header>
                <ModalBody 
                  css={{display: "Flex", justifyContent: "center"}}
                  pb={6}
                  >
                  <FormControl>
                  <FormLabel 
                    css={{
                      fontSize: "40px",
                      textAlign: "center"
                    }}
                    >Email address</FormLabel>
                    <Input 
                      value={input}
                      type='email'
                      onChange={(event) => {
                        handleInputChange()
                        // setEmail(event.target.value)
                      }}
                      css={{
                        fontSize: "30px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      />
                    {!isError ? (
                      <FormHelperText css={{fontSize: "18px"}}>
                        Enter the email you'd like to receive our newsletter on
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                      )}
                  </FormControl>
                </ModalBody>
              </form>
              <ModalFooter
                css={{display: "flex", justifyContent: "center", }}
                >
                <Button 
                  className="modalButton"
                  id="btn"
                  value="send"
                  type="submit"
                  > Send </Button>
                <Button className="modalButton" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
              <IMGContainer>
                <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="in development" />
              </IMGContainer>
              <Header2>Still In Development...</Header2>
            </ModalContent>
          </ModalOverlay>
          </ModalContainer>
        </Modal>
      </Grid2Container>
    </>
  )
}