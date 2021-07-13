import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
class RepoCard extends React.Component {
    render(){
        let description = this.props.description
        if (description && description.length >= 150) {
            description = description.substring(0,150)+"..."
        }
        return(
            <Link style={linkStyle} to={'repo/'+this.props.title}>
                <Card border="dark" bg="dark" style={cardStyle}>
                    <Card.Body style={cardBodyStyle}>
                        
                            <Card.Title style={titleStyle}>{this.props.title}</Card.Title>
                            <Card.Text>
                                {description}
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
    "textDecoration": "none",
    "cursor": "default",
  }

const cardBodyStyle = {
    "height": "250px",
    "backgroundColor": "#c9c9c9",
  }

const buttonStyle = {
    "marginTop": "5%",
    "backgroundColor": "blueviolet",
    "borderColor": "blueviolet",
}

const cardStyle = {
    "marginTop": "15px",
}

const titleStyle = {
    "fontSize": "160%"
}