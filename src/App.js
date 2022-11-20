// import logo from './logo.svg';
// import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from "./components/Quote";
import Dashboard from "./components/Dashboard";
// require("@babel/core").transformSync("code", {
//   presets: ["@babel/preset-react"],
// });

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Quote />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
