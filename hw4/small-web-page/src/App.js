import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AboutPage from "./pages/Aboutpage/AboutPage";
import NotFound from "./pages/NotFound";

function App() {
  return(
      <div className="container">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/about" element={<AboutPage />}/>
                  <Route path="*" element={<NotFound />}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;