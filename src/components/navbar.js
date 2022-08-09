import React, { useState } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import DarkMode from "./DarkMode.js"
import '../Styles/App.css';
import { Container, Container2, Div1, Div2, Div3, NavLink, SocialIcons, Span } from '../Styles/HeaderStyles';
import { GlobalStyle } from '../Styles/GlobalStyles';
import styled from 'styled-components';
import {
    Box,
    Stack,
    Heading, 
    Flex,
    Menu, 
    MenuItem, 
    MenuList,
    MenuButton,
    IconButton,
    Link,
    useColorModeValue,    
    Image
} from '@chakra-ui/react'

import ResumeIcon from '../assets/images/document.png'
import GithubIcon from '../assets/images/github.svg'
import Resume from "../assets/resume/resume2.pdf"
import {Modal} from "./Modal";


const IconContainer = styled.div`
background-size: 30px 30px;
// margin-right: 10px;
filter: grayscale(100%);
border: none;
border-radius: 50%;
transition: background-color 0.3s ease-in-out, filter 0.3s ease-in-out;

    img {
        height: 40px;
        width: 35px;
    }
`

const GridContainer = styled.div`
    display: flex;
    align-items: center;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`


const Grid1 = styled.div`
    display: flex;
`

const Grid2 = styled.div`
    display: flex;
`


const Navbar = props => {
    const [showModal, setShowModal] = useState(false);
    const { path } = props

    const openModal = () => {
        setShowModal((prev) => !prev);
      };

    return (
        <Container style={{width: "100%", justifyItems: "center"}}>
            <GridContainer>
                <Grid1>
                    <Container2>
                        <Box
                            bg="none"
                            position="relative"
                            as="nav"
                            w="50%"
                            h="80px"
                            wrap="wrap"
                            zIndex={2}
                            {...props}
                        >
                            <Div1>
                                <Link href="/">
                                    <Heading as="h1" fontSize={"59px"} size="lg">
                                        <Logo />
                                    </Heading>
                                </Link>
                            </Div1>
                        </Box>
                    </Container2>
                </Grid1>

                <Grid2>
                    <Div3>
                        <SocialIcons href="https://github.com/Darkskittlz" target='_blank'>
                            <IconContainer>
                                <img src={GithubIcon} />
                            </IconContainer>
                        </SocialIcons>

                        <SocialIcons>
                            <IconContainer>
                                <img src={ResumeIcon}/>
                                {/* <Modal showModal={showModal} setShowModal={setShowModal} />
                                <GlobalStyle /> */}
                            </IconContainer>
                        </SocialIcons>
                        <DarkMode />
                        <Box>
                            <Menu>
                                <MenuButton 
                                    as={IconButton} 
                                    icon={<HamburgerIcon />} 
                                    height="42px"
                                    width="42px"
                                    variant="outline" 
                                    aria-label="Options"
                                    cursor="pointer"
                                />
                                <MenuList style={{color: "var(--background-color)"}}>
                                    <Link color="var(--text-color)" href='/'>
                                        <MenuItem as={Link}>Home</MenuItem>
                                    </Link>
                                    <Link color="var(--text-color)" href='/works'>
                                        <MenuItem as={Link}>Work</MenuItem>
                                    </Link>
                                    <Link color="var(--text-color)" href='/posts'>
                                        <MenuItem as={Link}>Posts</MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Div3>
                </Grid2>
            </GridContainer>
        </Container>
    )
}

export default Navbar;