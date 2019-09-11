import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './App.css';
import Retrieve from "./components/retrieveMusic"
import RenderArtist from "./components/renderArtist"
import RenderAlbum from "./components/renderAlbum"
import RenderSong from "./components/renderSong"


class App extends React.Component{

  
  render(){
  return (
 <div>                               
  <Router>
    <Switch>
       <Route exact path="/" component={Retrieve} /> 
       <Route exact path="/Artists" component={RenderArtist} /> 
       <Route exact path="/Albums" component={RenderAlbum} /> 
       <Route exact path="/Songs" component={RenderSong} /> 


     
      
  </Switch> 
  
  </Router>
  </div>
  );
  }
}

export default App;