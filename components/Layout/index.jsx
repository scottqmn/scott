// import { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import styles from '../../styles/components/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.grid}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
