import {Rule} from 'sanity'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      validation: (Rule: Rule) => Rule.required().error('Required'),
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alt'}],
        },
      ],
    },
  ],
}
