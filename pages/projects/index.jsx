import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import ProductGrid from '../../components/ProductGrid'

const getImgUrl = (index) =>
    `https://picsum.photos/id/${Math.floor(
        Math.random() * (100 + index)
    )}/300/300`

const getPrice = (index) => Math.floor(Math.random() * (100 + index)) + 1
const getDate = () => {
    const date = new Date()
    date.setMonth(Math.floor(Math.random() * 12))
    date.setYear(date.getFullYear() - Math.floor(Math.random() * 3))
    return date
}

const DUMMY_PROJECT = {
    title: 'Lorem Ipsum',
    subtitle: 'Dolor sit amet, consectetur adipiscing elit',
}

const getNewProject = (index) => ({
    ...DUMMY_PROJECT,
    imgUrl: getImgUrl(index),
    price: getPrice(index),
    date: getDate(),
})

const Projects = () => {
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
        <Layout>
            <ProductGrid projects={projects} showMore={showMore} />
        </Layout>
    )
}

export default Projects
