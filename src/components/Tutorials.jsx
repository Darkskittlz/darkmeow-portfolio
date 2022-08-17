import '../Styles/App.css';
import styled from 'styled-components';
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ParticleComponent from '../ParticleBackground2';
import WaveBackground from './WaveBackground';
import Footer from './footer';
import { SectionDivider } from '../Styles/GlobalStyles';
import { 
    LinkOverlay, 
    Container, 
    Text, 
    LinkBox,
    Image,
    Heading,
    Box,
    Flex,
    Center,
    Button
} from '@chakra-ui/react'
<script src="https://apis.google.com/js/api.js"></script>




const FooterContainer = styled.div`
display: flex;
width: 100%; 
justify-content: center;

@media screen and (max-width: 960px) {
    margin-left: 25%;
    width: 80%;
}
`

const GridContainer = styled.div`
    height: 90vh;
    width: 100%;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        flex-direction: column;
    }
`

const HeadingContainer = styled.div`
    display: flex;
    margin-left: 200px;

    h1 {
        font-size: 95px;

        @media screen and (max-width: 960px) {
            font-size: 45px;
        }
    }

    @media screen and (max-width: 960px) {
        margin-left: 0px;
    }
`

const Title = styled.div`
    display: flex;
    margin-bottom: 10px;

    h1 {
        font-size: 25px;

        @media screen and (max-width: 960px) {
            font-size: 12px;
        }
    }
`

const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
`

const Grid2Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
`

const BlurContainer = styled.div`
    width: 30%;
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(50px);
    box-shadow: 0 0 10px #ffffff;

    
    @media screen and (max-width: 960px) {
        width: 80%;   
    }
`

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    button {
        padding: 20px;
        background-color: #1abc9c;
        color: black;
        border-radius: 10px;
        border: none;
    }

`
// const API = 'AIzaSyAVGGrhZm_-dj2soYTaY61lSRLjmPD4o88';
// const channelID = 

const IMGContainer = styled.div`
  width: 20%;
  justify-content: center;
  display: flex;


  img {
    border-radius: 10px;

        height: 150px;
    }
  }
`





const Tutorials = props => {


    return (
        <>
            <GridContainer>
            <ParticleComponent />
                <Layout>
                        <Flex>
                                <HeadingContainer>
                                    <h1>Tutorials 
                                        <SectionDivider />
                                    </h1>
                                </HeadingContainer>
                        </Flex>

                        <Grid2Container>
                            <BlurContainer>
                                <Flex>
                                    <Center w="100%">
                                        <Title>
                                            <h1>Dev: Integrating with Youtube API</h1>
                                        </Title>
                                    </Center>
                                </Flex>

                                    <Flex>
                                        <Center w="100%">
                                            <BodyContainer>
                                                <IMGContainer>
                                                    <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="in development" />
                                                </IMGContainer>
                                            </BodyContainer>
                                        </Center>
                                    </Flex>
                            </BlurContainer>
                        </Grid2Container>

                        <ButtonContainer>
                            <button>Get Youtube Videos</button> 
                        </ButtonContainer>
                    <FooterContainer>
                        <Footer />
                    </FooterContainer>
                </Layout>
            </GridContainer>
        </>
    );
};

export default Tutorials;






{/* <Box>
<Section delay={0.2}>
    <LinkBox cursor='pointer'>
        <ImageContainer>
            <Image
                fit="cover"
                src="/images/DarkMeowYoutubeThumb.png"
                alt="Backgrounds Project"	
                height="455px"
                width="740px"
                style={{borderRadius: "10px"}}
            />
        </ImageContainer>
        <LinkOverlay href={`tutorials/Youtube`}>
            <Text style={{color: "var(--text-color)", textAlign: "center"}} fontSize={20}>NHost React Tutorial</Text>
        </LinkOverlay>
    </LinkBox>
</Section>
</Box> */}

