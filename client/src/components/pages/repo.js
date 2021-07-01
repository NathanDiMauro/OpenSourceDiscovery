import React from 'react'
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

function GetRepo(props) {
  const REPOS = gql`
  query repo {
	repository(repo: "${props.repoName}"){
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
  }`;
  const { loading, error, data } = useQuery(REPOS);
  
  if (loading) return <p>Loading...</p>;
  if (error) { 
      console.log(error);
      return <p>Error :(</p>;
  }
  if (data) {
    console.log(props.repoName)
    console.log(data.repository.name)
    return (
        <h3>Check Console</h3>
    );
  }
}

class Repo extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
            <h2>Repo: {this.props.match.params.repoName}</h2>
            <GetRepo repoName={this.props.match.params.repoName}/>
        </ApolloProvider>
    )}
}

export default Repo