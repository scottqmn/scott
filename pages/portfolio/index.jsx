import PropTypes from 'prop-types'
import { Client, Predicates } from '../../utils/prismic'
import Layout from '../../components/Layout'
import ItemList from '../../components/ItemList'
import ItemGrid from '../../components/ItemGrid'

const Portfolio = ({ prismicData }) => {
    const { work, projects, tags } = prismicData
    return (
        <Layout>
            <ItemList items={work} />
            <ItemGrid projects={projects} tags={tags} />
        </Layout>
    )
}

Portfolio.propTypes = {
    prismicData: PropTypes.shape({
        work: PropTypes.array,
        projects: PropTypes.array,
        tags: PropTypes.array,
    }),
}

export const getServerSideProps = async (context) => {
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
