import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import placeHolder from '../images/placeholder.svg'
import {Link} from 'react-router-dom'

class RepoCards extends React.Component {
    render(){
        return(
        <CardDeck style={{ width: '100%' }}>
            <Card border="dark" style={cardStyle}>
                <Link style={linkStyle} to={'repo/'+this.props.titles[0]}>
                    <Card.Img variant="top" src={placeHolder} />
                </Link>
                <Card.Body>
                    <Link style={linkStyle} to={'repo/'+this.props.titles[0]}>
                        <Card.Title style={titleStyle}>{this.props.titles[0]}</Card.Title>
                        <Card.Text>
                            {this.props.descriptions[0]}
                        </Card.Text>
                    </Link>
                    <Button variant="primary" href={this.props.urls[0]} target="_blank" rel="noreferrer">View on Github</Button>
                    <Button style={buttonStyle} variant="primary" href={'repo/'+this.props.titles[0]}>View on AOS</Button>
                </Card.Body>
            </Card>
            <Card border="dark" style={cardStyle}>
                <Link style={linkStyle} to={'repo/'+this.props.titles[1]}>
                    <Card.Img variant="top" src={placeHolder} />
                </Link>
                <Card.Body>
                    <Link style={linkStyle} to={'repo/'+this.props.titles[1]}>
                        <Card.Title style={titleStyle}>{this.props.titles[1]}</Card.Title>
                        <Card.Text>
                            {this.props.descriptions[1]}
                        </Card.Text>
                    </Link>
                    <Button variant="primary" href={this.props.urls[1]} target="_blank" rel="noreferrer">View on Github</Button>
                    <Button style={buttonStyle} variant="primary" href={'repo/'+this.props.titles[0]}>View on AOS</Button>
                </Card.Body>
            </Card>
            <Card border="dark" style={cardStyle}>
                <Link style={linkStyle} to={'repo/'+this.props.titles[2]}>
                    <Card.Img variant="top" src={placeHolder} />
                </Link>
                <Card.Body>
                    <Link style={linkStyle} to={'repo/'+this.props.titles[2]}>
                        <Card.Title style={titleStyle}>{this.props.titles[2]}</Card.Title>
                        <Card.Text>
                            {this.props.descriptions[2]}
                        </Card.Text>
                    </Link>
                    <Button variant="primary" href={this.props.urls[2]} target="_blank" rel="noreferrer">View on Github</Button>
                    <Button style={buttonStyle} variant="primary" href={'repo/'+this.props.titles[0]}>View on AOS</Button>
                </Card.Body>
            </Card>
        </CardDeck>)
    }
}
export default RepoCards

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