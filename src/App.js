import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="row">
                    <Navbar/>
                    <Route path="/profile" render={() => (
                        <Profile store={props.store}/>
                    )}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
