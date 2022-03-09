import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} /> {/*login*/}
          <Route path="users">
            <Route index element={<List/>} />
            <Route path="new" element={<New/>} /> {/*users/new*/}
            <Route path=":userId" element={<Single/>} /> {/*users/12DZD*/}
          </Route>
          <Route path="products">
            <Route index element={<List/>} />{/*products*/}
            <Route path="new" element={<New/>} />{/*products/new*/} {/*there is no / before new*/}
            <Route path=":productId" element={<Single/>}/>{/*products/12DZD*/}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
