import './styles.css'
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";

export default async function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <SpeedInsights />
    <Header />
    {children}
    <hr />
    <Footer />
    </body>
    </html>
  )
}
