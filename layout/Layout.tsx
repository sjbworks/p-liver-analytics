import Head from 'next/head'

type Props = {
  children: React.ReactNode
  title?: string
}

export const Layout = ({children, title = "default"}: Props)=>{
  <div>
    <Head>
      <title>{ title }</title>
    </Head>
    <main>
      { children }
    </main>
    <footer>
      {/* footer */}
    </footer>
  </div>
}