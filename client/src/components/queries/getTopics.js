import React from 'react'
import {
    useQuery,
    gql
} from "@apollo/client";

function GetTopics(props) {
    const TOPICS = gql`
    query topics{
      topics(repo: "${props.repoName}") {
        names
      }
    }`;
    const { loading, error, data } = useQuery(TOPICS);
    
    if (loading) return <p>Loading...</p>;
    if (error) { 
        console.log(error);
        return <p>Error :(</p>;
    }
    if (data) {
      var topics=[]
      
      for(let index=0; index<data.topics.names.length; index++){
        var topicNames = data.topics.names[index]
  
        topics.push(<p>{topicNames}</p>)
      }
      if (topics.length>0)
      {
        return (
          <div>
            <h4>Topics:</h4>
            {topics}
          </div>
        );
      }
      return (
        <div></div>
      )
    }
  }
  export default GetTopics; 