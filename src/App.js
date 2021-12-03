import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/navbar.js'
import ItemListContainer from './Components/ItemListContainer/itemListContainer.js';
import ItemCount from './Components/ItemCount/itemCount';


function App() {
  
  return (  
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemCount/>
    
    
    </div>
  )
}

export default App;
