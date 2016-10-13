import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString
} from 'graphql';

import { db } from './data';

const veggieType = new GraphQLObjectType({
  name: 'Veggie',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    color: {
      type: GraphQLString
    },
    id: {
      type: GraphQLID
    }
  })
});

const findVeggieBy = (field, value) => {
  return db.Veggies.filter((veggie) => {
    if (veggie[field] === value) {
      return veggie;
    }
  })[0]
}

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: () => ({
      veggies: {
        type: veggieType,
        args: {
          field: {
            type: GraphQLString
          },
          value: {
            type: GraphQLString
          }
        },
        resolve(root, {field,value}) {
          console.log('field,value:', field, value);
          return findVeggieBy(field, value);
        }
      },
    })
  })
})

export default schema;
