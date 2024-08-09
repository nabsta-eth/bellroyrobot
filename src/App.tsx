import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import Main from "./components/Main";
import { ActiveSquareContextProvider } from "./context/ActiveSquareContext";

const App = () => {
  return (
    <ActiveSquareContextProvider>
      <div className="relative bg-slate-50">
        <Header />
        <ControlPanel />
        <Main />
      </div>
    </ActiveSquareContextProvider>
  );
};

export default App;
