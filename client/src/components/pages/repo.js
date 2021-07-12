import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
        <p>Description goes here</p>
        <p>{window.atob(data.readme.content)}</p>
      </div>
    );
  }
}

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
    const repo = data.repository
    const update = new Date(repo.updated_at)
    return (
      <div>
        <Container>
          <Row style={titleStyle}>
            <Col>
              <h2>{props.repoName}</h2>
            </Col>
            <Col>
              <p style={updateStyle}>Last updated on {update.toDateString()}</p>
            </Col>
          </Row>
        </Container>
        <a href={repo.html_url} target="_blank" rel="noreferrer">github.com/{props.repoName}</a>
        <GetReadMe repoName={props.repoName}/>
      </div>
    );
  }
}

const titleStyle = {
  "padding-top": "3%",
}

const updateStyle = {
  "padding-top": "2%",
  "font-weight": "bold",
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
    
    for(let index=0; index<data.topics.names.length; index++){
      var topicNames = data.topics.names[index]

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
            <Container>
              <Row>
                <Col lg={10}>
                  <GetRepo repoName={this.props.match.params.repoName}/>
                </Col>
                <Col style={sideStyle}>
                    <h4>Lanuages:</h4>
                    <GetLanuages repoName={this.props.match.params.repoName}/>
                    <h4>Topics:</h4>
                    <GetTopics repoName={this.props.match.params.repoName}/>
                </Col>
              </Row>
            </Container> 
          </ApolloProvider>
    )}
}

export default Repo

const sideStyle = {
  "padding-top": "10%",
  "border-left": "4px solid black",
}
