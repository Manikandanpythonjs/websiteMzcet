'use client'

import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Flex,
    Spacer,
    Image

} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { AiTwotonePhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

// import { AppStoreBadge } from '#/components/AppStoreBadge'
// import { PlayStoreBadge } from '#/components/PlayStoreBadge'

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return (
        <Box

            bg={"blackAlpha.100"}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Contact us</ListHeader>
                        <Box as="a" href={'#'}>
                            Lena Vilakku, Pilivalam P.O, Thirumayam Tk.
                            Pudukkottai Dt - 622507
                            Tamil Nadu, INDIA
                        </Box>
                        <Box>

                            <Flex alignItems={"center"} gap={2} justifyContent={"center"}>
                                <AiTwotonePhone />
                                <Text>


                                    +91 7373344444 (9am - 5pm)

                                </Text>

                            </Flex>
                            <Flex alignItems={"center"} gap={2} justifyContent={"center"}>
                                <AiTwotonePhone />
                                <Text>


                                    +91 8973510000 (9am - 5pm)


                                </Text>

                            </Flex>

                        </Box>

                        <Box>
                            <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
                                <MdEmail />
                                <Text>

                                    info@mzcet.in

                                </Text>
                            </Flex>

                        </Box>

                        <Box>

                            <Text>
                                For Admission Enquiry

                            </Text>


                        </Box>
                        <Box>
                            <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
                                <AiOutlineWhatsApp />
                                <Text>
                                    +91 9659173000
                                </Text>
                            </Flex>
                        </Box>



                        {/* <Box as="a" href={'#'}>
                            Careers
                        </Box>
                        <Box as="a" href={'#'}>
                            Contact Us
                        </Box> */}
                    </Stack>

                    {/* <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Box as="a" href={'#'}>
                            Help Center
                        </Box>
                        <Box as="a" href={'#'}>
                            Safety Center
                        </Box>
                        <Box as="a" href={'#'}>
                            Community Guidelines
                        </Box>
                    </Stack> */}

                    {/* <Stack align={'flex-start'}>

                        <Container display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
                            <iframe src="
                            https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.591159953191!2d78.76186567393542!3d10.294488089826503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b007b9be3b6b9c1%3A0x7dc82f4a20569695!2sMount%20Zion%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1692178172091!5m2!1sen!2sin"
                                width="300" height="300" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </Container>


                    </Stack> */}

                    {/* <Spacer /> */}



                    <Stack align={'flex-start'}>
                        <ListHeader>Install App</ListHeader>
                        <Image rounded={"md"} src={require("../../assets/image/playstore.png")} />

                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Affilation</ListHeader>
                        <Image rounded={"md"} src={require("../../assets/image/naac.jpg")} />

                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                bg={"whiteAlpha.600"}
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text >© 2023 Mount Zion College of Engineering and Technology</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}