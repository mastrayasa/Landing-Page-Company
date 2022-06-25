import React  from "react"
import Head from 'next/head'  
import { Box } from '@chakra-ui/react'
import CallToAction from '../components/call-to-action' 
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Pricing from '../components/pricing'
import Carousel from '../components/carousel'
import PartBlog from '../components/part-blog'  
import Features from '../components/features'
import FeatureImage from "../components/feature-image"
import Testimonials from '../components/testimonials'
export default function Home(props) {
    return (
        <Box>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar />

            <Carousel />

            <CallToAction />

            <Box bg={'yellow.50'} py={10} borderY='1px' borderColor='gray.100'>
                <FeatureImage />
            </Box> 

            <Box py={10} borderBottom='1px' borderColor='gray.100'>
                <Pricing />
            </Box> 

            <Box py={0} borderBottom='1px' borderColor='gray.100'>
                <PartBlog /> 
            </Box>

            <Testimonials />
           
            <Features />

            <Footer />
        </Box>
      );
}


