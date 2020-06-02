import React, { useState } from 'react';
import GalleryPage from './pages/Gallery'
import NotFoundPage from './pages/NotFound'
import GalleryListsPage from './pages/GalleryLists';
import SideBar from "./components/Sidebar";
import * as constants from './constants';
import './normalize.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { URL } from './static/urls';
import styled from '@emotion/styled';
import TapeDetection from "./components/TapeDetection";


const MainPlatformContainer = styled.div`
  background-color: ${constants.PlatformBackgroundColor};
  margin-left: ${constants.SidebarWidth};
  color: ${constants.CommonTextColor};
  height: 100vh;
  
  font-family: Gilroy, sans-serif;
  font-style: normal;
`;

function App() {
  const [data, setData] = useState()

  !data &&
  fetch(URL, {
    method: 'GET'
  })
  .then(
    response => response.json()
  )
  .then(
    response => {
      console.log('fetch:', response)
      'data' in response && setData(response.data)
    }
  )
  .catch(error => console.error(error));

  return (
    <Router>
      <SideBar/>
      <MainPlatformContainer>
          <Switch>
            <Route exact path = "/" render={(props) => <GalleryListsPage {...props} data={data}/>}/>
            <Route path="/detection" component={TapeDetection}/>
            <Route path="/gallery/:galleryId" render={(props) => <GalleryPage {...props} data={data}/>}/>
            <Route path="*" component={NotFoundPage} />
          </Switch>
      </MainPlatformContainer>
    </Router>
  );
}

export default App;
