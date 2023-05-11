import Topbar from "./components/Topbar";
import "./app.css"
import Home from "./components/Home";
import Single from "./components/Single";
import Write from "./components/Write";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";
function App() {
  const  user=false;
  return (
    <>
   <BrowserRouter>
   <Topbar/>
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={user ? <Home/> :<Register/>}/>
    <Route path="/login" element={user? <Home/>:<Login/>}/>
    <Route path="/write" element={user?<Write/>:<Register/>}/>
    <Route path="/settings" element={user?<Settings/>:<Register/>}/>
    <Route path="/post/:postId" element={<SinglePost/>}/>

   </Routes>
   
   
   </BrowserRouter>
    </>
  );
}

export default App;
