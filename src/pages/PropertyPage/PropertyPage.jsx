import React from 'react';
import Header from '../../layouts/Header/Header';
import HeroProperties from '../../layouts/HeroProperties/HeroProperties';
import PropertyDetails from '../../layouts/PropertyDetails/PropertyDetails';
import Footer from '../../layouts/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PropertyPage({listings}) {
    const mls_no = useParams().mls_no;
    const { t } = useTranslation();


    console.log('** PropertyPage COMPONENT ** listings =', listings);
    console.log('mls_no = ', mls_no);
    console.log('useParams() = ', useParams());
    const propertyFound = listings.find(listing => listing.id === Number(mls_no));
    console.log('propertyFound = ', propertyFound)

    return (
        <div>
        <Header />
        <HeroProperties heroWrap={'hero-wrap-3'} heroTitle={"property.details"} />
        {/* <h1>{t("property.title")} {mls_no} </h1> */}
        <PropertyDetails property={propertyFound} />
        <Footer/>
        </div>
    );
}
export default PropertyPage;