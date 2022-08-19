import '../Styles/App.css';
import styled from 'styled-components';
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ParticleComponent from '../ParticleBackground3';
import { 
    LinkOverlay, 
    Container, 
    Text, 
    LinkBox,
    Image,
    Heading,
    Box,
    Flex,
    Center
} from '@chakra-ui/react'
import Footer from './footer';
import { SectionDivider } from '../Styles/GlobalStyles';
import Intro from './Intro';



const FooterContainer = styled.div`
display: flex;
width: 100%; 
justify-content: center;

@media (max-width: 960px) {
    margin-left: 15%;
    padding-bottom: 120px;
}
`

const GridContainer = styled.div`
    height: 100%;
    width: 100%;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
    }
`

const Grid2Container = styled.div`
    width: 100%;

    @media screen and (max-width: 960px) {
        width: 5%;
        margin-left: 45%;
    }
`

const BlogImage = styled.img`
    width: 440px;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 290px;
        margin-left: 5%;
    }
`

const Gap = styled.div`
    padding: 5px;
`



const Posts = props => {
    return (
        <>
            <GridContainer>
                <ParticleComponent />
                    <Intro />
                    <Flex>
                        <Center w="80%">
                            <Heading as="h2" size="lg" fontSize="80px" mb={24}>
                                Blog 
                                <SectionDivider />
                            </Heading>
                        </Center>
                    </Flex>
                    <Grid2Container>
                        <Flex>
                            <Center w="100%">
                                <Box>
                                    <Section delay={0.2}>
                                        <LinkBox cursor='pointer'>
                                            <BlogImage src="/images/postThumb.jpg" alt="Backgrounds Project" />
                                            <LinkOverlay href={`posts/blog1`}>
                                                <Text style={{color: "var(--text-color)", textAlign: "center"}} fontSize={20}>From E-Boy To Engineer</Text>
                                            </LinkOverlay>
                                        </LinkBox>
                                    </Section>
                                </Box>
                            </Center>
                        </Flex>
                        <Gap />
                        <Flex>
                            <Center w="100%">
                                <Box>
                                    <Section delay={0.3}>
                                        <LinkBox cursor='pointer'>
                                            <BlogImage src="/images/proPic2.jpg" alt="Profile IMG" />
                                            <LinkOverlay href={`posts/blog2`}>
                                                <Text style={{color: "var(--text-color)", textAlign: "center"}} fontSize={20}>GraphQL </Text>
                                            </LinkOverlay>
                                        </LinkBox>                                   
                                    </Section>
                                </Box>                        
                            </Center>
                        </Flex>
                    </Grid2Container>
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </GridContainer>
        </>
    );
};

export default Posts;








