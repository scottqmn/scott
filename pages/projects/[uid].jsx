import PropTypes from 'prop-types'
import { Client } from '../../utils/prismic'
import ProductDetail from '../../components/ProductDetail'
import projectPropTypes from '../../prop-types/project'

const ProjectDetail = ({ project }) => {
    return <ProductDetail project={project} />
}

export const getServerSideProps = async (context) => {
    const { req, params } = context
    const projectRes = await Client(req).getByUID('project', params.uid)
    return { props: { project: projectRes } }
}

ProjectDetail.propTypes = {
    project: PropTypes.shape(projectPropTypes),
}

export default ProjectDetail
