import '../Styles/App.css';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ParticleComponent from '../ParticleBackground2';
import Footer from './footer';
import Intro from './Intro';
import Timeline from './TimeLine';
import Donut from './Donut';
import { Suspense } from 'react';
import { 
	Link,
	Box,
	Heading,
    Image,
	Container, 
} from '@chakra-ui/react'

const GridContainer = styled.div`
    height: 100%;
    width: 50%;
    margin-left: 25%;
	padding-left: 25px;

	// @media (max-width: 960px) {
	// 	width: 80%;
	//   }
`


const FooterContainer = styled.div`
    display: flex;
    width: 100%;

	@media (max-width: 667px) {
		margin-left: 10%;
	}

	@media (max-width: 960px) {
		margin-left: 20%;
	}
`

const Animation = keyframes`
  0% { box-shadow: 0 0 10px #09EE9A; } 
  30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
  50% { box-shadow: 0 0 20px #09DEEE;  } 
  70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
  100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`

const HeadingContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	
	h1 {
		color: var(--text-color);
		font-size: 50px;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(80, 78, 78, 0.9);
		border: 1px solid var(--text-color);
	}
`

const ButtonContainer = styled.div`
	font-size: 34px;
	width: 200px;
	border-radius: 10px;
	margin-top: 40px;
	padding: 40px;
	text-decoration: inherit;
	color: var(--text-color);
	animation-name: ${Animation};
	animation-duration: 4s;
	animation-iteration-count: infinite;
	background: rgb(14,252,43);
	background: linear-gradient(34deg, rgba(14,252,43,0.4013664983933972) 15%, rgba(9,222,238,0.29767441860465116) 48%, rgba(156,47,191,0.29767441860465116) 83%);

	@media (max-width: 960px) {
		width: 100px;
	}

	h1 {
		@media (max-width: 960px) {
			font-size: 25px;
			padding: 0px;
		}
	}

`

const Homepage = () => {	
    return (
        <GridContainer>
         <ParticleComponent />
          <Layout >
			<Intro />

			{/* <Suspense fallback={null}>
				<Donut />
			</Suspense> */}

			<Container 
				className="homePageContainer"
			>
				<Box 
				display={{md: 'flex'}}
				style={{flexDirection: "column", paddingTop: "30px"}}
				>
					<Box 
					flexShrink={0} 
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					align="center"
					>
						<Image 
						display="inline-block"
						width="205px"
						height="300px"
						fit="cover"
						src="/images/proPic2.jpg"
						alt="Profile IMG"
						style={{borderRadius: "10px"}}							   
						/>
					</Box>
				</Box> 
				<Section delay={0.1}>
					<HeadingContainer>
						<h1>Bio</h1> 
					</HeadingContainer>

					<h1>
						Jeremy is a react developer who specializes in the MERN/PERN stack. He enjoys developing frontend user interfaces that prioritize sleek design, integrate background animations, and consume APIs to display interactive information. 
						As a blockchain engineer, he enjoys connecting frontend web applications with the blockchain via Web3js. 
					</h1>
					<Box align="center" my={4}>
						<Link href="/works">
							<ButtonContainer>
								<h1>My Portfolio</h1>
							</ButtonContainer>
						</Link>
					</Box>
				</Section>

				<Section delay={0.2}>	
					<Timeline />
				</Section>



				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I ❤ 
					</Heading>
					<h1>Programming, 
					<Link href="https://www.youtube.com/watch?v=J_eNHNsUKPA"> Youtube, </Link>
					3D Rendering, Drums, Guitar {' '}
					<Link href="https://darkmeowfi.netlify.app/">Lofi, </Link>
					Rock Climbing, Parkour, 
					<Link href="https://beacons.ai/darkskittlz"> Cosplay, </Link>
					Skateboarding, 
					</h1>
				</Section>

				<Section delay={0.4}>
					<Heading as="h3" variant="section-title">
						Inspired By 
					</Heading>
					<h1>{' '}
						<Link href="https://www.craftz.dog/">Takuyama Matsuyama </Link>
					</h1>
				</Section>
			</Container>
		</Layout>
		<FooterContainer>
        	<Footer />
        </FooterContainer>
        </GridContainer>
    );
};

export default Homepage;
