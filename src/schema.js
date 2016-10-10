import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString
} from 'graphql';

const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    songs: {
      type: new GraphQLList(Song)
    }
  })
});

const Song = new GraphQLObjectType({
  name: 'Song',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    viewer: {
      type: User,
      resolve(parent, args, context) {
        console.log(parent, args, context);
        return {
          id: '0',
          name: 'Beyonce'
        }
      }
    }
  })
});

let Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
