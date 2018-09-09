import React, { Component } from "react"
import { ScrollView } from "react-native"
import { connect } from "react-redux"

import { Button } from "../commonComponents/ButtonWithMargin";
import { addMember } from "../actions/creators";
import MemberView from "../NewMemberScreen/MemberView"
import LogoTitle from "../commonComponents/LogoTitle"

class FriendsScreen extends Component {
    static displayName = "FriendsScreen"
    static navigationOptions = {
        headerTitle: <LogoTitle name="Friends"/>,
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
            if (member.data.categoryID === 1 ) {
                return(
                    <MemberView member={ member} key={member.data.id}/>
                )
            }
        })
    }

    render() {
        return (
            <ScrollView>
                {this._mkMembersView()}              
                <Button onPress={() => this.props.navigation.navigate('NewMember', {categoryID: 1})} title="Add Member" />                
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
export default connect(mapStateToProps, mapDispatchToProps) (FriendsScreen)
