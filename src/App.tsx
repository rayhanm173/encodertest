import Hero from './components/hero/Hero'
import DeskNav from './components/navbar/desktop/DeskNav'
import MobileNav from './components/navbar/mobile/MobileNav'
import TopNav from './components/topnav/TopNav'
import Feat from './components/features/Features'
import Review from './components/review/Review'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className=''>
      <TopNav/>
      <hr className='text-slate-700' />
      <DeskNav/>
      <MobileNav/>
      <Hero/>
      <Feat/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App