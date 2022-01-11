import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
