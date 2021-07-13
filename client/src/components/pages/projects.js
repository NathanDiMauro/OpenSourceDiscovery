import React from 'react'
import RepoCard from '../card'
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

function Repos(args) {
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

const cardColStyle = {
  "marginLeft": "2%",
  "marginRight": "5%"
}

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
    temp.push(<Repos pgNum={this.state.page}/>);
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