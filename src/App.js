import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/contactus";
import AboutUs from "./pages/aboutus";
import ClassState from "./pages/ClassState";
import FunctionalState from "./pages/FunctionalState";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/classState" element={<ClassState></ClassState>}></Route>
        <Route path="/functionalState" element={<FunctionalState></FunctionalState>}></Route>
      </Routes>
    </BrowserRouter>
    <h1 className="text-warning">Hello World</h1>
    </>
  );
}

export default App;
