import React, { Component } from "react"
import { ScrollView } from "react-native"
import { connect } from "react-redux"

import { Button } from "../commonComponents/ButtonWithMargin";
import { addMember } from "../actions/creators";
import MemberView from "../NewMemberScreen/MemberView"
import LogoTitle from "../commonComponents/LogoTitle"

class FamilyScreen extends Component {
    static displayName = "FamilyScreen"
    static navigationOptions = {
        headerTitle: <LogoTitle name="Family"/>,
        headerStyle: { backgroundColor: "#f4511e"}, 
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: 'bold'}
    }

    // update of storage does trigger the re-render of FamilyScreen compoent
    _mkMembersView() {

        if (!this.props.members) { 
            return null
        }
        return this.props.members.map( member => {
            if (member.data.categoryID === 0 ) {
                return(
                    <MemberView member={ member} key={member.data.id}/>
                )
            }
        })
    }

    render() {
        const { navigation, navigationOptions} = this.props

        return (
            <ScrollView>
                {this._mkMembersView()}              
                <Button onPress={() => this.props.navigation.navigate('NewMember')} title="Add Member" />                
            </ScrollView>
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
