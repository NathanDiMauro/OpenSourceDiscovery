import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import GetLanuages from '../queries/getLanuages'
import GetTopics from '../queries/getTopics'
import GetRepo from '../queries/getRepo';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql'
});

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
                    <GetLanuages repoName={this.props.match.params.repoName}/>
                    <GetTopics repoName={this.props.match.params.repoName}/>
                </Col>
              </Row>
            </Container> 
          </ApolloProvider>
    )}
}

export default Repo

const sideStyle = {
  "paddingTop": "10%",
  "borderLeft": "4px solid black",
}
