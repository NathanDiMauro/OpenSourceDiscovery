import React from 'react'
import {
    useQuery,
    gql
} from "@apollo/client";

function GetReadMe(props){
    const README = gql`
    query readme{
      readme(repo: "${props.repoName}") {
        html_url,
        content
      }
    }`;
    const { loading, error, data } = useQuery(README);
    
    if (loading) return <p>Loading...</p>;
    if (error) { 
        console.log(error);
        return <p>Error :(</p>;
    }
    if (data) {
      console.log(window.atob(data.readme.content));
      return (
        <div>
          <h4>ReadMe</h4>
          <p>{window.atob(data.readme.content)}</p>
        </div>
      );
    }
  }

  export default GetReadMe; 