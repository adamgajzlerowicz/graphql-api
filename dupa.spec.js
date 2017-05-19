import test from 'ava';
import {schema} from './dupa';
import {graphql} from 'graphql';

test.cb('Test graphql', t => {

    const query =
        'query dupa { ' +
        'Terrible: company(id: "1"){...companyDetails, users {id, firstName}}' +
        'Great: company(id: "2"){...companyDetails, users {id, firstName}}}' +
        '' +
        'fragment companyDetails on Company {id, name, description}';
    console.log(query);

    graphql(schema, query, root).then((response) => {
        console.log(response);
        t.truthy(typeof response === 'object');
        t.end();
    });

});
