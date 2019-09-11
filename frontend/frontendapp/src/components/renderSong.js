import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";


class RenderSong extends React.Component  {

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
           <p classNmae="p"> All Songs -With Related Album & Artist</p>
           <br/>
            {this.goToMain()}
             {console.log(this.props.location.state.data)}
             {this.props.location.state.data.allSongs.map((item,key)=>
                   
              <li className="li" key={key}>{item.title} -for- {item.album.title}- for {item.artist.name} <br/></li>
             
             )}
             <br/>
             
              <button onClick={() => this.returnTomain()}>main</button> 

            </div>
          )            
}
}
export default RenderSong;
