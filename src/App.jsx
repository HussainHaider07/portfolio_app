import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react"; // Step 1: Add the import [cite: 235]
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  
  useEffect(() => {
    
    document.title = "Hussain Haider | Portfolio";

    
    console.log("Welcome to my Software Engineering Portfolio!");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/skills"   element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;