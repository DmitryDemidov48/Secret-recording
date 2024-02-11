import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CipherInfo from "./pages/CipherInfo";
import EncryptContainer from "./components/EncryptContainer";
import DecryptContainer from "./components/DecryptContainer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/Secret-recording" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/info" element={<CipherInfo/>} />
                <Route path="/encoder" element={<EncryptContainer/>} />
                <Route path="/decoder" element={<DecryptContainer/>} />
            </Routes>
        </Router>
    );
}

export default App;
