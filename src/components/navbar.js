import {
    Container, 
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
    useColorModeValue    
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './logo'
import DarkMode from "./DarkMode.js"



const Navbar = props => {
    const { path } = props
    return (
        <Container maxW="2xl">
            <Box
                position="relative"
                as="nav"
                w="80%"
                ml="15%"
                bg={useColorModeValue('#ffffff40', '#20202380')}
                css={{ backdropFilter: 'blur(10px)', borderRadius: "10px", marginBottom: "10px"}}
                wrap="wrap"
                zIndex={2}
                {...props}
            >
                <Container  
                    display="flex" 
                    p={2} 
                    ml={2}
                    alignItems="center"
                    w="100%"
                    maxW="container.md" 
                    wrap="wrap" 
                    justify="space-between"
                >
                
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg">
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{base: 'column', md: 'column'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{ base: 'full', md: 'auto'}}
                    flexDirection="row"
                    flexGrow={1}
                    spacing="25px"
                    mt={{ base: 4, nmd: 0 }}
                >
                    <Link 
                        href="https://darkdev-portfolio.netlify.app/works"
                        path={path}
                        style={{
                            marginRight: "10px",
                            textDecoration: "none",
                            color: "black"
                        }}>
                        Work 
                    </Link>
                    <Link 
                        href="https://darkdev-portfolio.netlify.app/posts"
                        path={path}
                        style={{
                            marginRight: "10px",
                            textDecoration: "none",
                            color: "black"
                        }}>
                        Posts 
                    </Link>
                    <Link 
                        target="_blank"
                        href="https://github.com/darkskittlz"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ 
                            gap: 4,
                            textDecoration: "none",
                            color: "black"
                        }}
                        pl={2}
                    >
                        <IoLogoGithub />
                        Source
                    </Link>
                </Stack> 
                <Box 
                    flex={2}
                    align="center"
                    display="flex"
                    flexDirection="row-reverse"
                >
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
                                marginRight="10px"
                            />
                            <MenuList style={{color: "var(--background-color)"}}>
                                <Link color="var(--text-color)" href='/'>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </Link>
                                <Link color="var(--text-color)" href='https://darkdev-portfolio.netlify.app/works'>
                                    <MenuItem as={Link}>Work</MenuItem>
                                </Link>
                                <Link color="var(--text-color)" href='https://darkdev-portfolio.netlify.app/posts'>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
          </Box>
        </Container>
    )
}

export default Navbar;