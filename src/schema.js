import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString
} from 'graphql';

const db = {
  Users: [
    {
      name: "Beyonce",
      songs: ["Survivor", "Hold Up", "Freedom"]
    },
    {
      name: "Kelly",
      songs: ["Survivor", "Commander"]
    },
    {
      name: "Michelle",
      songs: ["Survivor"]
    },
  ],
  Songs: [
    {
      name: "Survivor",
      artists: ["Beyonce", "Kelly", "Michelle"]
    },
    {
      name: "Commander",
      artists: ["Kelly"]
    },
    {
      name: "Pretty Hurts",
      artists: ["Beyonce"]
    }
  ]
}

const songType = new GraphQLObjectType({
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

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    songs: {
      type: new GraphQLList(songType)
    }
  })
});

const findUserBy = (name) => {
  return db.Users.filter((user) => {
    return user.name === name;
  })[0]
}

const findSongBy = (name) => {
  return db.Songs.filter((song) => {
    return song.name === name;
  })[0]
}

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      users: {
        type: userType,
        args: {
          name: {
            type: GraphQLString
          },
          id: {
            type: GraphQLID
          }
        },
        resolve(root, {name}) {
          return findUserBy(name);
        }
      },
      songs: {
        type: songType,
        args: {
          name: {
            type: GraphQLString
          },
          id: {
            type: GraphQLID
          }
        },
        resolve(root, {name}) {
          return findSongBy(name);
        }
      }
    })
  })
})

export default schema;
