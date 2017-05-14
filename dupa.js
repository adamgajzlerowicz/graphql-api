import {graphql, buildSchema} from 'graphql';
import mysql from 'mysql';

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123',
    database : 'crm'
});
connection.connect();

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    dupa(id: Int): String
  }
`);

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

async function asyncFunction() {
    await new Promise((res)=>{
        setTimeout(()=>{
            console.log(1);
            res();
        }, 0);
    });
    console.log('2');
}
asyncFunction();

let root = {
    dupa: ({id}) => {
        return 'dupa ' + id;
    },
};
const query = '{ dupa(id: 12)}';
const dupa = graphql(schema, query, root).then((response) => {
    console.log(response);
});


export {dupa};