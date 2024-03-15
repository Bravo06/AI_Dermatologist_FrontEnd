import Image from 'next/image'
import Navbar from './components/Navbar'
import MelanomaPrediction from './components/MelanomaPrediction'

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Navbar />
      <MelanomaPrediction />
    </main>
  )
}
