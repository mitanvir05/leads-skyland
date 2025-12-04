import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LeadFeatures from "./components/LeadFeatures";
import LeadsHero from "./components/LeadsHero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <LeadsHero />
      <LeadFeatures />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
