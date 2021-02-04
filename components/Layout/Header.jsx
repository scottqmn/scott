import clsx from 'clsx'
import NextLink from '../NextLink'
import styles from '../../styles/components/Header.module.scss'

const Header = () => {
    const links = [
        { href: '/', label: 'Scott Nguyen', isHeading: true },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/projects', label: 'Projects' },
        { href: '/styleguide', label: 'Styleguide' },
    ]
    return (
        <header className={clsx(styles.header, 'outer')}>
            <div className={clsx(styles.links, 'inner')}>
                {links.map(({ href, label, isHeading }) => {
                    return (
                        <NextLink
                            key={href}
                            href={href}
                            className={clsx(
                                styles.link,
                                isHeading ? 't-h3' : 't-label c-primary65'
                            )}
                        >
                            {label}
                        </NextLink>
                    )
                })}
            </div>
        </header>
    )
}

export default Header
