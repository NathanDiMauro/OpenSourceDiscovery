import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import placeHolder from '../images/placeholder.svg'

class RepoCard extends React.Component {
    render(){
        return(
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeHolder} />
                <Card.Body>
                    <Card.Title>{this.props.title}<a href={this.props.ownerUrl} target="_blank" rel="noreferrer">{this.props.owner}</a></Card.Title>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    <Button variant="primary" href={this.props.url} target="_blank" rel="noreferrer">View on Github</Button>
                </Card.Body>
            </Card>)
    }
}
export default RepoCard
 