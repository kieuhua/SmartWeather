import React, { Component} from 'react'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from "react-redux"

import Drawer from './Drawer'
import {reducer} from "./reducers"

import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension'
import logger from 'redux-logger'

//import Reactotron from './ReactotronConfig'
// const store = Reactotron.createStore(reducer, compose(logger)) 
// =>  Reactotron is not defined

let store = createStore(reducer, applyMiddleware(logger));

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