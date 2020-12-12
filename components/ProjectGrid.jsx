import { useState, useEffect } from 'react'
import clsx from 'clsx'
import Button from './Button'
import styles from '../styles/components/ProjectGrid.module.scss'

const getImgUrl = (index) =>
  `https://picsum.photos/id/${Math.floor(
    Math.random() * (100 + index)
  )}/300/300`

const getPrice = (index) => Math.floor(Math.random() * (100 + index)) + 1

const DUMMY_PROJECT = {
  title: 'Lorem Ipsum',
  subtitle: 'Dolor sit amet, consectetur adipiscing elit',
}

const getNewProject = (index) => ({
  ...DUMMY_PROJECT,
  imgUrl: getImgUrl(index),
  price: getPrice(index),
})

const ProjectGrid = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    for (let i = 0; i < 6; i += 1) {
      setProjects((curr) => [...curr, getNewProject(i)])
    }
  }, [])

  const showMore = () => {
    for (let i = 0; i < 3; i += 1) {
      setProjects((curr) => [...curr, getNewProject(i)])
    }
  }

  return (
    <div className='outer'>
      <div className='inner'>
        <div className={styles.grid}>
          {projects.map(({ title, subtitle, imgUrl, price }, i) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={i} className={styles.project}>
                <div className={styles.thumbnail}>
                  <img
                    className='of-cover'
                    src={imgUrl}
                    alt='random placeholder'
                  />
                </div>
                <div className={clsx(styles.title, 't-h4')}>{title}</div>
                <div className={clsx(styles.price, 't-h6')}>{price}</div>
                <div className={clsx(styles.subtitle, 't-subtitle')}>
                  {subtitle}
                </div>
              </div>
            )
          })}
        </div>
        <Button as='button' className={styles.showMore} onClick={showMore}>
          Show More
        </Button>
      </div>
    </div>
  )
}

export default ProjectGrid
