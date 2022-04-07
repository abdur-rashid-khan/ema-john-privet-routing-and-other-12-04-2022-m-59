
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory/Inventory';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'
import NoDataFound from './components/NoDataFound/NoDataFound';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='*' element={<NoDataFound></NoDataFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
