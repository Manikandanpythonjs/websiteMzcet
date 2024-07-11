'use client'

import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'



export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box position={"fixed"} top={0} right={0} left={0} zIndex={10} px={4} backgroundColor={"blackAlpha.300"} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>

                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>

                            <Menu>


                                <a href="#">
                                    <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                        HOME
                                    </MenuButton>
                                </a>

                                <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"}>
                                    ABOUT US
                                </MenuButton>
                                <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"} >
                                    DEPARTMENTS
                                </MenuButton>
                                <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"} >
                                    ADMISSIONS
                                </MenuButton>
                                <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"} >
                                    CLUBS&CELLS
                                </MenuButton>
                                <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"} >
                                    lIBRARY
                                </MenuButton>
                                <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"} >
                                    ACILITIES & ACTIVITIES
                                </MenuButton>
                                <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"} >
                                    FEEDBACK
                                </MenuButton>
                                <MenuButton color={"#fff"} fontSize={"15"} fontWeight={"500"} >
                                    NAAC
                                </MenuButton>



                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>

            </Box>
        </>
    )
}