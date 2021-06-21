const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Repository Type
const repositoryType = new GraphQLObjectType({
  name: 'repository',
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    url: { type: GraphQLString }
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
          .get(`https://api.github.com/repos/asurion/${args.repo}`)
          .then(res => res.data);
      }
    },
    repositories: {
      type: new GraphQLList(repositoryType),
      resolve(parent, args) {
        return axios
          .get('https://api.github.com/orgs/asurion/repos')
          .then(res => res.data);
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});