import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.jsx';
import OurPropertiesPage from './pages/OurPropertiesPage/OurPropertiesPage.jsx';
import PropertyPage from './pages/PropertyPage/PropertyPage.jsx';
import NotFound from './layouts/NotFound/NotFound.jsx';

import { useTranslation } from 'react-i18next';

function App({listings}) {
  const { t } = useTranslation();

  console.log('** APP COMPONENT WITH LISTINGS = ', listings);

  return (
        <Routes>
          <Route path="/">
              <Route index element={<HomePage listings={listings}/>}/>
          </Route>
          <Route path="properties">
            <Route index element={<OurPropertiesPage listings={listings}/>}/>
            <Route path=":mls_no" element={<PropertyPage listings={listings}/>}/>
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
  );
}

export default App;
