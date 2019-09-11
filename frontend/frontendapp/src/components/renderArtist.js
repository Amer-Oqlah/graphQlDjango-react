import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";


class RenderArtist extends React.Component  {

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
            All Artists 
           <br/>
            {this.goToMain()}
                            
             {this.props.location.state.data.allArtists.map((item,key)=>
                   
              <li className="li" key={key}>{item.name} - {item.country} <br/></li>
             
             )}
             <br/>
             
              <button onClick={() => this.returnTomain()}>main</button> 

            </div>
          )
          
}
}
export default RenderArtist;
