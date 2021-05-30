import "./App.css";
import AddProperty from "./components/AddProperty";
// import EditPirate from "./components/EditPirate";
import Main from "./components/Main";
import { Router } from "@reach/router";
import ViewProperty from "./components/ViewProperty";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddProperty path="/new" />
        <ViewProperty path="/view/:id" />
        {/* <EditPirate path="/edit/:id" /> */}
      </Router>
    </div>
  );
}

export default App;
