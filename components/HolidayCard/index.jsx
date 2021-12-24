import { useState } from 'react'
import clsx from 'clsx'
import Tilt from 'react-parallax-tilt'
import IconButton from '@mui/material/IconButton'
import RefreshIcon from '@mui/icons-material/Refresh'
import styles from './styles.module.scss'

const MAX_ANGLE = 5

const HolidayCard = () => {
  const [flipped, setFlipped] = useState(false)
  const toggleFlipped = () => {
    setFlipped((curr) => !curr)
  }

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <Tilt
          className={styles.cardOuter}
          tiltMaxAngleX={MAX_ANGLE}
          tiltMaxAngleY={MAX_ANGLE}
        >
          <div
            className={clsx(
              styles.cardInner,
              styles.absoluteFill,
              styles.opacityTransition
            )}
            style={{ opacity: flipped ? 0 : 1 }}
            aria-hidden={flipped}
          >
            {/* Video background */}
            <video
              className={clsx(styles.video, styles.absoluteFill)}
              src='assets/kona-tree.mp4'
              autoPlay
              loop
              muted
              playsInline
            />
            <h1 className={styles.heading}>Happy Holidays!</h1>
          </div>
          {/* Heading */}
          <div
            className={clsx(styles.cardInner, styles.opacityTransition)}
            style={{ opacity: flipped ? 1 : 0 }}
            aria-hidden={!flipped}
          >
            <div className={styles.cardContent}>
              <p>
                I made this website so I wouldn't have to buy multiple cards.
              </p>

              <p style={{ textAlign: 'right' }}>
                Sincerely,
                <br />
                <span>Scott</span>
              </p>
            </div>
          </div>
          {/* Content */}
        </Tilt>

        <IconButton
          type='button'
          onClick={toggleFlipped}
          aria-label='Flip card'
          className={styles.button}
          color='inherit'
        >
          <RefreshIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default HolidayCard
