import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sociallink from "./components/Sociallink";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact"; 
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Sociallink />
    </div>
  );
}
export default App;
