import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Tilt from 'react-parallax-tilt'
import styles from './styles.module.scss'

const HolidayCard = () => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={clsx(styles.inner, styles.absoluteFill)}>
          Happy Holidays!
        </div>
        <video
          className={clsx(styles.video, styles.absoluteFill)}
          src='assets/kona-tree.mp4'
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  )
}

export default HolidayCard
