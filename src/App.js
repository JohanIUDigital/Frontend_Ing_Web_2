import Multimedia from "./components/multimedia/Multimedia";
import Footer from "./components/ui/Footer";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <div>
      <div className="container">
        <NavBar/>
        <Multimedia></Multimedia>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
