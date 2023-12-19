import { Entry } from '@keystatic/core/reader'
import keystaticConfig from '../keystatic.config'

type Showcase = Entry<(typeof keystaticConfig)['collections']['horses']>
type ShowcaseLinkProps = Extract<Showcase, { discriminant: 'link' }>['value']

export function ShowcaseLink({ url, label }: ShowcaseLinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}
