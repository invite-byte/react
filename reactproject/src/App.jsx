import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navsection from "./file1"
import Footer from "./footer"
import Home from "./Home";
import Ride from "./rides";
import About from "./About";
import Contact from "./Contact";
import Booking from "./Booking";
import ScrollToTop from "./ScrollTo Top";


function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ backgroundColor: "#e6f2ff"}}>
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <ScrollToTop/>
         <Navsection user={user} setUser={setUser}/>
         <main style={{ flex: 1 }}>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/rides" element={<Ride/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/ticket" element={<Booking/>}/>

          </Routes>
        </main>
        <Footer/>
      </div>  
    </Router>
    
    
    
    
    </div>
  )
}
 
 
export default App
