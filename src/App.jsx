import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home-page/home.page";
import UsersPage from "./pages/users-page/users.page";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
