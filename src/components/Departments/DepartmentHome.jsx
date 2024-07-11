import React from 'react';
import DepartmentCard from './DepartmentCard';
import { Grid, Box, Heading, Container } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';


function DepartmentHome() {
    return (
        <div>
            <Box p={10} >
                <Container>
                    <Heading
                        mb={20}
                        bg={"twitter.500"}
                        p={2}
                        px={3}
                        color={'white'}
                        rounded={'full'} textAlign={"center"}>

                        DEPARTMENTS
                    </Heading>
                </Container>

                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                    <Tilt>
                        <DepartmentCard name={"CIVIL ENGINEERING"} dec={"The Civil Department since its inception in 2009 serves the Civil Engineering community by imparting quality education with the motto of making our student knowledgeable and employable."}
                            img={"https://img.freepik.com/free-vector/organic-flat-man-engineer-working-construction_23-2148899143.jpg?size=626&ext=jpg"} />
                    </Tilt>

                    <Tilt>
                        <DepartmentCard name={"COMPUTER SCIENCE AND ENGINEERING"}
                            dec={"The department of Computer Science & Engineering was incepted in the year 2001 with the objective of high caliber technocrats and eminent software professionals."} img={"https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg"} />

                    </Tilt>

                    <Tilt>
                        <DepartmentCard name={"ELECTRONICS AND COMMUNICATION ENGINEERING"}
                            dec={" Electronic engineering deals with the research, design, integration, and application of circuits and devices used in the transmission and processing of information."} img={"https://img.freepik.com/free-vector/connected-concept-illustration_114360-4481.jpg?size=626&ext=jpg"} />

                    </Tilt>
                    <Tilt>
                        <DepartmentCard name={"ELECTRICAL AND ELECTRONICS ENGINEERING"}
                            dec={"The Department of Electrical and Electronics Engineering was established in the year 2005. The Department is well equipped with highly commendable facilities and is effectively guided by a set of devoted and diligent staff members with different field of specialization"} img={"https://img.freepik.com/free-vector/electricity-lighting-composition-with-characters-electricians-with-power-line-gear-lamp_1284-54213.jpg?size=626&ext=jpg"} />

                    </Tilt>
                    <Tilt>
                        <DepartmentCard name={"MECHANICAL ENGINEERING"}
                            dec={" Department of Mechanical Engineering at Mount Zion College of Engineering and Technology was established in the year 2008, is one of the largest in terms of faculty, students, and activities, which continues to lead and expand its activities in various directions. "} img={"https://img.freepik.com/free-vector/ecology-protection-environment-preservation-nature-conservation-eco-friendly-mechanism-idea-cogwheels-leaves-mechanical-parts-with-foliage_335657-1588.jpg?size=626&ext=jpg"} />

                    </Tilt>
                    {/* <DepartmentCard name={"INFORMATION TECHNOLOGY"} dec={ } img />
                <DepartmentCard name={"ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"} dec={ } img /> */}




                </Grid>
            </Box>


        </div>
    );
}

export default DepartmentHome;