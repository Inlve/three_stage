import React, { Component } from "react";
import store from "../store";

export default class Search extends Component {
    search = () => {

    }
    render () {
        return (
            <div>
                <input type="text" />
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}
