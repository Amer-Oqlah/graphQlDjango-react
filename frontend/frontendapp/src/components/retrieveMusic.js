import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import axios from 'axios';


class Retrieve extends React.Component  {

    // state 
    state={
        value:'',
        fetched:false,
        data:""
    }
// fetching the data from django-Graphql 

    fetchArtists(value){   
     
       let url=  'http://localhost:8000/graphql'
       const client = new ApolloClient({
        uri: url,
      });

let Query=``;

if(value==="Artists"){
       Query=gql`{ 
        allArtists {
        id
        name
        country
      }
    }`
  }
  if(value==="Albums"){
    Query=gql`{
        allAlbums{
          id
           title
            artist{
            name
           }
        }
    }`
    
  } 
  if(value==="Songs"){
    Query=gql`{
      allSongs{
         id
          title
          artist{
             name
              }
            album {
          title
         }    
      }
  }`
    
  }// end of if statment
    client.query({
        query: Query
      })
      .then(result => 
             this.setState({
             data:result.data,
             fetched:true,
             value:value
         }))
    }// end of function fetching data 

    goToComponent(){
        if (this.state.fetched){
            var direction="/"+this.state.value;
            return <Redirect to={{
            pathname: direction,
            state: {data:this.state.data}
        }}
/>
        }
 
}
    render(){
      
  return (
     
    <div className="App">
    {this.goToComponent()}
     <p>Retrieve Music from Django server  </p><br/>
     <p>Get the lists of music information by pressing the relative button </p><br/>
   <div>
     <button onClick={() => this.fetchArtists('Artists')}>Artists</button><br/><br/>
     <button onClick={() => this.fetchArtists('Albums')}>Albums</button><br/><br/>
     <button onClick={() => this.fetchArtists('Songs')}>Songs</button><br/><br/>
     </div>
     <p>Note: All CRUD Operations Could be Done by Backend Admin Account : </p>
     <p>Username: amer , Password: 111</p>
    </div>
  );           
}
}
export default Retrieve;
