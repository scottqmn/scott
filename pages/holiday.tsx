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
        <title>holiday card 4 u</title>
      </Head>
      <HolidayCard heading='Happy Holidays!' content={cardContent} />
    </>
  )
}

export default Holiday
