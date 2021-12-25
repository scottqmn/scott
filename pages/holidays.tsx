import Head from 'next/head'
import HolidayCard from '../components/HolidayCard'

const cardContent = (
  <>
    <p>I made this website so I wouldn't have to buy multiple cards.</p>

    <p style={{ textAlign: 'right' }}>
      Sincerely,
      <br />
      <span>Scott</span>
    </p>
  </>
)

const Holiday: React.FC = () => {
  return (
    <>
      <Head>
        <title>Holiday Card</title>
        <meta property='og:title' content='Holiday Card' />
        <meta property='og:type' content='article' />
        <meta property='og:image' content='https://heyscott.com/og_image.jpg' />
        <meta property='og:url' content='https://heyscott.com/holidays' />
        <meta name='twitter:card' content='summary_large_image'></meta>
      </Head>
      <HolidayCard heading='Happy Holidays!' content={cardContent} />
    </>
  )
}

export default Holiday
