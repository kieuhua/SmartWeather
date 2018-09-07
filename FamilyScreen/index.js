import React, { Component } from "react"
import { View, Text } from "react-native"

import { connect } from "react-redux"

import LabeledInput from "../commonComponents/LabeledInput"
import { Button } from "../commonComponents/ButtonWithMargin";
import { NormalText} from "../commonComponents/NormalText"

import { addMember } from "../actions/creators";

import MemberView from "../NewMemberScreen/MemberView"

import LogoTitle from "../commonComponents/LogoTitle"

class FamilyScreen extends Component {
    static displayName = "FamilyScreen"
    //static navigationOptions =  {title: 'Family',}
    static navigationOptions = {
        headerTitle: <LogoTitle name="Family"/>,
        headerStyle: { backgroundColor: "#f4511e"}, 
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: 'bold'}
    }

    constructor(props) {
        super(props)
        this.state = { name: "", zip: ""}
    }

    componentWillReceiveProps(newprops) {
        console.log("FamilyScreen will receive" + newprops)
    }

    // update of storage does trigger the re-render of FamilyScreen compoent
    _mkMembersView() {
        if (!this.props.members) { 
           // alert("it is empty")
            return null
        }
        return this.props.members.map( member => {
            return(
           <MemberView member={ member} key={member.data.id}/>
            )
        })
        
    }

    render() {
        const { navigation, navigationOptions} = this.props

        return (
            <View>
                {this._mkMembersView()}              
                <Button onPress={() => this.props.navigation.navigate('NewMember')} title="Add Member" />                
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
            dispatch(addMember(categoryID, name, zip))
        }
    }
}

// these mapStateToProps and mapDispatchToProps are for FamilyScreen component
export default connect(mapStateToProps, mapDispatchToProps) (FamilyScreen)

//export default FamilyScreen