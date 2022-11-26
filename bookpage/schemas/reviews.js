export default {
  name: 'reviews',
  title: 'Reviews',
  type: 'document', 
  fields: [
    { 
      name: 'id',
      title: 'ID',
      type: 'number'
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    { 
      name: 'rating',
      title: 'Rating',
      type: 'string'
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
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}