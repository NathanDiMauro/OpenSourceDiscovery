const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const org = require('./config.json').org
const token = require('./config.json').token

// Repository Type
const repositoryType = new GraphQLObjectType({
  name: 'repository',
  fields: () => ({
    name: {type: GraphQLString },
    description: {type: GraphQLString },
    html_url: {type: GraphQLString },
    created_at: {type: GraphQLString},
    updated_at: {type: GraphQLString},
    owner: {type: ownerType},
    languages_url: {type: GraphQLString}
  })
});

//Owner Type
const ownerType = new GraphQLObjectType({
  name: 'owner',
  fields: () => ({
    login: {type: GraphQLString },
    html_url: {type: GraphQLString }
  })
});

//Lanuage Type
const languageType = new GraphQLObjectType({
  name: 'language',
  fields: () => ({
    name: {type: GraphQLString}
  })
});

//contributor Type
const contributorType = new GraphQLObjectType({
  name: 'contributor',
  fields: () => ({
    login: {type: GraphQLString}
  })
});

//topic Type
const topicsType = new GraphQLObjectType({
  name: 'topics',
  fields: () => ({
    names: {type: new GraphQLList(GraphQLString)}
  })
});

//readme Type
const readmeType = new GraphQLObjectType({
  name: 'readme',
  fields: () => ({
    html_url: {type: GraphQLString},
    content: {type: GraphQLString}
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    repository: {
      type: repositoryType,
      args: {
        repo: {type: GraphQLString}
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.github.com/repos/${org}/${args.repo}`, {headers: {'Authorization':token}})
          .then(res => res.data)
      }
    },
    repositories: {
      type: new GraphQLList(repositoryType),
      resolve(parent, args) {
        return axios
          .get(`https://api.github.com/orgs/${org}/repos`, {headers: {'Authorization':token}})
          .then(res => res.data);
      }
    },
    languages: {
      type: new GraphQLList(languageType),
      args: {
        repo: {type: GraphQLString}
      },
      resolve(parent, args){
        return axios
          .get(`https://api.github.com/repos/${org}/${args.repo}/languages`, {headers: {'Authorization':token}})
          .then(res => res.data)
          .then(data => Object.keys(data).map(key => {return {name:key}}))
      }
    },
    contributors: {
      type: new GraphQLList(contributorType),
      args: {
        repo: {type: GraphQLString}
      },
      resolve(parent, args){
        return axios
          .get(`https://api.github.com/repos/${org}/${args.repo}/contributors`, {headers: {'Authorization':token}})
          .then(res => res.data)
      }
    },
    topics: {
      type: topicsType,
      args: {
        repo: {type: GraphQLString}
      },
      resolve(parent, args){
        let config = {
          headers: {
            Accept: "application/vnd.github.mercy-preview",
            'Authorization': token
          }
        }
        return axios
          .get(`https://api.github.com/repos/${org}/${args.repo}/topics`, config)
          .then(res => res.data)
      }
    },
    readme: {
      type: readmeType,
      args: {
        repo: {type: GraphQLString}
      },
      resolve(parent, args){
        return axios
          .get(`https://api.github.com/repos/${org}/${args.repo}/readme`,{headers: {'Authorization':token}})
          .then(res => res.data)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});