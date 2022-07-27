import { 
    SimpleGrid,
    LinkOverlay, 
    Container, 
    Text, 
    LinkBox,
    Image
} from '@chakra-ui/react'
import Section from './section'
import Layout from './layouts/article'
import styled from 'styled-components'
import ParticleComponent from '../ParticleBackground3'
import Footer from './footer'

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    flex-direction: column;
    width: 50%;
    margin-left: 25%;
`

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
`


const Works = props => {
    return (
        <>
        <GridContainer>
          <ParticleComponent />
            <Layout>
                <Container maxW='2xl'>
                    <SimpleGrid 
                        columns={[1, 1, 2]} 
                        gap={10}
                        style={{
                            marginTop: "10px",
                            justifyItems: "center",
                            backdropFilter: "blur(25px)",
                            padding: "20px",
                            borderRadius: "10px",
                            flexWrap: "wrap"
                        }} 
                    >
                        <Section delay={0.2}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/works/bg (1).png"
                                    alt="Backgrounds Project"	
                                    height="205px"
                                    width="440px"
                                />
                                <LinkOverlay href={`works/Backgrounds`}>
                                    <Text 
                                        style={{
                                            color: "var(--text-color)",
                                            textAlign: "center",
                                            textDecoration: "inherit"
                                        }}
                                        fontSize={20}
                                    >Backgrounds</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>

                        <Section delay={0.3}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/works/bandingo.png"
                                    alt="Bandingo Project"	
                                    height="205px"
                                    width="440px"
                                />
                                <LinkOverlay href={`works/Bandingo`}>
                                    <Text 
                                        style={{
                                            color: "var(--text-color)",
                                            textAlign: "center",
                                            textDecoration: "inherit"
                                        }}
                                        fontSize={20}
                                    >Bandingo</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>

                        <Section delay={0.4}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/works/devShop.png"
                                    alt="Collab Project"	
                                    height="205px"
                                    width="440px"
                                />
                                <LinkOverlay href={`works/Collab`}>
                                    <Text 
                                        style={{
                                            color: "var(--text-color)",
                                            textAlign: "center",
                                            textDecoration: "inherit"
                                        }}
                                        fontSize={20}
                                    >Collaboration</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>

                        <Section delay={0.5}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/works/DarkMeowFi.png"
                                    alt="DarkMeowFI Project"	
                                    height="205px"
                                    width="440px"
                                />
                                <LinkOverlay href={`works/DarkMeowFi`}>
                                    <Text 
                                        style={{
                                            color: "var(--text-color)",
                                            textAlign: "center",
                                            textDecoration: "inherit"
                                        }}
                                        fontSize={20}
                                    >DarkMeowFI</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>

                        <Section delay={0.6}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/works/tanjiroScreenshot.png"
                                    alt="E-Commerce Project"	
                                    height="205px"
                                    width="440px"
                                />
                                <LinkOverlay href={`works/ECommerce`}>
                                    <Text 
                                        style={{
                                            color: "var(--text-color)",
                                            textAlign: "center",
                                            textDecoration: "inherit"
                                        }}
                                        fontSize={20}
                                    >E-Commerce Project</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>

                        <Section delay={0.7}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/works/apmusic.png"
                                    alt="Aidan Paul Project"	
                                    height="205px"
                                    width="440px"
                                />
                                <LinkOverlay href={`works/APMusic`}>
                                    <Text 
                                        style={{
                                            color: "var(--text-color)",
                                            textAlign: "center",
                                            textDecoration: "inherit"
                                        }}
                                        fontSize={20}
                                    >Aidan Paul Project</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>

                        <Section delay={0.8}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/works/ThreeJSPortfolio.png"
                                    alt="ThreeJS Portfolio Project"	
                                    height="205px"
                                    width="440px"
                                />
                                <LinkOverlay href={`works/ThreejsPortfolio`}>
                                    <Text 
                                        style={{
                                            color: "var(--text-color)",
                                            textAlign: "center",
                                            textDecoration: "inherit"
                                        }}
                                        fontSize={20}
                                    >ThreeJS Portfolio</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>

                        <Section delay={0.9}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/works/4.png"
                                    alt="Matias Sanes Project"	
                                    height="205px"
                                    width="440px"
                                />
                                <LinkOverlay href={`works/MatiasSanes`}>
                                    <Text 
                                        style={{
                                            color: "var(--text-color)",
                                            textAlign: "center",
                                            textDecoration: "inherit"
                                            ,}}
                                        fontSize={20}
                                    >Matias Sanes Project</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>
                    </SimpleGrid>
                        <FooterContainer>
                            <Footer />
                        </FooterContainer>
                </Container>
            </Layout> 
          </GridContainer>
        </>
    )
}

export default Works;