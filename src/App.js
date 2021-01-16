import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/homepage/homepage";
import MotivateMe from "./pages/motivateme/motivateme";
import About from "./pages/about/about";
import NotFound from "./pages/notfound/notfound";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/motivateme" component={MotivateMe} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
