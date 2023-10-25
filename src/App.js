import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Card from "./components/card";
import ApiCall from "./components/ApiCall";
import CounterEx from "./components/counterEx";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/about" className="navLink">
            About
          </Link>
          <Link to={`/contact/9`} className="navLink">
            Contact
          </Link>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/about" element={<CounterEx />} />
            <Route path="/contact/:id" element={<Contact />} />
            <Route path="*" element={<h1>No page found</h1>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
