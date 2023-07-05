import Image from 'next/image'
import { Geo } from 'next/font/google'

const geo = Geo(
  {
    subsets:['latin'],
    weight:'400'
  }
)
export default function Home() {
  return (
      <div className={geo.className}>
<h1 className='text-center text-2xl text-white'>hello world</h1>
      </div>
  )
}
 