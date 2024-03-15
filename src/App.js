// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { CartProvider } from './Component/ContextReducer';
// import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';
function App() {
  return (
    <CartProvider>
    <Router>
   <>
   <Routes>

      <Route exact path='/' element={<Home></Home>}> </Route>
      <Route exact path='/login' element={<Login></Login>}> </Route>
      <Route exact path='/createuser' element={<SignUp/>}> </Route>
      <Route exact path='/myOrder' element={<MyOrder/>}> </Route>
   </Routes>
    </>
    </Router>
    </CartProvider>
  );
}

export default App;
