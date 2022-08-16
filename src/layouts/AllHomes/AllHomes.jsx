import React from 'react';
import HomeCard from '../HomeCard/HomeCard';

function AllHomes({listings}) {
    let columns = [];
    let finalResult = [];


    const renderRows = () => {
        listings.forEach((property, index) => {
            columns.push(<HomeCard key={index} property={property} isOne={listings.length === 1} />);

            if(((index + 1) % 3 === 0) || ((index + 1) === listings.length)) {
                finalResult.push(
                    <div className="row" key={index}>{columns}</div>
                );
                columns = [];
            } 
        })
        return finalResult;
    }

    return (
        <div class="site-section bg-white">
            <div class="container">
                {
                    renderRows()
                }
            </div>
        </div>
    );

}

export default AllHomes;