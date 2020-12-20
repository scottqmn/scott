import clsx from 'clsx'
import styles from '../../styles/components/Header.module.scss'

const Header = () => {
    return (
        <header className={clsx(styles.header, 'outer')}>
            <div className='inner t-h3'>Scott Nguyen</div>
        </header>
    )
}

export default Header
