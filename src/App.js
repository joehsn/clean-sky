import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Pricing, Features, Contact, About, Forbidden } from "./pages";
import { Navbar } from "./components";
import { ThemeProvider } from "react-bootstrap";

export default function App() {
  return (
    <ThemeProvider dir="ltr">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<Forbidden />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
