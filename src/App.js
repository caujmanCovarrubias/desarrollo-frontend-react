import './App.css';

import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  );
}

export default App;
