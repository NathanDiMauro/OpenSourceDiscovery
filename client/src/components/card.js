import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class RepoCard extends React.Component {
    render(){
        return(
            <Link style={linkStyle} to={'repo/'+this.props.title}>
                <Card border="dark" bg="dark" style={cardStyle}>
                    <Card.Body style={cardBodyStyle}>
                        
                            <Card.Title style={titleStyle}>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                        <Button style={buttonStyle} href={'repo/'+this.props.title}>View on AOS</Button>
                    </Card.Body>
                </Card>
            </Link>)
    }
}
export default RepoCard

const linkStyle = {
    color: "black",
    "text-decoration": "none",
    "cursor": "default",
  }

const cardBodyStyle = {
    "height": "250px",
    "background-color": "#c9c9c9",
  }

const buttonStyle = {
    "margin-top": "5%",
    "background-color": "blueviolet",
    "border-color": "blueviolet",
}

const cardStyle = {
    "margin-top": "15px",
}

const titleStyle = {
    "font-size": "160%"
}