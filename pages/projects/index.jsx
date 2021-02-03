import PropTypes from 'prop-types'
import { Client, Predicates } from '../../utils/prismic'
import Layout from '../../components/Layout'
import ItemGrid from '../../components/ItemGrid'

const Projects = ({ projects, tags }) => {
    return (
        <Layout>
            <ItemGrid projects={projects} tags={tags} />
        </Layout>
    )
}

Projects.propTypes = {
    projects: PropTypes.array,
    tags: PropTypes.array,
}

export const getServerSideProps = async (context) => {
    const { req } = context

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

    return { props: { projects: projectRes.results, tags: tagRes.results } }
}

export default Projects
