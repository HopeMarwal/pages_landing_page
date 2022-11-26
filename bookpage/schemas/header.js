export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'greeting',
      title: 'Greeting',
      type: 'string'
    },
    {
      name: 'btnText',
      title: 'BtnText',
      type: 'string'
    },
    {
      name: 'linkText',
      title: 'LinkText',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'info',
      title: 'Info',
      type: 'array',
      of: [
        {
          title: 'Info',
          name: 'info',
          type: 'object',
          fields: [
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
          ]
        },
      ]
    }
  ]
}