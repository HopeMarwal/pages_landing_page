export default {
  name: 'books',
  title: 'Books',
  type: 'document',
  fields : [
    { 
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true}
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string'
    }
  ]
}