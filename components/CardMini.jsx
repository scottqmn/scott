import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import * as VanillaTilt from 'vanilla-tilt'
import RatioContainer from './RatioContainer'
import styles from '../styles/components/CardMini.module.scss'

const CardMini = ({ name }) => {
    const cardRef = useRef(null)

    useEffect(() => {
        const { current } = cardRef
        if (current) {
            VanillaTilt.init(current, {
                max: 20,
                startX: 25,
                startY: 10,
                speed: 10,
                reverse: true,
                reset: false,
                transition: true,
                axis: 'x',
                'mouse-event-element': styles.cardWrap,
            })
        }

        return () => {
            current?.vanillaTilt.destroy()
        }
    }, [])

    return (
        <div ref={cardRef} className={styles.cardWrap}>
            <RatioContainer ratio={0.618}>
                <div className={styles.card}>
                    <h1 className={clsx(styles.name, 't-h4')}>{name}</h1>
                </div>
            </RatioContainer>
        </div>
    )
}

CardMini.propTypes = {
    name: PropTypes.string.isRequired,
}

export default CardMini
