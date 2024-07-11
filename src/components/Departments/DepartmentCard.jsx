import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
function DepartmentCard({ name, dec, img }) {
    return (
        <Card
            maxW={"600"}
            h={"full"}
            w={'full'}

            boxShadow={'2xl'}
            rounded={'md'}

            direction={{ base: 'column', sm: 'row' }}
            overflow={"hidden"}

        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={img}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{name}</Heading>

                    <Text py='2'>
                        {dec}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button colorScheme='twitter'>Learn More</Button>
                </CardFooter>


            </Stack>
        </Card>
    );
}

export default DepartmentCard;