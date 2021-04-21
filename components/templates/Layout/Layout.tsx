import Head from 'next/head'
import { Footer } from './components'

type Props = {
  children: React.ReactNode
  title?: string
}

export const Layout = ({ children, title = 'default' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
