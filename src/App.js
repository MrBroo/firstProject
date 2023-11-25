import './App.css';
import Navbar from './sections/Navbar';
import Header from './sections/Header';
import FirstSection from './sections/FirstSection'
import SecondSection from './sections/SecondSection'


export default function App() {

  return (
    <div>
      <div style={{ background: '#002547' }}>
        <Navbar />
        <Header />
      </div>
      <div>
        <FirstSection />
      </div>
      <div>
        <SecondSection />
      </div>
    </div>
  )
}