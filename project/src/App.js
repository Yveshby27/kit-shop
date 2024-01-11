import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomeView from "./components/homeView"
import AboutUsView from "./components/aboutUsView"
import ContactUsView from "./components/contactUsView"
import '../src/styles/app.css'
const App=()=> {
  return (
    <div className="App">
     <Router>
    <Navbar></Navbar>
<Routes>
      <Route path="/" element={<HomeView></HomeView>}></Route>
      <Route path="/AboutUs" element={<AboutUsView></AboutUsView>}></Route>
      <Route path="/ContactUs" element={<ContactUsView></ContactUsView>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
