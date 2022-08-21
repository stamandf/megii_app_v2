import React, { useState } from 'react';
import HeroProperties from '../HeroProperties/HeroProperties';
import ImageGallery from 'react-image-gallery';
import './PropertyDetails.scss';

function PropertyDetails({property}) {
    const [showFeatures, setShowFeatures] = useState(true);
    const [showDescriptions, setshowDescriptions] = useState(false);

    const toggleActiveTab = (e) => {
        e.preventDefault();
        console.log('toggleActiveTab!');
        if (!showFeatures && e.target.id === 'pills-features-tab') {
            setShowFeatures(!showFeatures);
            setshowDescriptions(!showDescriptions);
        } else if (!showDescriptions && e.target.id === 'pills-descriptions-tab') {
            setShowFeatures(!showFeatures);
            setshowDescriptions(!showDescriptions);
        }
    }

    return (
        <div>
            Property  Details here. with mls_no = {property.id}
            <div className='container'>

         
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <div className='property-details'>
                        <ImageGallery 
                            items= {property.images} 
                            showBullets={true}
                        />   
                            {/* <img  className='img' src={property.photo_main}/> */}
                            <div className='text'>
                                <span className='subheading'>Montréal</span>
                                <h2>{property.address}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 pills'>
                        <div className='bd-example bd-example-tabs'>
                            <div className='d-flex'>
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className={showFeatures ? "nav-link show active" : "nav-link" } id="pills-features-tab" data-toggle="pill" href="#pills-feature" role="tab" aria-controls="pills-feature" aria-expanded="true" aria-selected={showFeatures ? "true" : "false"} onClick={toggleActiveTab}>Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={showDescriptions ? "nav-link show active" : "nav-link" } id="pills-descriptions-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true" aria-selected={showDescriptions ? "true" : "false"} onClick={toggleActiveTab}>Description</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='tab-content' id='pills-tabContent'>
                            <div className={showFeatures ? "tab-pane fade show active" : "tab-pane fade" } id="pills-feature" role="tabpanel" aria-labelledby="pills-features-tab">
                                <div className='row'>
                                    <div className="col-md-4">
                                        <ul className="features">
                                            <li className="check"><span className="fa fa-check-circle"></span>Lot Area: 5000 Sq ft</li>
                                            <li className="check"><span className="fa fa-check-circle"></span>Bed Rooms: {property.beds}</li>
                                            <li className="check"><span className="fa fa-check-circle"></span>Bath Rooms: {property.baths}</li>
                                            <li className="check"><span className="fa fa-check-circle"></span>Luggage</li>
                                            <li className="check"><span className="fa fa-check-circle"></span>Garage: 2</li>
                                        </ul>
                                    </div>
						    		<div className="col-md-4">
						    			<ul className="features">
						    				<li className="check"><span className="fa fa-check-circle"></span>Floor Area: {property.size}</li>
						    				<li className="check"><span className="fa fa-check-circle"></span>Year Build:: 2019</li>
						    				<li className="check"><span className="fa fa-check-circle"></span>Water</li>
						    				<li className="check"><span className="fa fa-check-circle"></span>Stories: 2</li>
						    				<li className="check"><span className="fa fa-check-circle"></span>Roofing: New</li>
						    			</ul>
						    		</div>
                                </div>
                            </div>
                            <div className={showDescriptions ? "tab-pane fade show active" : "tab-pane fade" } id="pills-description" role="tabpanel" aria-labelledby="pills-descriptions-tab">
						        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
							    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
						    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

} 
export default PropertyDetails;