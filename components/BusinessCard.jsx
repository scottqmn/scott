import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../styles/components/BusinessCard.module.scss'
import CodeSVG from '../public/code.svg'

const BusinessCard = ({ name, title }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })

    const calcRotation = (e) => {
        const { pageX, pageY, target } = e

        const { width, height, x, y } = target.getBoundingClientRect()

        setRotation({
            x: width / (pageX - x),
            y: height / (pageY - y),
        })
    }

    const resetRotation = () => {
        setRotation({
            x: 0,
            y: 0,
        })
    }

    return (
        <div className={clsx(styles.outer, 'outer')}>
            <div className={clsx(styles.inner, 'inner')}>
                {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                <div
                    className={styles.card}
                    style={{
                        transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
                    }}
                    onMouseOver={calcRotation}
                    onMouseLeave={resetRotation}
                >
                    <div className={styles.icon}>
                        <CodeSVG />
                    </div>
                    <h1 className={clsx(styles.name, 't-h4')}>{name}</h1>
                    <div className={clsx(styles.title, 't-h6')}>{title}</div>
                </div>
            </div>
        </div>
    )
}

BusinessCard.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default BusinessCard
