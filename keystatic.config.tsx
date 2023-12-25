import {collection, component, config, fields, GitHubConfig, LocalConfig, singleton,} from '@keystatic/core'
import {ShowcaseYouTubeVideo} from './components/showcase-youtube-video'

const isProd = process.env.NODE_ENV === 'production'

const localMode: LocalConfig['storage'] = {
  kind: 'local',
}

const remoteMode: GitHubConfig['storage'] = {
  kind: 'github',
  repo: 'olsenkraja/edle-pferde'
}

function getDocumentBlock(imagePath: string, label = 'Content') {
  return fields.document({
    label,
    formatting: true,
    dividers: true,
    links: true,
    images: {
      directory: 'public/' + imagePath,
      publicPath: imagePath,
      schema: {
        title: fields.text({
          label: 'Caption',
        }),
      },
    },
    componentBlocks: {
      'youtube-video': component({
        label: 'YouTube Video',
        schema: {
          youtubeVideoId: fields.text({
            label: 'YouTube Video ID',
            description: 'The ID of the YouTube video (not the full URL)',
            validation: {
              length: {
                min: 1,
              },
            },
          }),
        },
        preview: (props) =>
          props.fields.youtubeVideoId.value ? (
            <ShowcaseYouTubeVideo videoId={props.fields.youtubeVideoId.value} />
          ) : (
            <p>Please enter a YouTube video ID</p>
          ),
      }),
    },
  })
}

export default config({
  storage: isProd ? remoteMode : localMode,
  ui: {
    brand: {
      name: 'Edle Pferde',
      mark: () => (
        <svg
          height={0}
          width={0}
        >
          <path d="" />
        </svg>
      ),
    },
    navigation: {
      content: ['posts', 'horses', 'albums'],
      defaults: ['texts', 'contact'],
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      entryLayout: 'content',
      slugField: 'title',
      path: 'content/posts/*',
      format: {contentField: 'content'},
      schema: {
        title: fields.slug({name: {label: 'Title'}}),
        content: getDocumentBlock('images/posts'),
        cover_image: fields.image({
          label: 'Cover image',
          directory: 'public/images/posts/cover_images',
          publicPath: '/images/posts/cover_images/',
          validation: {
            isRequired: true,
          },
        }),
        date: fields.date({
          label: 'Event date and time',
          defaultValue: new Date().toISOString().split('T')[0],
          validation: {
            isRequired: true
          },
        }),
        horses: fields.array(
          fields.relationship({
            label: 'Horses',
            collection: 'horses',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Horses',
            itemLabel: (item) => item.value || 'Please select an horse',
          }
        ),
      },
    }),
    horses: collection({
      label: 'Horses',
      slugField: 'nickname',
      path: 'content/horses/*',
      format: {contentField: 'content'},
      schema: {
        nickname: fields.slug({name: {label: 'Nickname'}}),
        full_name: fields.text({label: 'Full name'}),
        profile_picture: fields.image({
          label: 'Profile picture',
          directory: 'public/images/horses',
          publicPath: '/images/horses/',
        }),
        birthdate: fields.date({
          label: 'Birthdate',
        }),
        color: fields.text({label: 'Color'}),
        bio: fields.text({label: 'Bio', multiline: true}),
        content: getDocumentBlock('images/horses')
      },
    }),
    albums: collection({
      label: 'Albums',
      slugField: 'name',
      path: 'content/albums/*',
      format: {data: 'json'},
      schema: {
        name: fields.text({
          label: 'Album name',
        }),
        date: fields.date({
          label: 'Event date and time',
          defaultValue: new Date().toISOString().split('T')[0],
          validation: {
            isRequired: true
          },
        }),
        photos: fields.array(fields.image({
          label: 'Photo',
          directory: 'public/images/albums',
          publicPath: '/images/albums/',
        }))
      }
    })
  },
  singletons: {
    texts: singleton({
      label: 'Texts',
      path: 'content/texts',
      schema: {
        about: getDocumentBlock('images/about', 'About'),
        impressum: getDocumentBlock('images/impressum', 'Impressum'),
        footer: getDocumentBlock('images/footer', 'Footer'),
      }
    }),
    contact: singleton({
      label: 'Contact',
      path: 'content/contact',
      format: {data: 'json'},
      schema: {
        address: fields.text({
          label: 'Email address',
          multiline: true,
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
  },
})
