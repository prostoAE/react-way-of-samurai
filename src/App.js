import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="row">
                    <Navbar/>
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={Dialogs} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
