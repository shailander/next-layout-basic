import { ReactNode } from 'react'
import Footer from '../footer'
import Header from '../header'

export type setLayoutType = {
  showHeader: boolean
  showFooter: boolean
}

function Layout({
  children,
  setLayout,
}: {
  children: ReactNode
  setLayout?: setLayoutType
}): JSX.Element {
  return (
    <div>
      {setLayout?.showHeader && <Header />}
      <div
        className={`${setLayout?.showHeader ? 'mt-16' : ''} + ${
          setLayout?.showFooter ? 'mb-16' : ''
        }`}
      >
        {children}
      </div>
      {setLayout?.showFooter && <Footer />}
    </div>
  )
}
export default Layout
