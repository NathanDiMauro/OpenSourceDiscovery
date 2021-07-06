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
    return (
        <h3>Check Console</h3>
    );
  }
}

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
      console.log(langNames)

      languages.push(<p>{langNames}</p>)
    }
    return (
       <div>
         {languages}
       </div>
    );
  }
}

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
    console.log(data.topics.names[0])
    
    for(let index=0; index<data.topics.names.length; index++){
      var topicNames = data.topics.names[index]
      console.log(topicNames)

      topics.push(<p>{topicNames}</p>)
    }
    return (
       <div>
         {topics}
       </div>
    );
  }
}

class Repo extends React.Component {
    render() {
        return (
          <ApolloProvider client={client}>
            <h2>Repo: {this.props.match.params.repoName}</h2>
            <GetRepo style={midStyle} repoName={this.props.match.params.repoName}/>
            
            <div style={sideStyle}>
              <h4>Lanuages:</h4>
              <GetLanuages repoName={this.props.match.params.repoName}/>
              <h4>Topics:</h4>
              <GetTopics repoName={this.props.match.params.repoName}/>
            </div>
          </ApolloProvider>
    )}
}

export default Repo

const midStyle = {
  "float":"left"
}

const sideStyle = {
  "margin-left": "80%",
  "margin-right": "5%",
  "padding-left": "20px",
  "padding-bottom": "20%",
  "border-left": "4px solid black"
}