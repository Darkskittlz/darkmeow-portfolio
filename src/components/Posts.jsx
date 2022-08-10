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



const FooterContainer = styled.div`
display: flex;
width: 100%; 
justify-content: center;

@media (max-width: 960px) {
    margin-left: 160px;
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
                    <Flex>
                        <Center w="80%">
                            <Heading as="h2" size="lg" fontSize="80px" mb={24}>
                                Blog 
                                <SectionDivider />
                            </Heading>
                        </Center>
                    </Flex>
                    <Flex>
                        <Center w="100%">
                            <Box>
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
                            </Box>
                        </Center>
                    </Flex>
                    <Gap />
                    <Flex>
                        <Center w="100%">
                            <Box>
                                <Section delay={0.3}>
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
                            </Box>                        
                        </Center>
                    </Flex>
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </GridContainer>
        </>
    );
};

export default Posts;








