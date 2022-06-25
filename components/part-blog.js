import { Grid, GridItem, 

    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react'
import CardBlog from './card-blog'
export default function PartBlog(props){
    return (<Box
        bg={useColorModeValue('blue.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={20}>

<Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={6}>

    <GridItem><CardBlog /></GridItem>
    <GridItem><CardBlog /></GridItem>
    <GridItem><CardBlog /></GridItem>  
    
    </Grid>
</Container>
    </Box>)
}