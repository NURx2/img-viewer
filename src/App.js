import React, { useState } from 'react';
import GalleryPage from './pages/Gallery'
import NotFoundPage from './pages/NotFound'
import GalleryListsPage from './pages/GalleryLists';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [data, setData] = useState()

  !data &&
  fetch("http://localhost:80/items", {
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
      <Switch>
        <Route exact path = "/" render={(props) => <GalleryListsPage {...props} data={data}/>}/>
        <Route path="/gallery/:galleryId" render={(props) => <GalleryPage {...props} data={data}/>}/>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
