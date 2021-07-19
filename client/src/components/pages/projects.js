import React from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import GetRepos from "../queries/getRepos"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql'
});

class Projects extends React.Component {
  constructor (props){
    super(props);
    
    this.state = {
      output: [],
      page: 1
    }
    
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore(){
    this.setState({page: this.state.page+1});
    let temp = this.state.output
    temp.push(<GetRepos pgNum={this.state.page}/>);
    this.setState({output: temp});
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          {this.state.output}
        </div>
        <button style={buttonStyle} onClick={this.loadMore}>Load more</button>
      </ApolloProvider>
    )}
}
export default Projects

const buttonStyle = {
  "marginLeft": "3%",
}