
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import ChooseUs from './Components/ChooseUs';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Services/>
      <About/>
      <ChooseUs/>
      <Footer/>
      
      
       
    </div>
  );
}

export default App;
