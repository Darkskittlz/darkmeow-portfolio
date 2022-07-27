import { Container, Badge, Link, List, ListItem, SimpleGrid, Image } from '@chakra-ui/react'
import Layout from '../layouts/article'
import styled, { keyframes } from 'styled-components'
import Footer from '../footer'
import ParticleComponent from '../../ParticleBackground3'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "../../Styles/App.css"


const GridContainer = styled.div`
    width: 50%;
    height: 45vw;
    margin-left: 25%;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    
    h1 {
        font-size: 30px;
        font-weight: 700;
        color: #A501EB;
    }
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    h1 {
        font-size: 23px;
        text-indent: 30px;
        text-align: left;
    }
`

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
`

const Animation = keyframes`
  0% { box-shadow: 0 0 10px #09EE9A; } 
  30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
  50% { box-shadow: 0 0 20px #09DEEE;  } 
  70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
  100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`

const Badge2 = styled.div`
  backdrop-filter: blur(40px);
  padding: 8px;
  width: 15%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--text-color);
  background: rgb(239,113,253);
  background: linear-gradient(34deg, rgba(239,113,253,0.453486050124717) 31%, rgba(92,114,255,0.951273660744186) 82%);
  //   box-shadow: 0 0 20px rgba(80, 78, 78, 0.9);
`

const ImageContainer = styled.div`
    animation-name: ${Animation},
    animation-duration: 4s;
    animation-iteration-count: infinite;
`

const MatiasSanes = props => {
    return (
        <>
          <ParticleComponent />
            <Layout>
                <Container maxW='2x1'>
                    <GridContainer>
                        <SimpleGrid 
                            columns={[1, 1, 1]} 
                            gap={10}
                            style={{
                                marginTop: "10px", 
                                height: "56vh",
                                justifyItems: "center",
                                backdropFilter: "blur(25px)",
                                padding: "20px",
                                borderRadius: "10px"
                            }} 
                        >
                            <TitleContainer>
                            <ImageContainer>
                                <Image
                                    fit="cover"
                                    mr={20}
                                    src="/images/logos/react.svg"
                                    style={{  
                                        boxShadow: "0 0 20px rgba(80, 78, 78, 0.9)", 
                                        borderRadius: "50px", 
                                        padding: "10px",
                                    }}
                                />
                            </ImageContainer>
                                <h1><Badge colorScheme="blue">Matias Sanes Project</Badge></h1> 
                            </TitleContainer>
                            <BodyContainer>
                                <h1>
                                    Ad cillum minim anim cillum in in proident ex ad. Voluptate proident duis incididunt officia dolore adipisicing. Id dolor laboris aute veniam ex velit fugiat nulla. Id ea sit deserunt incididunt proident in aliquip labore labore commodo et do mollit. Eu dolore laboris excepteur irure sunt nisi ullamco amet elit esse minim reprehenderit cupidatat adipisicing. Quis reprehenderit laborum incididunt consequat veniam consequat ipsum.
                                </h1>
                                <List ml={4} my={4} style={{display: "flex", flexDirection: "column"}}>
                                    <ListItem>
                                        <Badge2>Platform</Badge2>
                                        <span>HTML, CSS, JS, Mailchimp </span>
                                    </ListItem>
                                    <ListItem>
                                        <Badge2>Website</Badge2>
                                        <Link 
                                            href="https://matias-sanes.netlify.app/"
                                            style={{
                                                color: "#b900ff"
                                            }}
                                        >
                                        https://matias-sanes.netlify.app/
                                            <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Badge2>Source</Badge2>
                                        <Link 
                                            href="https://github.com/Darkskittlz/matiasSite"
                                            style={{
                                                color: "#b900ff"
                                            }}
                                        >
                                        https://github.com/Darkskittlz/matiasSite
                                            <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                </List>
                            </BodyContainer>
                        </SimpleGrid>
                        <FooterContainer>
                            <Footer />
                        </FooterContainer>
                    </GridContainer>
                </Container>
            </Layout>
        </>
    )
}

export default MatiasSanes;