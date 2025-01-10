// src/App.jsx
import './index.css';
import MainPage from './pages/MainPage.jsx'
import {Route, Routes} from "react-router-dom";
import NewPage from "./pages/NewPage.jsx";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/test" element={<NewPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
