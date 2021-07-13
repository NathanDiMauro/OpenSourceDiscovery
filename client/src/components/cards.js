import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import placeHolder from '../images/placeholder.svg'
import {Link} from 'react-router-dom'

class RepoCards extends React.Component {
    render(){
        const cards = []
        for (const [index] of this.props.titles.entries()) {
            cards.push(
                <Card border="dark" style={cardStyle}>
                    <Link style={linkStyle} to={'repo/'+this.props.titles[index]}>
                        <Card.Img variant="top" src={placeHolder} />
                    </Link>
                    <Card.Body>
                        <Link style={linkStyle} to={'repo/'+this.props.titles[index]}>
                            <Card.Title style={titleStyle}>{this.props.titles[index]}</Card.Title>
                            <Card.Text>
                                {this.props.descriptions[index]}
                            </Card.Text>
                        </Link>
                        <Button variant="primary" href={this.props.urls[index]} target="_blank" rel="noreferrer">View on Github</Button>
                        <Button style={buttonStyle} variant="primary" href={'repo/'+this.props.titles[0]}>View on AOS</Button>
                    </Card.Body>
                </Card>)
        }

        return(
        <CardDeck style={{ width: '100%' }}>
            {cards}
        </CardDeck>)
    }
}
export default RepoCards

const linkStyle = {
    color: "black",
    "textDecoration": "none"
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