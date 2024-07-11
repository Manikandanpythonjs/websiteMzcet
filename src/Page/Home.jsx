import React from 'react';
import Nav from '../components/Navbar/Navbar';
import Carousel from '../components/Carousels/Carousels';
import Swipper from '../components/Swipper/Swipper';
import VideoBackGround from '../components/VideoBackGround/VideoBackGround';
import NavbarDemo from '../components/Navbar/NavbarDemo';
import AnnouncementCard from '../components/Announcement/AnnouncementCard';
import DepartmentHome from '../components/Departments/DepartmentHome';
import Extra from '../components/Extra/Extra';
import Footer from '../components/Footer/Footer';
// import { Swipper } from '../components/Swipper/Swipper';

function Home() {
    return (
        <div>
            <VideoBackGround />
            <NavbarDemo />
            <AnnouncementCard />
            <DepartmentHome />
            <Extra />
            <Footer />
        </div>
    );
}

export default Home;