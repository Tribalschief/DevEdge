
import './test.module.css'
// import Header from '@/components/structure/Header' // Create these later
// import Footer from '@/components/structure/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Global font applied via globals.css */}
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}