import Head from 'next/head'
import HolidayCard from '../components/HolidayCard'

const cardContent = (
  <>
    <p>Dear family member,</p>
    <p>I made this website so I wouldn't have to buy multiple cards.</p>
    <p>
      Wish I could be there this year and I hope that 2022 brings us more
      opportunities to spend quality family time.
    </p>
    <p>
      I hope you find this present to make finding your phone, keys, and way
      through life just a bit easier. Unless I didn't buy enough and ran out...
      in that case please enjoy the cash.
    </p>
    <p style={{ textAlign: 'right' }}>
      Merry Christmas,
      <br />
      Scott
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
