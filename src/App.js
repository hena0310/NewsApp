
import React from 'react';
import Searchnews from './Searchnews';
import Allnews from './Allnews';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

function App() {
    return (
        <div className="header">
            <Router>
                <Link to='/Searchnews' className="link">Searchnews</Link>
                <Link to='/Allnews' className="link">AllNews</Link>
                <Routes>
                    <Route path='/' element={<Searchnews />} />
                    <Route path='/Searchnews' element={<Searchnews />} />
                    <Route path='/Allnews' element={<Allnews />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
