import PropTypes from 'prop-types'
import { Client, Predicates } from '../utils/prismic'
import Layout from '../components/Layout'
import { RichText } from '../components/Prismic'

const Index = ({ homepage, projects }) => {
  console.log(homepage, projects)
  return (
    <Layout>
      <div className='rte'>
        <RichText content={homepage.data.body} />
      </div>
    </Layout>
  )
}

Index.propTypes = {
  homepage: PropTypes.object,
  projects: PropTypes.object,
}

export const getServerSideProps = async (context) => {
  const { req } = context
  const homepage = await Client(req).getSingle('homepage')
  const projects = await Client().query([
    Predicates.at('document.type', 'project'),
  ])

  return { props: { homepage, projects } }
}

export default Index
