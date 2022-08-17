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


const Youtube = props => {
  return (
    <>
    <ParticleComponent />
      <Layout>
          <Container maxW='2x1'>
              <GridContainer>
                    
                  <FooterContainer>
                      <Footer />
                  </FooterContainer>
              </GridContainer>
          </Container>
      </Layout>
  </>
    )
}

export default Youtube