import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Chat from "./pages/chat/Chat";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/chat" exact component={Chat} />
        </Switch>
      </Router>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <footer>ANDRIARIMALALA Njiva Niaina IMTICIA N11</footer>
    </div>
  );
}

export default App;
