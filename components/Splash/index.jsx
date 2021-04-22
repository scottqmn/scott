import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.scss'

const Message = ({ type, children }) => {
  const isTyping = useMemo(() => type === 'typing', [type])

  const Tag = isTyping ? 'button' : 'div'

  const loading = (
    <div className={styles.dots}>
      <div className='fade-in-out' />
      <div className='fade-in-out' />
      <div className='fade-in-out' />
    </div>
  )

  return (
    <div className={styles.wrap}>
      <Tag
        className={clsx(styles.bubble, styles[type])}
        role={isTyping ? 'button' : undefined}
      >
        <div className={styles.content}>{isTyping ? loading : children}</div>
      </Tag>
    </div>
  )
}

Message.propTypes = {
  type: PropTypes.oneOf(['received', 'sent', 'typing']).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

const Splash = () => {
  const [step, setStep] = useState(0)

  const renderStep = () => {
    switch (step) {
      case 0:
        break
      case 1:
      default:
    }

    return (
      <div className={styles.step}>
        <Message type='sent'>Hey Scott</Message>
        <Message type='received'>
          who is this who is this who is this who is this
        </Message>
        <Message type='typing' />
      </div>
    )
  }

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>{renderStep()}</div>
    </div>
  )
}

export default Splash
