import { useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import FocusTrap from 'focus-trap-react'
import { Button } from './Inputs'
import styles from '../styles/components/Modal.module.scss'

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
        <FocusTrap>
            <div className={styles.outer}>
                <button
                    className={styles.background}
                    type='button'
                    aria-label='Close modal'
                    onClick={close}
                    tabIndex={-1}
                />
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
            </div>
        </FocusTrap>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    close: PropTypes.func.isRequired,
}

export default Modal
