import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import placeHolder from '../images/placeholder.svg'
import {Link} from 'react-router-dom'

class RepoCard extends React.Component {
    render(){
        return(
            <Card border="dark" style={{ width: '18rem' }} >
                <Link style={linkStyle} to={'repo/'+this.props.title}>
                    <Card.Img variant="top" src={placeHolder} />
                </Link>
                <Card.Body>
                    <Card.Title>{this.props.title}<a href={this.props.ownerUrl} target="_blank" rel="noreferrer">{this.props.owner}</a></Card.Title>    
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    <Button variant="primary" href={this.props.url} target="_blank" rel="noreferrer">View on Github</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default RepoCard

const linkStyle = {
    color: "black",
  }
 