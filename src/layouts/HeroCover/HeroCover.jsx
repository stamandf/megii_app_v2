import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './HeroCover.scss';

function HeroCover() {
  const { t, i18n } = useTranslation();

    return (

        <div className="ftco-blocks-cover-1">
        
        <section className="site-section-cover overlay d-flex align-items-center justify-content-center" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-7">
                <h1 className="mb-4 text-white">Maison Eros <span className="text-primary">Great</span>ti <br/> Immobilier inc.</h1>
                <div className="d-flex media-38289 justify-content-around mb-5">
                <p><Link to="/properties" className="btn btn-primary text-white px-4 py-3">{t("message.button1")}</Link></p>
                </div>
              </div>
            </div>
          </div> 

          <div className="wrapper">
            <div data-stellar-background-ratio="0.5" className="backgroundImg1"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg2"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg3"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg4"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg5"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg6"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg7"></div>
          </div>

        </section>  
      </div>
    );
}

export default HeroCover;