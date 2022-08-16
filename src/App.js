import "./admin.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
import PrivateRouter from "./Router/PrivateRouter";

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      {/* <SlideNav></SlideNav>
      <StartMenuBar></StartMenuBar> */}
      <Switch>
        <Route exact path="/">
          {localStorage.getItem("token") ? <Redirect to="/dashboard" />: <Login></Login> }
          {/* <SlideNav active='dashboard'></SlideNav>
          <StartMenuBar name="Dashboard"></StartMenuBar>
          <Dashboard></Dashboard> */}
        </Route>
        <Route exact path="/register">
          {localStorage.getItem("token") ? <Redirect to="/dashboard" />: <Register></Register> }
          {/* <SlideNav active='dashboard'></SlideNav>
          <StartMenuBar name="Dashboard"></StartMenuBar>
          <Dashboard></Dashboard> */}
        </Route>
        <Route exact path="/dashboard">
          <PrivateRouter>
          <SlideNav active='dashboard'></SlideNav>
          <StartMenuBar name="Dashboard"></StartMenuBar>
          <Dashboard></Dashboard>
          </PrivateRouter>
        </Route>
        <Route exact path="/orders">
          <PrivateRouter>
          <SlideNav active='orders' ></SlideNav>
          <StartMenuBar name="Orders"></StartMenuBar>
          <Orders ></Orders>
          </PrivateRouter>
        </Route>
        <Route exact path="/courier">
        <PrivateRouter>
          <SlideNav active='courier'></SlideNav>
          <StartMenuBar name="Courier"></StartMenuBar>
          <Courier></Courier>
          </PrivateRouter>
        </Route>
        <Route exact path="/product">
        <PrivateRouter>
          <SlideNav active='product'></SlideNav>
          <StartMenuBar name="Products"></StartMenuBar>
          <Products></Products>
          </PrivateRouter>
        </Route>
        <Route exact path="/add_category">
        <PrivateRouter>
          <SlideNav active='product_category'></SlideNav>
          <StartMenuBar name="Product Category"></StartMenuBar>
          <ProductCategory></ProductCategory>
          </PrivateRouter>
        </Route>
        <Route exact path="/bulk_sms">
        <PrivateRouter>
          <SlideNav active='bulk'></SlideNav>
          <StartMenuBar name="Bulk SMS"></StartMenuBar>
          <BulkSms></BulkSms>
          </PrivateRouter>
        </Route>
        <Route exact path="/customer">
        <PrivateRouter>
          <SlideNav active='customer' ></SlideNav>
          <StartMenuBar name="Customers"></StartMenuBar>
          <Customer></Customer>
          </PrivateRouter>
        </Route>
        <Route exact path="/offer">
        <PrivateRouter>
          <SlideNav active='offer'></SlideNav>
          <StartMenuBar name="Offers"></StartMenuBar>
          <Offer></Offer>
          </PrivateRouter>
        </Route>
        <Route exact path="/inventory">
        <PrivateRouter>
          <SlideNav active='inventory'></SlideNav>
          <StartMenuBar name="Inventory"></StartMenuBar>
          <Inventory></Inventory>
          </PrivateRouter>
        </Route>
        <Route exact path="/stock_in">
        <PrivateRouter>
          <SlideNav active='stock_in'></SlideNav>
          <StartMenuBar name="Stock In"></StartMenuBar>
          <StockIn></StockIn>
          </PrivateRouter>
        </Route>
        <Route exact path="/product_return">
        <PrivateRouter>
          <SlideNav active='product_return'></SlideNav>
          <StartMenuBar name="Product Return"></StartMenuBar>
          <ProductReturn></ProductReturn>
          </PrivateRouter>
        </Route>
        <Route exact path="/plugins">
        <PrivateRouter>
          <SlideNav active='plugin'></SlideNav>
          <StartMenuBar name="Plugins"></StartMenuBar>
          <Plugins></Plugins>
          </PrivateRouter>
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
