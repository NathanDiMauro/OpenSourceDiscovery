import React from 'react'
import {
    useQuery,
    gql
} from "@apollo/client";

function GetLanuages(props) {
    const LANGUAGES = gql`
    query Lanuages{
      languages(repo: "${props.repoName}") {
        name
      }
    }`;
    const { loading, error, data } = useQuery(LANGUAGES);
    
    if (loading) return <p>Loading...</p>;
    if (error) { 
        console.log(error);
        return <p>Error :(</p>;
    }
    if (data) {
      var languages=[]
      
      for(let index=0; index<data.languages.length; index++){
        var langNames = data.languages[index].name
  
        languages.push(<p>{langNames}</p>)
      }
  
      if (languages.length>0)
      {
        return (
          <div>
            <h4>Lanuages:</h4>
            {languages}
          </div>
        );
      }
      else{
        return(<div></div>)
      }
    }
  }
  export default GetLanuages; 