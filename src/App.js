import { Routes, Route } from "react-router-dom";
import Listado from "./components/Listado/Listado";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/listado" Component={Listado} />
      </Routes>
    </>
  );
}

export default App;
