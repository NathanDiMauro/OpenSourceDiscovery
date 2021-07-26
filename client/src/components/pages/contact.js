import React from 'react'
import RepoCard from '../card'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    createHttpLink,
    gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

localStorage.setItem('token', "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");

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function ExchangeRates() {
  const EXCHANGE_RATES = gql`
  query{
    organization(login: "asurion") {
      repositories(last: 3) {
        nodes {
          object(expression: "master:README.md") {
            ... on Blob {
                text
            }
          }
          name,description,url,createdAt,
          owner{
            login,
            url
          },
          languages(first: 3){
              nodes{
                  name
              }
          },
          repositoryTopics(first: 3){
            nodes{
                topic{
                    name
                }
            }
          }
          object(expression: "master:README.md") {
            ... on Blob {
                text
            }
          }
        }
      }
    }
  }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    for (let i = 0; i < 2; i++) {
      console.log(data.organization.repositories.nodes[0].languages.nodes[i].name);
    }
    for (let i = 0; i < 3; i++) {
      console.log(data.organization.repositories.nodes[0].repositoryTopics.nodes[i].topic.name);
    }
    return (
    <div>
      <RepoCard title={data.organization.repositories.nodes[0].name} ownerUrl={data.organization.repositories.nodes[0].owner.url} 
      owner={data.organization.repositories.nodes[0].owner.login} description={data.organization.repositories.nodes[0].description} 
      url={data.organization.repositories.nodes[0].url } />

      
      <h4>{data.organization.repositories.nodes[0].name}| From: <a href={data.organization.repositories.nodes[0].owner.url} target="_blank" rel="noreferrer"> {data.organization.repositories.nodes[0].owner.login} </a> |Created: {data.organization.repositories.nodes[0].createdAt}</h4>
      <p>{data.organization.repositories.nodes[0].description}</p>
      <a href={data.organization.repositories.nodes[0].url} target="_blank" rel="noreferrer">github link</a>
      <h5>Lanuages: </h5>
      <ul>
        <li>{data.organization.repositories.nodes[0].languages.nodes[0].name}</li>
        <li>{data.organization.repositories.nodes[0].languages.nodes[1].name}</li>
      </ul>
      <h5>Topics: </h5>
      <ul>
        <li>{data.organization.repositories.nodes[0].repositoryTopics.nodes[0].topic.name}</li>
        <li>{data.organization.repositories.nodes[0].repositoryTopics.nodes[1].topic.name}</li>
        <li>{data.organization.repositories.nodes[0].repositoryTopics.nodes[2].topic.name}</li>
      </ul>
      <h5>Read Me:</h5>
      <p>{data.organization.repositories.nodes[0].object.text}</p>
    </div>
    );
  }
}
class Contact extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h2>Pulling from github GraphQL</h2>
        <ExchangeRates />
      </ApolloProvider>
    )}
}
export default Contact