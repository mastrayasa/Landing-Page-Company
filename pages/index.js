import React,{  useEffect,useState } from "react"
import { useRouter } from 'next/router'

import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import CallToActionWithAnnotation from '../components/cta'
import SplitWithImage from '../components/split'
import WithSubnavigation from '../components/nav'
import Footer from '../components/footer'
import Pricing from '../components/pricing'
import Carousel from '../components/carousel'
import PartBlog from '../components/part-blog' 
import SimpleThreeColumns from '../components/featured'
export default function Home(props) {
    return (
        <Box>
            <WithSubnavigation />
            <Carousel />
            <CallToActionWithAnnotation />
            <Box bg={'yellow.50'} py={10}>
                <SplitWithImage />
            </Box> 

            <Box py={10}>
                <Pricing />
            </Box> 

            <Box py={0}>
                <PartBlog /> 
            </Box>
           
           <SimpleThreeColumns />

            
            <Footer />
        </Box>
      );
}

