import React from 'react';

function PropertyDetails({property}) {
    console.log('property = ', property);



    return (
        <div>
            Property  Details here. with mls_no = {property.id}
            <div>
                <img src={property.photo_main}/>
            </div>
        </div>

    //     <section class="ftco-section ftco-property-details">
    //     <div class="container">
    //         <div class="row justify-content-center">
    //             <div class="col-md-12">
    //                 <div class="property-details">
    //                     <div class="img" style="background-image: url(images/work-1.jpg);">
    //                         <a href="/assets/images/properties/img_2.jpg" class="img-video popup-vimeo d-flex align-items-center justify-content-center">
    //                         <span class="fa fa-play"></span>
    //                     </a>
    //                     </div>
    //                     <div class="text">
    //                         <span class="subheading">Oakland</span>
    //                         <h2>The Blue Sky Home</h2>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="row">
    //             <div class="col-md-12 pills">
    //                       <div class="bd-example bd-example-tabs">
    //                           <div class="d-flex">
    //                             <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  
    //                               <li class="nav-item">
    //                                 <a class="nav-link active" id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true">Features</a>
    //                               </li>
    //                               <li class="nav-item">
    //                                 <a class="nav-link" id="pills-manufacturer-tab" data-toggle="pill" href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">Description</a>
    //                               </li>
    //                               <li class="nav-item">
    //                                 <a class="nav-link" id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-review" aria-expanded="true">Review</a>
    //                               </li>
    //                             </ul>
    //                           </div>
  
    //                         <div class="tab-content" id="pills-tabContent">
    //                           <div class="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
    //                               <div class="row">
    //                                   <div class="col-md-4">
    //                                       <ul class="features">
    //                                           <li class="check"><span class="fa fa-check-circle"></span>Lot Area: 1,250 SQ FT</li>
    //                                           <li class="check"><span class="fa fa-check-circle"></span>Bed Rooms: 4</li>
    //                                           <li class="check"><span class="fa fa-check-circle"></span>Bath Rooms: 4</li>
    //                                           <li class="check"><span class="fa fa-check-circle"></span>Luggage</li>
    //                                           <li class="check"><span class="fa fa-check-circle"></span>Garage: 2</li>
    //                                       </ul>
    //                                   </div>
    //                               </div>
    //                           </div>
  
    //                           <div class="tab-pane fade" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
    //                             <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    //                                   <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
    //                           </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //   </section>
  

    );

} 
export default PropertyDetails;