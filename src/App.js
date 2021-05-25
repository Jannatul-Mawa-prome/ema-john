
import './App.css';
import Header from './components/Header/Header.js';
import Shop from './components/Shop/Shop.js';
import Review from './components/Review/Review.js';
import NotFound from './components/404/NotFound.js';
import ProductDetails from './components/ProductDetails/ProductDetails.js'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";


function App() {

  
  
  return (
    <div>
        <Header></Header>
        
        <Router>
          <Switch>
            <Route path="/review">
               <Review></Review>
            </Route>
            <Route path="/shop">
               <Shop></Shop>
            </Route>
            <Route path="/manage">
               <Shop></Shop>
            </Route>
            <Route exact path="/">
               <Shop></Shop>
            </Route>
            <Route  path="/product/:productkey">
               <ProductDetails></ProductDetails>
            </Route>
            
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}




export default App;