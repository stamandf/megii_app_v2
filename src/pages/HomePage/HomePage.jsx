import React from 'react';
import Header from '../../layouts/Header/Header';
import HeroCover from '../../layouts/HeroCover/HeroCover';
import OurTeam from '../../layouts/OurTeam/OurTeam';
import Footer from '../../layouts/Footer/Footer';
import Properties from '../../layouts/Properties/Properties';


function HomePage({listings}) {
    return (
        <div className="site-wrap" id="home-section" >
            <Header/>
            <HeroCover/>
            <OurTeam/>
            <Properties listings={listings}  />
            <Footer/>
        </div>
    );
}
export default HomePage;