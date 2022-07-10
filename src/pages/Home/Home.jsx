import React from 'react';
import Header from '../../layouts/Header/Header';
import HeroCover from '../../layouts/HeroCover/HeroCover';
import OurTeam from '../../layouts/OurTeam/OurTeam';
import Footer from '../../layouts/Footer/Footer';
import Properties from '../../layouts/Properties/Properties';


function Home() {
    return (
        <div className="site-wrap" id="home-section" >
            <Header/>
            <HeroCover/>
            <OurTeam/>
            <Properties/>
            <Footer/>
        </div>
       
    );
}
export default Home;