import { Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import MealsSummary from "./components/MealsSummary";
import { AvailableMeals } from "./components/AvailableMeals";


function App() {
  return (
    <div>
      <Header/>
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
