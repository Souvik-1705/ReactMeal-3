import { Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import MealsSummary from "./components/MealsSummary";
import { AvailableMeals } from "./components/AvailableMeals";
import { CartContext } from "./features/CartProvider";
import { useContext } from "react";
import CartModal from "./pages/CartModal";


function App() {

  const{cartVisible}=useContext(CartContext);
  
  return (
    <div>
      <Header/>
      {cartVisible && <CartModal/>}
      <Routes>
        <Route path="/" element={
          <>
          <MealsSummary/>
          <AvailableMeals/>
          </>
        }/>
        
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
  );
}

export default App;
