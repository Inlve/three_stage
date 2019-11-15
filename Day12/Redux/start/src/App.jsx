import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Search from "./components/Search";

class App extends Component {
    render () {
        return (
            <div>
                <Search />
            </div>
        )
    }
}

export default hot(module)(App);
