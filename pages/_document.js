import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { GA_TRACKING_ID } from '../utils/gtag'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const isProduction = process.env.NODE_ENV === 'production'

    return { ...initialProps, isProduction }
  }

  render() {
    const { isProduction } = this.props

    return (
      <Html lang='en'>
        <Head>
          {/* Google Fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap'
            rel='stylesheet'
          />
          {/* Google Analytics */}
          {isProduction && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              {/* <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              /> */}
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
