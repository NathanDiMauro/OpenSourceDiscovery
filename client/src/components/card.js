import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import placeHolder from '../images/placeholder.svg'
import {Link} from 'react-router-dom'

class RepoCard extends React.Component {
    render(){
        return(
            <Card border="dark" style={cardStyle}>
                <Link style={linkStyle} to={'repo/'+this.props.title}>
                    <Card.Img variant="top" src={placeHolder} />
                </Link>
                <Card.Body>
                    <Link style={linkStyle} to={'repo/'+this.props.title}>
                        <Card.Title style={titleStyle}>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Link>
                    <Button variant="primary" href={this.props.url} target="_blank" rel="noreferrer">View on Github</Button>
                    <Button style={buttonStyle} variant="primary" href={'repo/'+this.props.title}>View on AOS</Button>
                </Card.Body>
            </Card>)
    }
}
export default RepoCard

const linkStyle = {
    color: "black",
    "text-decoration": "none"
  }

const buttonStyle = {
    "margin-left": "15px",
}

const cardStyle = {
    "margin-top": "15px"
}

const titleStyle = {
    "font-size": "160%"
}