import {config, singleton, fields, collection} from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    articles: collection({
      columns: ['created_at'],
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      entryLayout: 'content',
      format: {contentField: 'content'},
      schema: {
        title: fields.slug({name: {label: 'Title'}}),
        created_at: fields.date({
          label: 'Created at',
          defaultValue: new Date().toISOString().split('T')[0],
          validation: {
            isRequired: true,
          },
        }),
        cover_image: fields.image({
          label: 'Cover image',
          directory: '/src/assets/cover_images/articles/',
          publicPath: '/src/assets/cover_images/articles/',
          validation: {
            isRequired: true,
          },
        }),
        horses: fields.array(
          fields.relationship({
            label: 'Select a horse in this article',
            collection: 'horses'
          }), {
            label: 'Horses in this article',
            // @ts-ignore
            itemLabel: props => props.value
          }
        ),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/articles/',
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
            {label: 'Hengst', value: 'Hengst'},
            {label: 'Wallach', value: 'Wallach'},
            {label: 'Stute', value: 'Stute'},
          ],
          defaultValue: 'Hengst'
        }),
        profile_picture: fields.image({
          label: 'Profile picture',
          directory: '/src/assets/profile_pictures/horses',
          publicPath: '/src/assets/profile_pictures/horses/',
          validation: {
            isRequired: true
          },
        }),
        profile_picture_alt_text: fields.text({label: 'Profile picture / Alt text'}),
        status: fields.select({
          label: 'Status',
          options: [
            {label: 'Active', value: 'active'},
            {label: 'Inactive', value: 'inactive'},
            {label: 'For sale', value: 'for-sale'},
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
          fields.checkbox({label: 'Is the father our horse?'}),
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
          fields.checkbox({label: 'Is the mother our horse?'}),
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
          fields.checkbox({label: 'Is the father\'s father our horse?'}),
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
          fields.checkbox({label: 'Is the father\'s mother our horse?'}),
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
          fields.checkbox({label: 'Is the mother\'s father our horse?'}),
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
          fields.checkbox({label: 'Is the mother\'s mother our horse?'}),
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
    photos: collection({
      columns: ['created_at'],
      label: 'Photos',
      slugField: 'id',
      path: 'src/content/photos/*',
      format: {contentField: 'alt_description'},
      schema: {
        id: fields.slug({
          name: {
            label: 'ID',
            defaultValue: Math.random().toString(36).slice(2)
          }
        }),
        photo: fields.image({
          label: 'Photo',
          directory: '/src/assets/gallery/photos/',
          publicPath: '/src/assets/gallery/photos/',
          validation: {
            isRequired: true,
          },
        }),
        alt_description: fields.mdx({
          label: 'Alt description',
        }),
        horses: fields.array(
          fields.relationship({
            label: 'Select a horse in this photo',
            collection: 'horses'
          }), {
            label: 'Horses in this photo',
            // @ts-ignore
            itemLabel: props => props.value
          }
        ),
        created_at: fields.date({
          label: 'Created at',
          defaultValue: new Date().toISOString().split('T')[0],
          validation: {
            isRequired: true,
          },
        }),
      },
    }),
    pages: collection({
      columns: ['title'],
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: {contentField: 'content'},
      schema: {
        title: fields.slug({name: {label: 'Title'}}),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/texts',
      schema: {
        about_text: fields.text({
          label: 'About text',
          multiline: true,
        }),
        horses_headline: fields.text({
          label: 'Horses headline',
        }),
        horses_description: fields.text({
          label: 'Horses description',
          multiline: true,
        }),
        about_headline: fields.text({
          label: 'About headline',
        }),
        about_description: fields.text({
          label: 'About description',
          multiline: true,
        }),
        gallery_headline: fields.text({
          label: 'Gallery headline',
        }),
        gallery_description: fields.text({
          label: 'Gallery description',
          multiline: true,
        }),
        footer: fields.text({
          label: 'Footer',
          multiline: true,
        }),
      }
    }),
    social_media: singleton({
      label: 'Social media',
      path: 'src/content/social_media',
      format: {data: 'json'},
      schema: {
        facebook: fields.text({
          label: 'Facebook',
          description: 'The Facebook handle (not full URL!)',
        }),
        instagram: fields.text({
          label: 'Instagram',
          description: 'The Instagram username (not full URL!)',
        }),
      },
    }),
    contact: singleton({
      label: 'Contact',
      path: 'src/content/contact',
      format: {data: 'json'},
      schema: {
        address: fields.text({
          label: 'Address',
          multiline: true
        }),
        email_address: fields.text({
          label: 'Email address',
        }),
        phone_number: fields.text({
          label: 'Phone number',
        }),
        mobile_phone_number: fields.text({
          label: 'Mobile phone number',
        }),
      },
    }),
  },
});
