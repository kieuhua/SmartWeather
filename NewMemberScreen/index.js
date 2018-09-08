import React, {Component} from "react"
import { View } from "react-native"

import LabeledInput from "../commonComponents/LabeledInput"
import {Button }from "../commonComponents/ButtonWithMargin"

import LogoTitle from "../commonComponents/LogoTitle"
import { connect } from "react-redux"
import { addMember} from "../actions/creators"

class NewMemberScreen extends Component {

    static displayName = "FamilyScreen"
    //static navigationOptions =  {title: 'Family',}
    static navigationOptions = {
        headerTitle: <LogoTitle name="New Member"/>,
        headerStyle: { backgroundColor: "#f4511e"}, 
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: 'bold'}
    }

    constructor(props) {
        super(props)
        this.state = { name: "", zip: "" }
    }

    _handlerName = text => {this.setState({ name: text })}

    _handlerZip = text => {this.setState({ zip: text })}

    _createMember = () => {
        this.props.creatMember(0, this.state.name, this.state.zip,)
        this.props.navigation.goBack()
    }
    
    render() {
        return (
            <View>   
                <LabeledInput label="Name" clearOnSubmit={true} onEntry={this._handlerName} onChange={this._handlerName} />
				<LabeledInput label="zip" clearOnSubmit={true} onEntry={this._handlerZip} onChange={this._handlerZip} />
				<Button onPress={this._createMember} title="Create Member" />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { members: state.members}
}

const mapDispatchToProps = dispatch => {
    return {
        creatMember: (categoryID, name, zip) => {
            dispatch(addMember(categoryID, name, zip))            
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(NewMemberScreen)