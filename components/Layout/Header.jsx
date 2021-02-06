import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import NextLink from '../NextLink'
import CardMini from '../CardMini'
import { PRESETS } from '../../constants/motion'
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
                <AnimatePresence>
                    {!isHome && (
                        <motion.div
                            className={styles.home}
                            {...PRESETS.scaleFade}
                        >
                            <NextLink href='/'>
                                <CardMini name='Scott' />
                            </NextLink>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className={styles.links}>
                    {links.map(({ href, label }) => {
                        const isActive = router.pathname === href
                        return (
                            <NextLink
                                key={href}
                                href={href}
                                className={clsx(
                                    styles.link,
                                    isActive && styles.active,
                                    't-label'
                                )}
                            >
                                {label}
                            </NextLink>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}

export default Header
