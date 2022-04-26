import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
function App() {
  return (
    <div className="App">
      <div className="slideNav visible">
        <Navbar />
      </div>
      <div className="homeScreen">
        <Home />
      </div>
    </div>
  );
}

export default App;
