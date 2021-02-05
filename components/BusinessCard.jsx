import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import * as VanillaTilt from 'vanilla-tilt'
import RatioContainer from './RatioContainer'
import styles from '../styles/components/BusinessCard.module.scss'
import CodeSVG from '../public/code.svg'

const BusinessCard = ({ name, title }) => {
    const cardRef = useRef(null)

    useEffect(() => {
        const { current } = cardRef
        if (current) {
            VanillaTilt.init(current, {
                max: 10,
                speed: 10,
                reverse: true,
                reset: false,
                transition: true,
                'full-page-listening': true,
            })
        }

        return () => {
            current?.vanillaTilt.destroy()
        }
    }, [])

    return (
        <div className={clsx(styles.outer, 'outer')}>
            <div className={clsx(styles.inner, 'inner')}>
                <div ref={cardRef} className={styles.cardWrap}>
                    <RatioContainer ratio={0.618}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <CodeSVG />
                            </div>
                            <h1 className={clsx(styles.name, 't-h4')}>
                                {name}
                            </h1>
                            <div className={clsx(styles.title, 't-h6')}>
                                {title}
                            </div>
                        </div>
                    </RatioContainer>
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
