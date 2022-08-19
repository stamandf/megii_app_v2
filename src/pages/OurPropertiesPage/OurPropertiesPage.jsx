import React from 'react';
import Header from '../../layouts/Header/Header';
import HeroProperties from '../../layouts/HeroProperties/HeroProperties';
import AllHomes from '../../layouts/AllHomes/AllHomes';
import Footer from '../../layouts/Footer/Footer';
import { useTranslation, getI18n } from 'react-i18next';


function OurPropertiesPage({listings}) {
    console.log('Our Properties page');
    console.log('properties = ', listings);
    const { t } = useTranslation();
    const langInfo = getI18n();

    return (
        <div>
            <Header/>
            <HeroProperties/>
            <AllHomes listings={listings}/>
            <Footer/>
        </div>
    )
}

export default OurPropertiesPage;