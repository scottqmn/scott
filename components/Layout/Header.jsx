import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import NextLink from '../NextLink'
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
    ]

    return (
        <header className={clsx(styles.outer, 'outer')}>
            <nav className={clsx(styles.inner, 'inner')}>
                <div className={clsx(styles.home, isHome && styles.hidden)}>
                    <NextLink href='/' className={styles.text}>
                        S
                    </NextLink>
                </div>
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
