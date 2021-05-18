import Head from 'next/head'
import { Footer, Header } from './components'

type Props = {
  children: React.ReactNode
  title?: string
}

export const Layout = ({ children, title = 'default' }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <title>p-liver-analytics</title>
        <link rel="icon" href="../components/assets/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta title="p-liver-analytics" />
        <meta name="og:title" content="p-liver-analytics" />
        <meta name="og:description" content="Tools and reporting for pococha liver." />
        <meta name="og:site_name" content="p-liver-analytics" />
        <meta name="og:image" content="" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />
      </Head>
      <Header title={title} />
      <main className="flex-grow w-full mx-auto md:w-sm max-w-screen-sm">{children}</main>
      <Footer />
    </div>
  )
}
