import React,{ useState, useEffect }  from 'react';
import Listing from '../Listing/Listing';
import SectionHeader from '../SectionHeader/SectionHeader';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
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
          console.log('initialListings = ',initialListings)
        })
        .catch(error => {
          console.log('GET failed. Error:', error)
        })
    }, [])

    const options = {
        0: {
          items: 1,
        },
        700: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    return (
        <section className='site-section bg-properties block-14' id='properties'>
        <div className='container'>
            <SectionHeader textColour={'white'} title={'Latest Properties'} description={'Check out our latest listings. Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.'} />
            <OwlCarousel
            autoplay={true}
            dots
            loop
            margin={20}
            responsiveClass={true}
            responsive={options}
            >
            {
              listings.map((property) => {
                console.log('listings.map property = ',property);
                
                return (<Listing key={property.id}  property={property}/>);
            })
            }
            </OwlCarousel>
        </div>
        </section>
    );
} 
export default Properties;