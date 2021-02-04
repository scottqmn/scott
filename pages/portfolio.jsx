import PropTypes from 'prop-types'
import { Client, Predicates } from '../utils/prismic'

import ItemList from '../components/ItemList'
import ItemGrid from '../components/ItemGrid'

const Portfolio = ({ prismicData }) => {
    const { work, projects } = prismicData
    return (
        <>
            <ItemList heading='Work' items={work} />
            <ItemGrid heading='Projects' items={projects} />
        </>
    )
}

Portfolio.propTypes = {
    prismicData: PropTypes.shape({
        work: PropTypes.array,
        projects: PropTypes.array,
        tags: PropTypes.array,
    }),
}

export const getStaticProps = async (context) => {
    const { req } = context

    const workRes = await Client(req).query([
        Predicates.at('document.type', 'work'),
    ])

    const projectRes = await Client(req).query(
        [Predicates.at('document.type', 'project')],
        {
            fetchLinks: [
                'tag.name',
                'tag.description',
                'tag.category',
                'tag.info',
            ],
        }
    )

    const tagRes = await Client(req).query([
        Predicates.at('document.type', 'tag'),
    ])

    const prismicData = {
        work: workRes.results,
        projects: projectRes.results,
        tags: tagRes.results,
    }

    return {
        props: { prismicData },
    }
}

export default Portfolio
