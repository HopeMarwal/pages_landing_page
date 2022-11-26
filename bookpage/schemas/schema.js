import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import books from './books';
import stores from './stores';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    books,
    stores
  ]),
})
