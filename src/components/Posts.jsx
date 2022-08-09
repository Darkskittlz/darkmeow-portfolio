import '../Styles/App.css';
import styled from 'styled-components';
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ParticleComponent from '../ParticleBackground3';
import { 
    SimpleGrid,
    LinkOverlay, 
    Container, 
    Text, 
    LinkBox,
    Image,
    Heading
} from '@chakra-ui/react'
import Footer from './footer';
import { SectionDivider } from '../Styles/GlobalStyles';



const FooterContainer = styled.div`
    display: flex;
    width: 100%;
`

const GridContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 10px;
`

const Gap = styled.div`
    padding: 5px;
`

const Posts = props => {
    return (
        <Layout>
            <ParticleComponent />
                <GridContainer>
                        <Heading as="h2" size="lg" fontSize="80px" mb={14}>
                            Blog 
                            <SectionDivider />
                        </Heading>
                    <Container style={{display:"flex", flexWrap: "wrap"}} maxWidth="sm">
                        <Section delay={0.2}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    display="inline-block"
                                    width="335px"
                                    height="500px"
                                    fit="cover"
                                    src="/images/proPic2.jpg"
                                    alt="Profile IMG"
                                    style={{borderRadius: "10px"}}							   
                                />
                                <LinkOverlay href={`posts/blog2`}>
                                    <Text style={{color: "var(--text-color)", textAlign: "center"}} fontSize={20}>GraphQL </Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>

                        <Gap>

                        </Gap>

                        <Section delay={0.3}>
                            <LinkBox cursor='pointer'>
                                <Image
                                    fit="cover"
                                    src="/images/postThumb.jpg"
                                    alt="Backgrounds Project"	
                                    height="505px"
                                    width="440px"
                                    style={{borderRadius: "10px"}}
                                />
                                <LinkOverlay href={`posts/blog1`}>
                                    <Text style={{color: "var(--text-color)", textAlign: "center"}} fontSize={20}>From E-Boy To Engineer</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </Section>
                    </Container>
                </GridContainer>

                <FooterContainer>
                    <Footer />
                </FooterContainer>


        </Layout>
    );
};

export default Posts;
