import React from 'react'

const mainStyle={
  "paddingLeft": "3%",
  "paddingRight": "5%"
}
class App extends React.Component {
  render() {
    return (
      <div style={mainStyle}>
        <h1>Welcome!</h1>
        <p>The goal of this project is to make it easier for Asurion internal employees to find extra projects to work. 
          The work split at Asurion is 80-20 where 80% of an employees time is supposed to be spent on your day to day work. 
          Whether that’s completely tickets, developing new features, QA testing, or monitoring deployments. The other 20 percent 
          of your time can be spent working on other projects that aren’t directly related to your work. These projects have to help the 
          company in some way. There have already been some amazing projects at the company that have come out of thew 80-20 split. Atom 
          for instance has become a cornerstone of Wolfpack operations and was originally developed as a side project. These side projects 
          also help avoid burnout and stress, by giving employees a chance to step away from everyday task and work on something else beneficial. 
          It is currently hard to find out what open source projects are being worked on at Asurion. You either have ti hear about it from a 
          coworker or happen to randomly stumble across it while searching through Jira. That is why I have developed this app. I wanted to make it 
          easier for to find projects that might excite people. </p>
          
          <h4>Next Features:</h4>
            <ul>
              <li>Better UI</li>
              <ul>
                <li>I am a backend engineer. Front end work gives me migraines and makes me want to throw my laptop out the window. Someone with 
                  front end skills far better then mine could defiantly come in and clean up the UI</li>
              </ul>
              <li>Documentation</li>
              <ul>
                <li>This project has been worked on sporadically for the last 2 months. Documentation was not a priority at all. I simply wanted 
                  to get the basic starting point of the project done and polish it into a presentable state.</li>
              </ul>
              <li>Search feature</li>
              <ul>
                <li>Add a search feature to allow users to search for repos baasd of lanuages and topics</li>
              </ul>
              <li>Place ReadMe on repo page</li>
              <ul>
                <li>The backend and frontend are already in place to put a repos readme on their repo page. The only issue is that a majority
                  of readme's are written in markup. We need someway to convert markup to plain text
                </li>
              </ul>
            </ul>
          
      </div>
    )
  }
}
export default App