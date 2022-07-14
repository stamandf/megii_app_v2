import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Listing from '../Listing/Listing';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



function Homes(props) {
    console.log("IN HOMES COMPONENT - props = ",props);
    const listings = props.listings;
    console.log("IN HOMES COMPONENT - props listings = ",listings);
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
        <>
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
                console.log("IN HOMES COMPONENT - props listings = ",listings);

                console.log('IN HOMES COMPONENT - listings.map property = ',property);
                
                return (<Listing key={property.id}  property={property}/>);
            })
            }
        </OwlCarousel>
        </>
    )
} export default Homes;