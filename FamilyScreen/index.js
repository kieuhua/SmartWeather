import React, { Component } from "react"
import { View, Text } from "react-native"

import { connect } from "react-redux"

import LabeledInput from "../commonComponents/LabeledInput"
import { Button } from "../commonComponents/ButtonWithMargin";
import { addMember } from "../actions/creators";

import MemberView from "./MemberView"


class FamilyScreen extends Component {
    static displayName = "FamilyScreen"

    constructor(props) {
        super(props)
        this.state = { name: "", zip: ""}
       // this._createMember = this._createMember.bind(this)
    }

    // some how all these handlers don't need a bind statement in constructor
    // perhaps, because they have "_" leading the name ???
    _handlerName = text => {this.setState({ name: text})}

    _handlerZip = text => {this.setState({ zip: text})}

    // when button press, this will be called
    _createMember = () => {
        this.props.createMember(0, this.state.name, this.state.zip, )
    }

    // update of storage does trigger the re-render of FamilyScreen compoent
    _mkMembersView() {
        if (!this.props.members) { return null}
        return this.props.members.map( member => {
            // this second return that I need, I record the in RN learned 
            return(
           <MemberView member={ member} key={member.data.id}/>
            )
        })
        
    }

    render() {
        //alert("render FamilyScreen")
        return (
            <View>
                {this._mkMembersView()}
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
        // this._createMember func call this func
        createMember: (categoryID, name, zip) => {
            //alert("kieu in mapDispatch" + categoryID + name + zip)
            dispatch(addMember(categoryID, name, zip))
        }
    }
}

// these mapStateToProps and mapDispatchToProps are for FamilyScreen component
export default connect(mapStateToProps, mapDispatchToProps) (FamilyScreen)