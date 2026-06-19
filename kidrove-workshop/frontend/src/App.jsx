import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkshopDetails from './components/WorkshopDetails'
import LearningOutcomes from './components/LearningOutcomes'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  )
}

export default App
