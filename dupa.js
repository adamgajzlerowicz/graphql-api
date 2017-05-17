import {graphql, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLObjectType} from 'graphql';
import axios from 'axios';
//
// const UserType = new GraphQLObjectType({
//     name: 'User',
//     fields: {
//         id: {type: GraphQLString},
//         firstName: {type: GraphQLString},
//         age: {type: GraphQLInt}
//     }
// });
//
//
// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         user: {
//             type: UserType,
//             args: {
//                 id: {
//                     type: GraphQLString
//                 }
//             },
//             resolve(parentValue, args){
//                 return axios.get(`192.168.0.1:3000/users/${args.id}`)
//                     .then(response => response.data)
//             }
//         }
//     }
// });
//
//
// const schema = new GraphQLSchema({
//     query: RootQuery
// });
//
//
// const query = '{ user(id: "2"){firstName}}';
// const querrier = graphql(schema, query, root).then((response) => {
//     console.log(response);
// });

const lambda = () => {
    return axios.get('192.168.0.1:3000/users/1')
        .then(response => {
            console.log(response.data)
        });
};
lambda();
export {lambda};