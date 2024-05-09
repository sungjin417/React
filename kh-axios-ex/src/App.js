import "./App.css";
import Axios from "./Axios";
import NewsList from "./NewsList";
import News from "./News";
import UserStore from "./context/UserStore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageUploader from "./pages/imageUploader";
function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<ImageUploader />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
