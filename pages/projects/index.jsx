import PropTypes from 'prop-types'
import { Client, Predicates } from '../../utils/prismic'
import Layout from '../../components/Layout'
import ProductGrid from '../../components/ProductGrid'

const Projects = ({ projects, tags }) => {
    return (
        <Layout>
            <ProductGrid projects={projects} tags={tags} />
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
