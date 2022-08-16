import React from 'react';
import { useTranslation } from 'react-i18next';

function NavItems(props) {
    const { toggleMenu, switchLanguage } = props;
    const { t } = useTranslation();


    if (toggleMenu && switchLanguage ) {
        return (
            <>
                <li className="nav-item"><a href="#properties" className="nav-link" onClick={toggleMenu}>{t("navMenu.properties")}</a></li>
                <li className="nav-item"><a href="#brokers" className="nav-link" onClick={toggleMenu}>{t("navMenu.brokers")}</a></li>
                <li className="nav-item"><a href="#brokers" className="nav-link" onClick={toggleMenu}>{t("navMenu.contact")}</a></li>
                <li className="nav-item"><a href="#" className="nav-link" onClick={switchLanguage}>{t("navMenu.lang")}</a></li>
            </>
        );
    } else {
        return (
            <>
                <li><a href="#properties">{t("navMenu.properties")}</a></li>
                <li><a href="#brokers">{t("navMenu.brokers")}</a></li>
                <li><a href="#brokers">{t("navMenu.contact")}</a></li>
            </>
        );
    }

} export default NavItems;