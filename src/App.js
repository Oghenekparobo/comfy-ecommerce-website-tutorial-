import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import {
  About,
  Cart,
  Checkout,
  ErrorPage,
  Home,
  Products,
  SingleProduct,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
