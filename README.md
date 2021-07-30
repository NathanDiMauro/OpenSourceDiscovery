# Open Source Discovery

The goal of this project is to make it easier for Asurion internal employees to find extra projects to work. The work split at Asurion is 80-20 where 80% of an employees time is supposed to be spent on your day to day work. Whether that’s completing tickets, developing new features, QA testing, or monitoring deployments. The other 20 percent of your time can be spent working on other projects that aren’t directly related to your work. These projects have to help the company in some way. There have already been some amazing projects at the company that have come out of the 80-20 split. ATOM for instance has become a cornerstone of Wolfpack operations and was originally developed as a side project. These side projects also help avoid burnout and stress, by giving employees a chance to step away from everyday tasks and work on something else beneficial. It is currently hard to find out what open source projects are being worked on at Asurion. You either have to hear about it from a coworker or happen to randomly stumble across it while searching through Jira or Bitbucket. That is why I have developed this app. I wanted to make it easier for employees to find projects that might excite people. 

### Current Features:
   * View all repos of an organization
   * Get a unique page for each repo

### Next Features:
   * Better UI
       * I am a backend engineer. Front end work gives me migraines and makes me want to throw my laptop out the window. Someone with front end skills far better then mine could defiantly come in and clean up the UI
   * Documentation
       * This project has been worked on sporadically for the last 2 months. Documentation was not a priority at all. I simply wanted to get the basic starting point of the project done and polish it into a presentable state. 
   * Search feature
      * Add a search feature to allow users to search for repos baasd of lanuages and topics
   * Place ReadMe on repo page
      * The backend and frontend are already in place to put a repos readme on their repo page. The only issue is that a majority of readme's are written in markup. We need someway to convert markup to plain text
   * Stat front end and backend from one command
      * Write a script in package.json to start front and end back end together. Can use concurrently dev dependency

### How to contribute:
   #### 1. Install project
    git clone https://github.com/NathanDiMauro/OpenSourceDiscovery.git
     
   #### 2. Configure the app:
   Note: you will need to receive personal access token from github. [Tutorial](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
   
   1. Run the below command from the root directory of the project
     
     echo {\"org\":\"\", \"token\": \"Bearer \"} > config.json
     
   2. In config.json add the organization you would like to pull from in the empty quotes in 
   
     "org":""
     
   3. In config.json add you personal access token from github after the space following Bearer in 
      
     "token": "Bearer "

   #### 3. Start back end
     npm install
     npm start 

   #### 4. Start front end
      cd ./client
      npm install
      npm start
