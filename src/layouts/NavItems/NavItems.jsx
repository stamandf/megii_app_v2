import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

function NavItems(props) {
    const { toggleMenu, switchLanguage } = props;
    const { t } = useTranslation();
    console.log('** NavItems ** props =', props);

    if (toggleMenu && switchLanguage ) {
        return (
            <>
                <li className="nav-item"><Link to="/properties" className="nav-link" onClick={toggleMenu}>{t("navMenu.properties")}</Link></li>
                <li className="nav-item"><HashLink to="/#brokers" className="nav-link" onClick={toggleMenu}>{t("navMenu.brokers")}</HashLink></li>
                <li className="nav-item"><HashLink to="/#brokers" className="nav-link" onClick={toggleMenu}>{t("navMenu.contact")}</HashLink></li>
                <li className="nav-item"><HashLink to="#" className="nav-link" onClick={switchLanguage}>{t("navMenu.lang")}</HashLink></li>
            </>
        );
    } else {
        return (
            <>
                <li><Link to="/properties">{t("navMenu.properties")}</Link></li>
                <li><HashLink to="/#brokers">{t("navMenu.brokers")}</HashLink></li>
                <li><HashLink to="/#brokers">{t("navMenu.contact")}</HashLink></li>
            </>
        );
    }

} export default NavItems;