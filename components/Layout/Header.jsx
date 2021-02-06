import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import NextLink from '../NextLink'
import CardMini from '../CardMini'
import { GESTURES } from '../../constants/motion'
import styles from '../../styles/components/Header.module.scss'

const Header = () => {
    const router = useRouter()
    const [isHome, setIsHome] = useState(true)

    useEffect(() => {
        setIsHome(router.pathname === '/')
    }, [router])

    const links = [
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/projects', label: 'Projects' },
        { href: '/styleguide', label: 'Styleguide' },
    ]

    return (
        <header className={clsx(styles.outer, 'outer')}>
            <nav className={clsx(styles.inner, 'inner')}>
                <div className={clsx(styles.home, isHome && styles.hidden)}>
                    <NextLink href='/'>
                        <CardMini name='Scott' />
                    </NextLink>
                </div>
                <div className={styles.links}>
                    {links.map(({ href, label }) => {
                        const isActive = router.pathname === href
                        return (
                            <motion.div
                                key={href}
                                className={clsx(
                                    styles.link,
                                    isActive && styles.active,
                                    't-label'
                                )}
                                whileTap={GESTURES.tap}
                                whileHover={GESTURES.hover}
                            >
                                <NextLink href={href}>{label}</NextLink>
                            </motion.div>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}

export default Header
