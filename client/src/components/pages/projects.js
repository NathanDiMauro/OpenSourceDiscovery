import React from 'react'
import RepoCard from '../card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql'
});

function Repos() {
  const REPOS = gql`
  query repos {
    repositories{
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
    var cards=[]
    
    for(let index=0; index<data.repositories.length; index++){
        var repo=data.repositories[index]
        console.log(repo)

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

const cardColStyle = {
  "margin-left": "2%",
  "margin-right": "5%"
}

class Projects extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h2>Pulling from my backend GraphQL</h2>
        <Repos />
      </ApolloProvider>
    )}
}
export default Projects