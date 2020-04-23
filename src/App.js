import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className="row">
                    <Navbar />
                    <Route
                        path="/profile"
                        render={() => (
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch}
                            />
                        )}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs store={props.store} />}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
