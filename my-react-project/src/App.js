// src/App.js
import React from 'react';
import logo from './logo.svg';
import NavBar from './NavBar';
import Footer from './Footer';
import Catalog from './Catalog';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to My Shop</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <main>
                <NavBar />
                <Catalog />
            </main>
            <Footer />
        </div>
    );
}

export default App;



