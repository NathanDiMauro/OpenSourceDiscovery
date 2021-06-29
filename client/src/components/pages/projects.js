import React from 'react'
import RepoCards from '../cards'
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
    repositories(owner: "google"){
        name,
        html_url, 
        description,
        created_at,
        updated_at,
        owner{
        login,
        html_url
        },
        languages_url,
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
    var titles=[]
    var ownerUrls=[]
    var owners=[]
    var descriptions=[]
    var urls=[]
    
    for(let index=0; index<data.repositories.length; index++){
        var repo=data.repositories[index]
        console.log(repo)

        titles.push(repo.name)
        ownerUrls.push(repo.owner.html_url)
        owners.push(repo.owner.login)
        descriptions.push(repo.description)
        urls.push(repo.html_url)
       
        if (index%3===0 && index!==0 && index!==1)
        {
            cards.push(<RepoCards titles={titles} ownerUrls={ownerUrls} 
            owners={owners} descriptions={descriptions} 
            urls={urls} />);
            
            titles=[]
            ownerUrls=[]
            owners=[]
            descriptions=[]
            urls=[]
        }
    }
  }

    return (
        <>
            {cards}
        </>
    );
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