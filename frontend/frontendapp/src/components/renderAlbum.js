import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";


class RenderAlbum extends React.Component  {

state={
  redirect:false
}
    returnTomain(){
      this.setState({
        redirect:true
      })        
}
goToMain(){
  if(this.state.redirect){
  return <Redirect to={"/"}/>  
  }
}
    render(){
        return (
            <div className="App">
            All Albums
           <br/>
            {this.goToMain()}
             {this.props.location.state.data.allAlbums.map((item,key)=>
                   
              <li className="li" key={key}>{item.title} - {item.date} -for- {item.artist.name} <br/></li>
             
             )}
             <br/>
             
              <button onClick={() => this.returnTomain()}>main</button> 

            </div>
          )            
}
}
export default RenderAlbum;
