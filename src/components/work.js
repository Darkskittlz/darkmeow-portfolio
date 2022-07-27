import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children, path }) => (

    <Box>
        <Link 
            href="/Works"
            path={path}
            style={{
                textDecoration: "none",
                color: "black"
            }}>
            Work 
        </Link>
        <span>
            {' '}
            <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

