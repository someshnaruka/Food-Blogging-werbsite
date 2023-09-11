import './App.css';
import About from './components/About';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
     <Hero></Hero>
     <About></About>
     <Carousel></Carousel>
     <Footer></Footer>
    </div>
  );
}

export default App;
