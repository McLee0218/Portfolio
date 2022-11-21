// import logo from './logo.svg';
// import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from "./components/Quote";
import {ContactCard, Dashboard, GitHubCard, LinkedinCard, ResumeCard, SpecialProjectCard} from "./components/Dashboard";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Quote />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/gitHub" element={<GitHubCard />}>
          </Route>
          <Route path="/resume" element={<ResumeCard />}>
          </Route>
          <Route path="/linkedin" element={<LinkedinCard />}>
          </Route>
          <Route path="/projects" element={<SpecialProjectCard />}>
          </Route>
          <Route path="/contctMe" element={<ContactCard />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
