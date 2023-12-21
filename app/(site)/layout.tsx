import './styles.css'
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";

export default async function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <title>Edle Pferde</title>
      <meta property="og:title" content="Edle Pferde" key="title" />
    </head>
    <body className="bg-noble-50">
    <SpeedInsights />
    <Header />
    {children}
    <hr />
    <Footer />
    </body>
    </html>
  )
}
