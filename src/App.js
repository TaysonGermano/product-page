import { Navbar } from "./components/Navbar";
import ProdGalery from "./components/ProdGalery";
import ProdDetails from "./components/ProdDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ProdGalery />
          </div>
          <div className="col-md-6">
            <ProdDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
