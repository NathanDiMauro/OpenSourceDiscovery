import React from 'react'

class Repo extends React.Component {
    repoName = "test"
    render() {
        return (
        <div>
            <h1>{this.repoName}</h1>
        </div>
    )}
}

export default Repo