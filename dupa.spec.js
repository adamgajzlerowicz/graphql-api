import test from 'ava';
import {schema} from './dupa';
import {graphql} from 'graphql';

test.cb('Test graphql', t => {

    const query = '{ user(id: "1"){firstName, company {id}}}';

    graphql(schema, query, root).then((response) => {
        console.log(response);
        t.truthy(response);
        t.end();
    });

});
