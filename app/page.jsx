import  './page.css'
import Nav from './components/nav/nav'
import { Josefin_Sans } from 'next/font/google'

export default function Home() {
  return (
    <main className="main">
        <div className="main__content">
          <h1 className='main__title'>Hello World!</h1>
          <h2 className='main__subtitle'>It's My Portfolio</h2>
        </div>
    </main>
  )
}