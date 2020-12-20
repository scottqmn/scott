import clsx from 'clsx'
import styles from '../../styles/components/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={clsx(styles.footer, 'outer')}>
            <div className='inner'>Footer</div>
        </footer>
    )
}

export default Footer
