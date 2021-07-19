import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    useQuery,
    gql
} from "@apollo/client";
import GetContributors from '../queries/getContributors';

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
              <GetContributors repoName={props.repoName}/>
            </Col>
            <Col>
              <p style={updateStyle}>Last updated on {update.toDateString()}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href={repo.html_url} target="_blank" rel="noreferrer">github.com/{props.repoName}</a>
            </Col>
          </Row>
        </Container>
        <p style={middleStyle}>{repo.description}</p>
        {/* <GetReadMe repoName={props.repoName}/> */}
      </div>
    );
  }
}
const middleStyle ={
  "paddingTop": "2%"
}

const titleStyle = {
  "paddingTop": "3%",
}

const updateStyle = {
  "paddingTop": "2%",
  "fontWeight": "bold",
}

export default GetRepo; 