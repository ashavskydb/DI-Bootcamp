import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="/profile">Profile</NavLink>
            <NavLink className="navbar-brand" to="/shop">Shop</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
          <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
          <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        </Routes>
    </div>
  </Router>
);
}

export default App;
