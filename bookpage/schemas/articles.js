export default {
  name: 'articles',
  title: 'Articles',
  type: 'document', 
  fields: [
    { 
      name: 'id',
      title: 'ID',
      type: 'number'
    },
    { 
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    { 
      name: 'text',
      title: 'Text',
      type: 'string'
    },
    { 
      name: 'date',
      title: 'Date',
      type: 'string'
    },
    { 
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}