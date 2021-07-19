import React from 'react'
import {
    useQuery,
    gql
} from "@apollo/client";

const updateStyle = {
    "paddingTop": "2%",
    "fontWeight": "bold",
  }

function GetContributors(props) {
    const CONTRIBUTORS = gql`
    query contributors{
      contributors(repo: "${props.repoName}") {
        login
      }
    }`;
    const { loading, error, data } = useQuery(CONTRIBUTORS);
    
    if (loading) return <p>Loading...</p>;
    if (error) { 
        console.log(error);
        return <p>Error :(</p>;
    }
    if (data) {
      return (
        <div>
          <p style={updateStyle}>{data.contributors.length} contributors</p>
        </div>
      );
    }
  }
  export default GetContributors; 