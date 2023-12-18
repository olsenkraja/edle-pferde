import Link from 'next/link'
import { reader } from '../reader'
import './styles.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const socialLinks = await reader.singletons.socialLinks.read()
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <header>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </header>
        {children}
        <hr />
        <footer>
          <h2>Find us on</h2>
          <ul>
            {socialLinks.facebook && (
              <li>
                <a
                  href={`https://facebook.com/${socialLinks.facebook}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
            )}

            {socialLinks.instagram && (
              <li>
                <a
                  href={`https://instagram.com/${socialLinks.instagram}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </footer>
      </body>
    </html>
  )
}
