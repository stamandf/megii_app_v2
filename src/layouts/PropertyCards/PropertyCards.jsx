import React from 'react';
import Listing from '../Listing/Listing';

const PropertyCards = (props) => {
    const properties = props.properties;

    console.log('PropertyCard properties = ', properties);

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