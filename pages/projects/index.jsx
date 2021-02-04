import PropTypes from 'prop-types'
import { Client, Predicates } from '../../utils/prismic'
import ItemGrid from '../../components/ItemGrid'

const Projects = ({ projects }) => {
    return <ItemGrid heading='Projects' items={projects} />
}

Projects.propTypes = {
    projects: PropTypes.array,
}

export const getStaticProps = async (context) => {
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
