/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// import Router from 'next/router'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import 'normalize.css'
import Layout from '../components/Layout'
import '../styles/main.scss'
// import * as gtag from '../utils/gtag'
import { PRESETS } from '../constants/motion'
import metadata from '../constants/metadata'

// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function App({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta charSet='utf-8' />
                <meta
                    httpEquiv='Content-Type'
                    content='text/html; charset=utf-8'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta name='description' content={metadata.description} />
                <link rel='icon' href={metadata.favicon} />
                {/* Open Graph/Facebook */}
                <meta property='og:title' content={metadata.title} />
                <meta
                    property='og:description'
                    content={metadata.description}
                />
                <meta property='og:image' content={metadata.image} />
                <meta property='og:url' content={metadata.url} />
                <meta property='og:type' content='website' />
                {/* Twitter */}
                <meta name='twitter:title' content={metadata.title} />
                <meta
                    name='twitter:description'
                    content={metadata.description}
                />
                <meta name='twitter:image' content={metadata.image} />
                <meta name='twitter:card' content='summary' />
            </Head>
            <Layout>
                <AnimatePresence exitBeforeEnter>
                    <motion.div key={router.route} {...PRESETS.page}>
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    )
}

export default App
