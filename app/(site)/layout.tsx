import './styles.css'
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";

export default async function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body style={{backgroundColor: 'rgb(242 243 241 / var(--tw-bg-opacity, 1))'}}>
    <SpeedInsights/>
    <Header/>
    {children}
    <hr/>
    <Footer/>
    </body>
    </html>
  )
}
