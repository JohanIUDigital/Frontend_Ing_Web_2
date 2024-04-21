import Multimedia from "./components/multimedia/Multimedia";
import Footer from "./components/ui/Footer";
import NavBar from "./components/ui/NavBar";
import Table from "./components/ui/Table";

function App() {
  return (
    <div>
      <div className="container">
        <NavBar/>
        <Multimedia></Multimedia>
        <Table></Table>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
