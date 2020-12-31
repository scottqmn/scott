import { useEffect } from 'react'
import PropTypes from 'prop-types'
import FocusTrap from 'focus-trap-react'
import { Button } from './Inputs'
import styles from '../styles/components/Modal.module.scss'
import clsx from 'clsx'

const Modal = ({ children, close, title }) => {
    const handleKeydown = (e) => {
        switch (e.keyCode) {
            case 27:
                close()
                break
            default:
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    })
    return (
        <div className={styles.outer}>
            <button
                className={styles.background}
                type='button'
                aria-label='Close modal'
                onClick={close}
            />
            <FocusTrap>
                <div className={styles.window}>
                    <div className={styles.bar}>
                        <div className={clsx(styles.title, 't-label')}>
                            {title}
                        </div>
                        <div className={styles.button}>
                            <Button type='button' onClick={close}>
                                Close
                            </Button>
                        </div>
                    </div>
                    <div className={styles.content}>{children}</div>
                </div>
            </FocusTrap>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    close: PropTypes.func.isRequired,
}

export default Modal
