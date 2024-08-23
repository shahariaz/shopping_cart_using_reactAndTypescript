import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home, Store, About } from "./pages/index";
import { Navbar } from "./components/index";
function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
