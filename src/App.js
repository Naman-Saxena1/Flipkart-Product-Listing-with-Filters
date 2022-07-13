import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { 
  Navbar,
  Sidebar,
  ProductsListContainerGrid
} from "./components/index"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content-container'>
          <Sidebar/>
          <ProductsListContainerGrid/>
        </div>
      </div>
    </Router>
  );
}

export default App;