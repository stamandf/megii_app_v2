import React from 'react';
import { Link } from 'react-router-dom';
import './homeCard.scss'

const HomeCard = (props) => {
  const property = props.property;
  console.log('IN HomeCard COMPONENT WITH PROPS = ', props);
  return (
    <div class="col-md-4 mb-5">
            <div className="item media-38289">
              <Link to={`/properties/${property.id}`} className="d-block"><img src={property.photo_main} alt="Image" className="img-fluid"/></Link>
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
     </div>
      
  );

}
export default HomeCard;