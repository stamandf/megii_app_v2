import React from 'react';
import Listing from '../Listing/Listing';

const PropertyCards = (props) => {
    const properties = props.properties;
    let columns = [];
    let finalResult = [];

    console.log('PropertyCard properties = ', properties);
    
    // const renderRows = () => {
    //     properties.forEach(element => {
            
    //     });
    // }
    return (
        <>
        {
            properties.map((property) => {
                return (<Listing key={property.id} property={property} />);
            })
        }
        </>
    )

}

export default PropertyCards;