import "./App.css";
import useLocalStorage from "./basis_typen/useLocalStorage";

function App() {
  const [pollfnr, setPollfnr] = useLocalStorage("init");

  return (
    <div className="App">
      <header className="App-header">
        <p>Motor 01</p>
        <p>
          <input
            type="text"
            value={pollfnr}
            onChange={(e) => setPollfnr(e.target.value)}
          />
        </p>
        <p>{pollfnr}</p>
      </header>
    </div>
  );
}

export default App;
