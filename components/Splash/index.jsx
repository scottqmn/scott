import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.scss'

const MESSAGES = [
  [
    { type: 'sent', content: <h1>Hey Scott</h1> },
    { type: 'received', content: "Hey! I'm a little busy at the moment." },
    { type: 'received', content: 'Talk soon?' },
  ],
  [],
]

const Message = ({ children, type, prevType }) => {
  const isTyping = useMemo(() => type === 'typing', [type])
  const spacing = useMemo(() => {
    if (prevType) {
      return type === prevType ? styles.sameType : styles.diffType
    }
    return null
  }, [type, prevType])

  const Tag = isTyping ? 'button' : 'div'

  const loading = (
    <div className={styles.dots}>
      <div className='fade-in-out' />
      <div className='fade-in-out' />
      <div className='fade-in-out' />
    </div>
  )

  return (
    <div className={clsx(styles.wrap, spacing)}>
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
  prevType: PropTypes.oneOf(['received', 'sent', 'typing']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

const Splash = () => {
  const [step, setStep] = useState(0)

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {MESSAGES[step].map(({ type, content }, index) => {
          const prevType = MESSAGES[step][index - 1]?.type
          return (
            <Message key={content} type={type} prevType={prevType}>
              {content}
            </Message>
          )
        })}
      </div>
    </div>
  )
}

export default Splash
