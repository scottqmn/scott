import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../styles/components/Layout.module.scss'

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div className={clsx(styles.container, sidebar && styles.closed)}>
      <header className={clsx(styles.header, styles.asdf)}>Scott Nguyen</header>
      <aside className={styles.aside}>aside aside</aside>
      <main className={styles.main}>
        {children}
        <button type='button' onClick={() => setSidebar((curr) => !curr)}>
          Sidebar
        </button>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
