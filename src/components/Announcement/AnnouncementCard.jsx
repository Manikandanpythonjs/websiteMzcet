'use client'

import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    SimpleGrid,
    Flex,
    Heading

} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import SimpleAccordion from './Accordion'
import AutoScrollLoopContainer from '../Demos/AutoScroll'

export default function AnnouncementCard() {
    return (
        <Box p={10} mt={10} >
            <Flex flexDirection={{ base: "column", md: 'row' }} alignItems={"center"} justifyContent={"space-between"} gap={5}>
                {/* <Center py={6}> */}
                <Box
                    maxW={"600"}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'auto'}>
                    <Stack
                        textAlign={'center'}
                        p={6}
                        color={useColorModeValue('gray.800', 'white')}
                        align={'center'}>
                        <Heading
                            fontSize={'2xl'}
                            fontWeight={500}
                            bg={"twitter.500"}
                            p={2}
                            px={3}
                            color={'white'}
                            rounded={'full'}>
                            NEWS&EVENTS
                        </Heading>

                    </Stack>

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} height={"250"} >


                        <SimpleAccordion />


                    </Box>
                </Box>
                <Box
                    maxW={'600'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'auto'}>
                    <Stack
                        textAlign={'center'}
                        p={6}
                        color={useColorModeValue('gray.800', 'white')}
                        align={'center'}>
                        <Heading
                            fontSize={'2xl'}
                            fontWeight={500}
                            bg={"twitter.500"}
                            p={2}
                            px={3}
                            color={'white'}
                            rounded={'full'}>
                            TRAINING & PLACEMENT
                        </Heading>

                    </Stack>
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} height={"250"} >


                        <SimpleAccordion />


                    </Box>


                </Box>

                {/* </Center> */}
            </Flex>
        </Box>

    )
}