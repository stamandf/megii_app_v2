import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './listing.scss'
import property from '../../db/propListings.json';

export const Listing = (props) => {
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
  console.log('listings: ', property.listings);
    return (
        <OwlCarousel
        autoplay={true}
        dots
        loop
        margin={20}
        responsiveClass={true}
        responsive={options}
        >
{        property.listings.map((property) => {
          console.log('property = ', property);
            <div className="item media-38289">
              <a href="property-single.html" className="d-block"><img src={property.photo_main} alt="Image" className="img-fluid"/></a>
              <div className="text">
                <div className="d-flex justify-content-between mb-3">
                  <div className="sq d-flex align-items-center"><span className="wrap-icon icon-fullscreen"></span> <span>{property.size}</span></div>
                  <div className="bed d-flex align-items-center"><span className="wrap-icon icon-bed"></span> <span>{property.beds}</span></div>
                    <div className="bath d-flex align-items-center"><span className="wrap-icon icon-bath"></span> <span>{property.baths}</span></div>
                </div>
                <h3 className="mb-3"><a href="#">{property.price}</a></h3>
                <span className="d-block small address d-flex align-items-center"> <span className="icon-room mr-3 text-primary"></span> <span>{property.address}</span></span>
              </div>
            </div>
        })
        }
      </OwlCarousel>
    );
}