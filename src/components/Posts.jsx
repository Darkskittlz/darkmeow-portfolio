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
    Image
} from '@chakra-ui/react'
import Footer from './footer';


const GridContainer = styled.div`
    height: 100vw;
    width: 50%;
    margin-left: 25%;
`

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
`


const Posts = props => {
    return (
        <Layout>
            <ParticleComponent />
			<Container maxW='2xl'>
              <GridContainer>
                <SimpleGrid 
                    columns={[1, 1, 2]} 
                    gap={10}
                    style={{
                        marginTop: "10px", 
                        justifyItems: "center",
                        backdropFilter: "blur(25px)",
                        padding: "20px",
                        borderRadius: "10px"
                    }} 
                >
                    
                    <Section delay={0.2}>
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
                </SimpleGrid>
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </GridContainer>
          </Container>
        </Layout>
    );
};

export default Posts;
