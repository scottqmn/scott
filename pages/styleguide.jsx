import clsx from 'clsx'
import styles from '../styles/pages/styleguide.module.scss'

const Styleguide = () => {
    return (
        <div className='outer'>
            <div className={clsx(styles.inner, 'inner')}>
                <div className={clsx(styles.section, 'rte')}>
                    <h1>
                        <span>Heading 1</span>
                        <span>Heading 1</span>
                    </h1>
                    <h2>
                        <span>Heading 2</span>
                        <span>Heading 2</span>
                    </h2>
                    <h3>
                        <span>Heading 3</span>
                        <span>Heading 3</span>
                    </h3>
                    <h4>
                        <span>Heading 4</span>
                        <span>Heading 4</span>
                    </h4>
                    <h5>
                        <span>Heading 5</span>
                        <span>Heading 5</span>
                    </h5>
                    <h6>
                        <span>Heading 6</span>
                        <span>Heading 6</span>
                    </h6>
                </div>
                <div className={styles.section}>
                    <p className='t-caption'>
                        <span>Caption</span>
                        <span>Caption</span>
                    </p>
                    <p className='t-body'>
                        <span>Body</span>
                        <span>Body</span>
                    </p>
                    <p className='t-label'>
                        <span>Label</span>
                        <span>Label</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Styleguide
