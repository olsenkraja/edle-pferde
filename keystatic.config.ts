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
    horses: collection({
      columns: ['full_name', 'birth_year'],
      label: 'Horses',
      slugField: 'full_name',
      path: 'src/content/horses/*',
      format: {contentField: 'content'},
      schema: {
        full_name: fields.slug({name: {label: 'Full name'}}),
        family: fields.text({label: 'Family'}),
        gender: fields.select({
          label: 'Gender',
          options: [
            { label: 'Hengst', value: 'Hengst' },
            { label: 'Wallach', value: 'Wallach' },
            { label: 'Stute', value: 'Stute' },
          ],
          defaultValue: 'Hengst'
        }),
        profile_picture: fields.image({
          label: 'Profile picture',
          directory: 'src/assets/profile_picture/horses',
          publicPath: '@assets/profile_picture/horses/',
          validation: {
            isRequired: true
          },
        }),
        profile_picture_alt_text: fields.text({label: 'Profile picture / Alt text'}),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
            { label: 'Fro sale', value: 'for-sale' },
          ],
          defaultValue: 'active'
        }),
        birth_year: fields.text({
          label: 'Birth year',
        }),
        breed: fields.text({label: 'Breed'}),
        size: fields.text({label: 'Size'}),
        color: fields.text({label: 'Color'}),
        bio: fields.text({label: 'Bio', multiline: true}),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/horses',
              publicPath: '../../assets/images/horses/',
            },
          },
        }),
        father: fields.conditional(
          fields.checkbox({ label: 'Is the father our horse?' }),
          {
            true: fields.relationship({
              label: 'Father',
              collection: 'horses'
            }),
            false: fields.text({
              label: 'Father'
            }),
          }
        ),
        mother: fields.conditional(
          fields.checkbox({ label: 'Is the mother our horse?' }),
          {
            true: fields.relationship({
              label: 'Mother',
              collection: 'horses'
            }),
            false: fields.text({
              label: 'Mother'
            }),
          }
        ),
        fathers_father: fields.conditional(
          fields.checkbox({ label: 'Is the father\'s father our horse?' }),
          {
            true: fields.relationship({
              label: 'Father\'s father',
              collection: 'horses'
            }),
            false: fields.text({
              label: 'Father\'s father'
            }),
          }
        ),
        fathers_mother: fields.conditional(
          fields.checkbox({ label: 'Is the father\'s mother our horse?' }),
          {
            true: fields.relationship({
              label: 'Father\'s mother',
              collection: 'horses'
            }),
            false: fields.text({
              label: 'Father\'s mother'
            }),
          }
        ),
        mothers_father: fields.conditional(
          fields.checkbox({ label: 'Is the mother\'s father our horse?' }),
          {
            true: fields.relationship({
              label: 'Mother\'s father',
              collection: 'horses'
            }),
            false: fields.text({
              label: 'Mother\'s father'
            }),
          }
        ),
        mothers_mother: fields.conditional(
          fields.checkbox({ label: 'Is the mother\'s mother our horse?' }),
          {
            true: fields.relationship({
              label: 'Mother\'s mother',
              collection: 'horses'
            }),
            false: fields.text({
              label: 'Mother\'s mother'
            }),
          }
        ),
        children: fields.array(
          fields.relationship({
            label: 'Children',
            collection: 'horses'
          }),
          {
            label: 'Children',
            itemLabel: (item) => item.value || 'Please select an horse',
          }
        ),
      },
    }),
  },
});
