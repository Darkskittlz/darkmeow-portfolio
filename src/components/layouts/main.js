import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react';
import Donut from '../donut'
import ParticleComponent from '../../ParticleBackground2';


const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} >
            <Container maxW="container.md" pt={14}>
                  <Donut />
              {children}
            </Container>
      </Box>
    )
}

export default Main;