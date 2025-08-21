import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu/Menu.jsx"; // Assuming you have a Menu component
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path ="/" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
