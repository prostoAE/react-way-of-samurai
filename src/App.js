import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <div className="row">
                    <Navbar/>
                    <Route path="/profile" render={() => (
                        <Profile/>
                    )}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                </div>
            </div>
    );
}

export default App;
