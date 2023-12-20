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
      writing: ['pages', 'posts', 'horses', 'albums'],
      'Footer links': ['socialLinks'],
    },
  },
  collections: {
    pages: collection({
      label: 'Pages',
      entryLayout: 'content',
      slugField: 'title',
      path: 'content/pages/*',
      format: {contentField: 'content'},
      schema: {
        title: fields.slug({name: {label: 'Title'}}),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/pages',
            publicPath: '/images/pages/',
            schema: {
              title: fields.text({
                label: 'Caption',
                description:
                  'The text to display under the image in a caption.',
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
        }),
      },
    }),
    posts: collection({
      label: 'Posts',
      entryLayout: 'content',
      slugField: 'title',
      path: 'content/posts/*',
      format: {contentField: 'content'},
      schema: {
        title: fields.slug({name: {label: 'Title'}}),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts',
            publicPath: '/images/posts/',
            schema: {
              title: fields.text({
                label: 'Caption',
                description:
                  'The text to display under the image in a caption.',
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
        }),
        date: fields.date({
          label: 'Event date and time',
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
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/horses',
            publicPath: '/images/horses/',
            schema: {
              title: fields.text({
                label: 'Caption',
                description:
                  'The text to display under the image in a caption.',
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
        }), showcase: fields.blocks(
          {
            link: {
              label: 'Link',
              schema: fields.object({
                label: fields.text({
                  label: 'Label',
                  validation: {
                    length: {
                      min: 1,
                    },
                  },
                }),
                url: fields.url({label: 'URL'}),
              }),
              itemLabel: (item) => 'Link: ' + item.fields.label.value,
            },
            youtubeVideoId: {
              label: 'YouTube Video ID',
              schema: fields.text({
                label: 'YouTube Video ID',
                validation: {
                  length: {
                    min: 1,
                  },
                },
              }),
              itemLabel: (item) => 'YouTube ID: ' + item.value,
            },
          },
          {
            label: 'Showcase',
          }
        ),
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
    socialLinks: singleton({
      label: 'Social Links',
      path: 'content/social-links',
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
  },
})
