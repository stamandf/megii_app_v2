import React,{ useState, useEffect }  from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Homes from '../Homes/Homes';

function Properties({listings}) {

    return (
        <section className='site-section bg-properties block-14' id='properties'>
        <div className='container'>
            <SectionHeader textColour={'white'} title={'Latest Properties'} description={'Check out our latest listings. Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.'} />
            <Homes listings={listings} />
        </div>
        </section>
    );
} 
export default Properties;