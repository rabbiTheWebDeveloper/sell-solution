import "./admin.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import SlideNav from "./components/SlideNav/SlideNav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import StartMenuBar from "./components/DashboardComponent/StartMenuBar/StartMenuBar";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import Courier from "./Pages/Courier/Courier";
import ProductCategory from "./Pages/Products/ProductCategory/ProductCategory";
import BulkSms from "./Pages/BulkSms/BulkSms";
import Customer from "./Pages/Customers/Customer";
import Offer from "./Pages/Offer/Offer";
import Plugins from "./Pages/Plugins/Plugins";
import Inventory from "./Pages/Stock/Inventory/Inventory";
import StockIn from "./Pages/Stock/StockIn/StockIn";
import ProductReturn from "./Pages/Stock/ProductReturn/ProductReturn";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      {/* <SlideNav></SlideNav>
      <StartMenuBar></StartMenuBar> */}
      <Switch>
        <Route exact path="/">
          <Login></Login>
          {/* <SlideNav active='dashboard'></SlideNav>
          <StartMenuBar name="Dashboard"></StartMenuBar>
          <Dashboard></Dashboard> */}
        </Route>
        <Route exact path="/dashboard">
          <SlideNav active='dashboard'></SlideNav>
          <StartMenuBar name="Dashboard"></StartMenuBar>
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/orders">
          <SlideNav active='orders' ></SlideNav>
          <StartMenuBar name="Orders"></StartMenuBar>
          <Orders ></Orders>
        </Route>
        <Route exact path="/courier">
          <SlideNav active='courier'></SlideNav>
          <StartMenuBar name="Courier"></StartMenuBar>
          <Courier></Courier>
        </Route>
        <Route exact path="/product">
          <SlideNav active='product'></SlideNav>
          <StartMenuBar name="Products"></StartMenuBar>
          <Products></Products>
        </Route>
        <Route exact path="/add_category">
          <SlideNav active='product_category'></SlideNav>
          <StartMenuBar name="Product Category"></StartMenuBar>
          <ProductCategory></ProductCategory>
        </Route>
        <Route exact path="/bulk_sms">
          <SlideNav active='bulk'></SlideNav>
          <StartMenuBar name="Bulk SMS"></StartMenuBar>
          <BulkSms></BulkSms>
        </Route>
        <Route exact path="/customer">
          <SlideNav active='customer' ></SlideNav>
          <StartMenuBar name="Customers"></StartMenuBar>
          <Customer></Customer>
        </Route>
        <Route exact path="/offer">
          <SlideNav active='offer'></SlideNav>
          <StartMenuBar name="Offers"></StartMenuBar>
          <Offer></Offer>
        </Route>
        <Route exact path="/inventory">
          <SlideNav active='inventory'></SlideNav>
          <StartMenuBar name="Inventory"></StartMenuBar>
          <Inventory></Inventory>
        </Route>
        <Route exact path="/stock_in">
          <SlideNav active='stock_in'></SlideNav>
          <StartMenuBar name="Stock In"></StartMenuBar>
          <StockIn></StockIn>
        </Route>
        <Route exact path="/product_return">
          <SlideNav active='product_return'></SlideNav>
          <StartMenuBar name="Product Return"></StartMenuBar>
          <ProductReturn></ProductReturn>
        </Route>
        <Route exact path="/plugins">
          <SlideNav active='plugin'></SlideNav>
          <StartMenuBar name="Plugins"></StartMenuBar>
          <Plugins></Plugins>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
