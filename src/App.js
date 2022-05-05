import './App.css';
import Home from './pages/Home/Home';
// import Posts from './pages/Posts';
import PatientsReport from './pages/Home/PatientsReport';
import Navigation from './pages/common/Navigation';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Navigation />
      <div className="col-lg-12 mx-auto p-3 py-md-5 container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/report" element={<PatientsReport />}/>
        </Routes>
      </div>
      {/* <Posts /> */}
    </div>
  );
}

export default App;
