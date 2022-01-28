import '../styles/base.css'
import type { AppProps } from 'next/app'
import Layout, { setLayoutType } from '../components/layout'
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  setLayout?: setLayoutType
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const layoutOptions = Component?.setLayout
  return (
    <div>
      <Layout setLayout={layoutOptions}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
