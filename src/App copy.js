import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './components/NotFound/NotFound.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import PropertiesPage from './pages/Property/PropertiesPage.jsx';
import PropertyPage from './pages/Property/PropertyPageEN.jsx';
// import { useTranslation } from 'react-i18next';


function App() {
  // const { t } = useTranslation();

  return (
    // <BrowserRouter>
    //   <div className="App">
    //   <Routes>
    //     <Route path="/" element={<HomePage/>}/>
    //     <Route path="properties" element={<PropertiesPage/>}/>
    //     <Route path="properties/:mls_no" element={<PropertyPage/>}/>
    //     <Route path="properties/fr" element={<PropertiesPage/>}/>
    //     <Route path="properties/fr/:mls_no" element={<PropertyPage/>}/>
    //     <Route path="properties/en" element={<PropertiesPage/>}/>
    //     <Route path="properties/en/:mls_no" element={<PropertyPage/>}/>
    //   </Routes>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/">
          <Route index element={<HomePage/>}/>
      </Route>
      <Route>
        <Route path="properties">
          <Route index element={<PropertiesPage/>}/>
          <Route path=":mls_no" element={<PropertyPage/>}/>
          {/* <Route path="fr" element={<PropertiesPageFR/>}/>
          <Route path="fr/:mls_no" element={<PropertyPageFR/>}/>
          <Route path="en" element={<PropertiesPageEN/>}/>
          <Route path="en/:mls_no" element={<PropertyPageEN/>}/> */}
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
