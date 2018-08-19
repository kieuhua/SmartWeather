import React, { Component} from 'react'
import { createStore} from 'redux'
import { Provider } from "react-redux"

import Drawer from './Drawer'
import {reducer} from "./reducers"

let store = createStore(reducer)

class HomeWeather extends Component {
    render() {
        return(
            <Provider store={store}>
                <Drawer />
            </Provider>
        )
    }
}

export default HomeWeather