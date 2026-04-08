import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ComapanyLogo from './components/CompanyLogo.jsx'
import Purpose from './components/Purpose.jsx'
import FeaturesSections from './components/FeaturesSections.jsx'
import ScheduleSection from './components/ScheduleSection.jsx'
import MonitorSection from './components/MonitorSection.jsx'
import PricingSection from './components/PricingSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import TestimonialSection from './components/TestimonialSection.jsx'
import NewslatterSection from './components/NewslatterSection.jsx'
import FooterSection from './components/FooterSection.jsx'

function App() {
  
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      {/* background */}
    <div className='absolute inset-0 -z-10'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px]'></div>
    </div>
    {/* content */}
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <ComapanyLogo />
      <Purpose />
      <FeaturesSections />4
      <ScheduleSection />
      <MonitorSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialSection />
      <NewslatterSection />
      <FooterSection />
    </div>
    </main>
  )
}

export default App
