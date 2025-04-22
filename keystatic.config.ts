import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        created_at: fields.date({
          label: 'Created at',
          defaultValue: new Date().toISOString().split('T')[0],
          validation: {
            isRequired: true,
          },
        }),
        cover_image: fields.image({
          label: 'Cover image',
          directory: 'src/assets/cover_images/articles',
          publicPath: '@assets/cover_images/articles/',
          validation: {
            isRequired: true,
          },
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/articles',
              publicPath: '../../assets/images/articles/',
            },
          },
        }),
      },
    }),
  },
});
