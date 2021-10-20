import logo from "./logo.svg";
import "./App.css";
import VeteranState from "./context/veterans.state";
import VeteranStatusCheck from "./components/VeteranStatusCheck";

function App() {
  return (
    <VeteranState>
      <VeteranStatusCheck />
    </VeteranState>
  );
}

export default App;
