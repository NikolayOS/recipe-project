import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import "../src/index.css"
import Category from "./components/pages/Category";
import Recipe from "./components/pages/Recipe";

function App() {
  return (
  <Router basename="/recipe-project">
    <div>
      <Header/>
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/category/:name" element={<Category/>}/>
          <Route path="/meal/:id" element={<Recipe/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Routes>
      </main>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
