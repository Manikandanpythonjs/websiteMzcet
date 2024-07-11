import React, { useState, useEffect } from 'react';
import { Box, Flex, Spacer, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, Stack, Image, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavbarDemo = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box position={"fixed"} top={0} right={0} left={0} zIndex={10} p={5} bg={scrollY > 0 ? 'twitter.500' : 'whiteAlpha.300'}
            boxShadow={scrollY > 0 ? 'md' : 'none'}
            transition="background-color 0.3s, box-shadow 0.3s" >

            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box >
                    <Image width={100} height={100} color={"#fff"} src={require("../../assets/image/logo.png")} />
                </Box>
                <Spacer />
                <Box display={{ base: 'block', md: 'none' }}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon />} />
                        <MenuList>
                            <MenuItem><Link>HOME</Link></MenuItem>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box display={{ base: 'none', md: 'block' }}>
                    <Flex align="center">
                        <Stack direction={'row'} spacing={7}>
                            <Menu>
                                <Link href='#'>
                                    <MenuButton
                                        p={2}
                                        _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" // Use transparent border by default
                                        color={"#fff"}
                                        fontSize={"15"}
                                        fontWeight={"500"}
                                    >
                                        HOME
                                    </MenuButton>
                                </Link>
                                <Link href='#'>
                                    <MenuButton
                                        p={2}
                                        _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" // Use transparent border by default
                                        color={"#fff"}
                                        fontSize={"15"}
                                        fontWeight={"500"}
                                    >
                                        ABOUT US
                                    </MenuButton>
                                </Link>
                                <Link href='#'>
                                    <MenuButton p={2} _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                        DEPARTMENTS
                                    </MenuButton>
                                </Link>

                                <Link href='#'>
                                    <MenuButton p={2} _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                        ADMISSIONS
                                    </MenuButton>
                                </Link>

                                <Link href='#'>
                                    <MenuButton p={2} _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                        CLUBS&CELLS
                                    </MenuButton>
                                </Link>

                                <Link href='#'>
                                    <MenuButton p={2} _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                        LIBRARY
                                    </MenuButton>
                                </Link>

                                <Link href='#'>
                                    <MenuButton p={2} _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                        FACILITIES & ACTIVITIES
                                    </MenuButton>
                                </Link>

                                <Link href='#'>
                                    <MenuButton p={2} _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                        FEEDBACK
                                    </MenuButton>
                                </Link>
                                <Link href='#'>
                                    <MenuButton p={2} _hover={{ borderBottomColor: 'red' }}
                                        borderBottom="3px solid transparent" color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                        NAAC
                                    </MenuButton>
                                </Link>


                            </Menu>

                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default NavbarDemo;
