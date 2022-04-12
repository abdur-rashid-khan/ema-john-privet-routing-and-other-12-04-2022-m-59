
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Forgot from './components/Forgot/Forgot';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'
import NoDataFound from './components/NoDataFound/NoDataFound';
import Order from './components/Order/Order';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes >
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          <Route path='/contact' element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
          <Route path='/forgot-password' element={<Forgot></Forgot>}></Route>
          <Route path='*' element={<NoDataFound></NoDataFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
