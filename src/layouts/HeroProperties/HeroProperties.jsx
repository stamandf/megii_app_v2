import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroProperties.scss';

function HeroProperties() {
  const { t } = useTranslation();


    return (

      <section className="hero-wrap hero-wrap-2 backgroundImg4" data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate pb-0 text-center">
            <h1 className="mb-3 text-white">{t("properties.title")}</h1>
          </div>
        </div>
      </div>
    </section>

    );
}

export default HeroProperties;