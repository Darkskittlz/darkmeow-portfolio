import styled from '@emotion/styled'
import { 
    Image,
	Text, 
	useColorModeValue 
} from '@chakra-ui/react'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;

    img {
        transition: 200ms ease;
    }

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (
        <a href="/">
            <LogoBox>
                <Image src={footPrintImg} width={20} height={20} mr={10} alt="logo" />
                <Text 
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    fontSize="15px"
                    ml={0}
                    width="210px"
                    as="samp"
                    style={{color: "black"}}
                >
                    DarkMeow Productions
                </Text>
            </LogoBox>
        </a>       
    )
}

export default Logo;