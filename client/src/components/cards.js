import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import placeHolder from '../images/placeholder.svg'

class RepoCards extends React.Component {
    render(){
        return(
        <CardDeck style={{ width: '100%' }}>
            <Card border="dark">
                <Card.Img variant="top" src={placeHolder} />
                <Card.Body>
                    <Card.Title>{this.props.titles[0]}/<a href={this.props.ownerUrls[0]} target="_blank" rel="noreferrer">{this.props.owners[0]}</a></Card.Title>
                    <Card.Text>
                    {this.props.descriptions[0]}
                    </Card.Text>
                    <Button variant="primary" href={this.props.urls[0]} target="_blank" rel="noreferrer">View on Github</Button>
                </Card.Body>
            </Card>
            <Card border="dark">
                <Card.Img variant="top" src={placeHolder} />
                <Card.Body>
                    <Card.Title>{this.props.titles[1]}/<a href={this.props.ownerUrls[0]} target="_blank" rel="noreferrer">{this.props.owners[0]}</a></Card.Title>
                    <Card.Text>
                    {this.props.descriptions[0]}
                    </Card.Text>
                    <Button variant="primary" href={this.props.urls[0]} target="_blank" rel="noreferrer">View on Github</Button>
                </Card.Body>
            </Card>
            <Card border="dark">
                <Card.Img variant="top" src={placeHolder} />
                <Card.Body>
                    <Card.Title>{this.props.titles[2]}/<a href={this.props.ownerUrls[0]} target="_blank" rel="noreferrer">{this.props.owners[0]}</a></Card.Title>
                    <Card.Text>
                    {this.props.descriptions[0]}
                    </Card.Text>
                    <Button variant="primary" href={this.props.urls[0]} target="_blank" rel="noreferrer">View on Github</Button>
                </Card.Body>
            </Card>
        </CardDeck>)
    }
}
export default RepoCards
 