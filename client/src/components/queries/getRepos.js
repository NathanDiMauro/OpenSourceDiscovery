import React from 'react'
import RepoCard from '../card'
import CardColumns from 'react-bootstrap/CardColumns'
import {
    useQuery,
    gql
} from "@apollo/client";

const cardColStyle = {
    "marginLeft": "2%",
    "marginRight": "5%"
}

function GetRepos(args) {
    const REPOS = gql`
    query repos {
      repositories(pgNum: ${args.pgNum}){
          name,
          html_url, 
          description,
          owner{
          login,
          html_url
          },
      }
    }
    `;
    const { loading, error, data } = useQuery(REPOS);
    
    if (loading) return <p>Loading...</p>;
    if (error) { 
        console.log(error);
        return <p>Error :(</p>;
    }
    if (data) {
      let cards=[]
      
      for(let index=0; index<data.repositories.length; index++){
          var repo=data.repositories[index]
          //console.log(repo)
  
          cards.push(<RepoCard title={repo.name} ownerUrls={repo.owner.html_url} 
              owner={repo.owner.login} description={repo.description} 
              url={repo.html_url} />)
        
      }
      return (
        <CardColumns style={cardColStyle}>
          {cards}
        </CardColumns>
        )
    }
  }
  
  export default GetRepos; 
  