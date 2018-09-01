import React, { Component } from "react"
import { View, Text } from "react-native"

import { connect } from "react-redux"

import LabeledInput from "../commonComponents/LabeledInput"
import { Button } from "../commonComponents/ButtonWithMargin";
import { NormalText } from "../commonComponents/NormalText"
import { addMember } from "../actions/creators";

import Member from "../Member"

class FamilyScreen extends Component {
    static displayName = "FamilyScreen"

    constructor(props) {
        super(props)
        this.state = { name: "", zip: ""}
       // this._createMember = this._createMember.bind(this)
    }
/*
    componentWillReceiveProps(nextProps) {
        if(nextProps.members !== this.props.members) { alert("state change" )}
    }
*/
    _handlerName = text => {this.setState({ name: text})}

    _handlerZip = text => {this.setState({ zip: text})}

    _createMember = () => {
        // Family categoryID = 0
        // createMember(categoryID, name, zip) in actions/creators.js
       // alert("kieu in _createMember" + this.state.name + this.state.zip )  
        // I am here, name is zip are correct
        // state.name and state.zip have good valid
        this.props.createMember(0, this.state.name, this.state.zip, )
    }

    _mkMembersView() {
       // alert("kieu in _mkMembersView" + this.props.members)
        if (!this.props.members) { return null}
        // this work length = 4 when it is only 3
       // alert("kieu in _mkMembersView" + this.props.members.length)
        // members = [object Object]
        return this.props.members.map( member => {
           // if (member.data.categoryID === 0 ) {
            //    <Member key={member.data.id} />
            //}
           // alert( "kieu" + member.data.name)
            <Member key={member.data.id} />
        })
    }

    render() {
        //alert("render FamilyScreen")
        return (
            <View>
                <Text>Members List</Text>
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
        createMember: (categoryID, name, zip) => {
            //it hits the reducer with action undefint
            // I got input correctly here
            alert("kieu in mapDispatch" + categoryID + name + zip)
            // I am good up to here, addMember() in Member.js has error
            dispatch(addMember(categoryID, name, zip))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FamilyScreen)