import test from 'ava';
import {lambda} from './dupa';

test('bar',  t => {
    lambda();
    return lambda().then(result => {
        t.is(result, 'unicorn');
    })
    t.is(true, true);
});
