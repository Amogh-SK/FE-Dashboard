import './App.css';
import Home from './Components/Home';
import ViewData from './Components/ViewData';
import GraphView from './Components/GraphView'
import Navbarcomp from './Components/navbarcomp';
import {
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
     <Navbarcomp/>
    </div>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/view-Data" element={<ViewData/>} />
        <Route path="/view-graph" element={<GraphView/>} />
        </Routes>
   
  
    </>
  );
}

export default App;
