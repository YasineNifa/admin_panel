import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="users">
            <Route index element={<List/>} />
            <Route path="new" element={<New/>} />
            <Route path=":userId" element={<Single/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
