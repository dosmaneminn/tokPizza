import './App.css'
import BottomNav from './components/BottomNav'
import Hero from './components/Hero'
import DraggableGallery from './components/DraggableGallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedWaveDivider from './components/AnimatedWaveDivider'

function App() {
  return (
    <div className="app">
      <main>
        <Hero />

        {/* Wave: Hero → Gallery */}
        <AnimatedWaveDivider fillColor="charcoal" />

        <DraggableGallery />

        {/* Wave: Gallery → About */}
        <AnimatedWaveDivider fillColor="cream" flip={true} />

        <About />

        <Contact />

        {/* Wave: Contact → Footer */}
        <AnimatedWaveDivider fillColor="charcoal" />
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}

export default App
