import React,{ useState, useEffect }  from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Homes from '../Homes/Homes';
import listingsService from '../../services/actions/listings';

// const dbUrl = 'http://localhost:3001/listings'

function Properties() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
      console.log('Use Effect!');
      listingsService
        .getAll()
        .then(initialListings => {
          setListings(initialListings);
          console.log('initialListings = ',initialListings);
          console.log('1) listings = ',listings);
        })
        .catch(error => {
          console.log('GET failed. Error:', error)
        })
    }, [])
    console.log('2) listings = ',listings);
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