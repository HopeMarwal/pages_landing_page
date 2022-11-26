import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import books from './books';
import stores from './stores';
import header from './header';
import chapters from './chapters';
import reviews from './reviews';
import articles from './articles';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    books,
    stores,
    header,
    chapters,
    reviews,
    articles
  ]),
})
