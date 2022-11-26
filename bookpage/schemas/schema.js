import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import books from './books';
import stores from './stores';
import header from './header';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    books,
    stores,
    header
  ]),
})
