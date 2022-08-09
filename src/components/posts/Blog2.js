import { Container, Badge, SimpleGrid } from '@chakra-ui/react'
import Layout from '../layouts/article'
import styled from 'styled-components'
import Footer from '../footer'
import ParticleComponent from '../../ParticleBackground3'

const GridContainer = styled.div`
    width: 50%;
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
        font-size: 28px;
        text-indent: 30px;
        text-align: left;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    width: 100%; 

    @media (max-width: 960px) {
        justify-content: center;
        margin-left: 29%;
    }
`


const BlogPost2 = props => {
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
                                justifyItems: "center",
                                backdropFilter: "blur(25px)",
                                padding: "20px",
                                borderRadius: "10px"
                            }} 
                        >
                            <TitleContainer>
                                <h1> 🌟  GraphQL <Badge colorScheme="blue"> 2022</Badge></h1> 
                            </TitleContainer>
                            <BodyContainer>
                                Minim esse dolor eu consequat aute sit mollit cupidatat. Est incididunt aliqua nostrud deserunt aliquip. Aliquip consectetur enim dolore officia in esse tempor sunt proident commodo sunt dolor. Sit qui Lorem exercitation nisi commodo ad consectetur. Nostrud proident nisi fugiat Lorem proident laboris do ipsum.
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

export default BlogPost2;