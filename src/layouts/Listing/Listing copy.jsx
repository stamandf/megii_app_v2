import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './listing.scss'

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
    return (
        <OwlCarousel
        autoplay={true}
        dots
        loop
        margin={20}
        responsiveClass={true}
        responsive={options}
        >
          <div className="item media-38289">
              <a href="property-single.html" className="d-block"><img src={require("../../assets/images/properties/img_1.jpg")} alt="Image" className="img-fluid"/></a>
              <div className="text">
                <div className="d-flex justify-content-between mb-3">
                  <div className="sq d-flex align-items-center"><span className="wrap-icon icon-fullscreen"></span> <span>2911 Sq Ft.</span></div>
                  <div className="bed d-flex align-items-center"><span className="wrap-icon icon-bed"></span> <span>2.</span></div>
                    <div className="bath d-flex align-items-center"><span className="wrap-icon icon-bath"></span> <span>2</span></div>
                </div>
                <h3 className="mb-3"><a href="#">$570,000</a></h3>
                <span className="d-block small address d-flex align-items-center"> <span className="icon-room mr-3 text-primary"></span> <span>156/10 Sapling Street, Harrison, ACT 2914</span></span>
              </div>
            </div>

            <div className="item media-38289">
              <a href="property-single.html" className="d-block"><img src={require("../../assets/images/properties/img_2.jpg")} alt="Image" className="img-fluid"/></a>
              <div className="text">
                <div className="d-flex justify-content-between mb-3">
                  <div className="sq d-flex align-items-center"><span className="wrap-icon icon-fullscreen"></span> <span>2911 Sq Ft.</span></div>
                  <div className="bed d-flex align-items-center"><span className="wrap-icon icon-bed"></span> <span>2.</span></div>
                    <div className="bath d-flex align-items-center"><span className="wrap-icon icon-bath"></span> <span>2</span></div>
                </div>
                <h3 className="mb-3"><a href="#">$1,570,000</a></h3>
                <span className="d-block small address d-flex align-items-center"> <span className="icon-room mr-3 text-primary"></span> <span>156/10 Sapling Street, Harrison, ACT 2914</span></span>
              </div>
            </div>

            <div className="item media-38289">
                <a href="property-single.html" className="d-block"><img src={require("../../assets/images/properties/img_3.jpg")} alt="Image" className="img-fluid"/></a>
                <div className="text">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="sq d-flex align-items-center"><span className="wrap-icon icon-fullscreen"></span> <span>2911 Sq Ft.</span></div>
                    <div className="bed d-flex align-items-center"><span className="wrap-icon icon-bed"></span> <span>2.</span></div>
                    <div className="bath d-flex align-items-center"><span className="wrap-icon icon-bath"></span> <span>2</span></div>
                  </div>
                  <h3 className="mb-3"><a href="#">$980,000</a></h3>
                  <span className="d-block small address d-flex align-items-center"> <span className="icon-room mr-3 text-primary"></span> <span>156/10 Sapling Street, Harrison, ACT 2914</span></span>
                </div>
              </div>


            <div className="item media-38289">
              <a href="property-single.html" className="d-block"><img src={require("../../assets/images/properties/img_1.jpg")} alt="Image" className="img-fluid"/></a>
              <div className="text">
                <div className="d-flex justify-content-between mb-3">
                  <div className="sq d-flex align-items-center"><span className="wrap-icon icon-fullscreen"></span> <span>2911 Sq Ft.</span></div>
                  <div className="bed d-flex align-items-center"><span className="wrap-icon icon-bed"></span> <span>2.</span></div>
                    <div className="bath d-flex align-items-center"><span className="wrap-icon icon-bath"></span> <span>2</span></div>
                </div>
                <h3 className="mb-3"><a href="#">$570,000</a></h3>
                <span className="d-block small address d-flex align-items-center"> <span className="icon-room mr-3 text-primary"></span> <span>156/10 Sapling Street, Harrison, ACT 2914</span></span>
              </div>
            </div>

            <div className="item media-38289">
              <a href="property-single.html" className="d-block"><img src={require("../../assets/images/properties/img_2.jpg")} alt="Image" className="img-fluid"/></a>
              <div className="text">
                <div className="d-flex justify-content-between mb-3">
                  <div className="sq d-flex align-items-center"><span className="wrap-icon icon-fullscreen"></span> <span>2911 Sq Ft.</span></div>
                  <div className="bed d-flex align-items-center"><span className="wrap-icon icon-bed"></span> <span>2.</span></div>
                    <div className="bath d-flex align-items-center"><span className="wrap-icon icon-bath"></span> <span>2</span></div>
                </div>
                <h3 className="mb-3"><a href="#">$1,570,000</a></h3>
                <span className="d-block small address d-flex align-items-center"> <span className="icon-room mr-3 text-primary"></span> <span>156/10 Sapling Street, Harrison, ACT 2914</span></span>
              </div>
            </div>

            <div className="item media-38289">
                <a href="property-single.html" className="d-block"><img src={require("../../assets/images/properties/img_3.jpg")} alt="Image" className="img-fluid"/></a>
                <div className="text">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="sq d-flex align-items-center"><span className="wrap-icon icon-fullscreen"></span> <span>2911 Sq Ft.</span></div>
                    <div className="bed d-flex align-items-center"><span className="wrap-icon icon-bed"></span> <span>2.</span></div>
                    <div className="bath d-flex align-items-center"><span className="wrap-icon icon-bath"></span> <span>2</span></div>
                  </div>
                  <h3 className="mb-3"><a href="#">$980,000</a></h3>
                  <span className="d-block small address d-flex align-items-center"> <span className="icon-room mr-3 text-primary"></span> <span>156/10 Sapling Street, Harrison, ACT 2914</span></span>
                </div>
              </div>
      </OwlCarousel>
    );
}