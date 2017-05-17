import {graphql, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLObjectType} from 'graphql';

const users = [
    {id: '1', firstName: 'bill', age: 41},
    {id: '2', firstName: 'samantha', age: 21},
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args){
                return users.find(el => el.id === args.id)
            }
        }
    }
});


const schema = new GraphQLSchema({
    query: RootQuery
});


const query = '{ user(id: "2"){firstName}}';
const querrier = graphql(schema, query, root).then((response) => {
    console.log(response);
});

export {querrier};