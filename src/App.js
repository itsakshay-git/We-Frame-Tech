
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <Router>
      <DashBoard />
    </Router>
  );
}

export default App;
