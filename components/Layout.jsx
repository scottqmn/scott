import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../styles/components/Layout.module.scss'

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(true)
  const toggleMenu = () => setSidebar((curr) => !curr)

  return (
    <div className={styles.grid}>
      <header className={clsx(styles.header, 'outer')}>
        <div className='inner'>Scott Nguyen</div>
      </header>
      {/* <aside className={styles.aside}>aside aside</aside> */}
      <main className={styles.main}>{children}</main>
      <footer className={clsx(styles.footer, 'outer')}>
        <div className='inner'>Footer</div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
