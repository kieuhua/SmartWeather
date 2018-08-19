import React, { Component } from "react"
import { View } from "react-native"

import LabeledInput from "../commonComponents/LabeledInput"
import { Button } from "../commonComponents/ButtonWithMargin";
import { NormalText } from "../commonComponents/NormalText"

class FamilyScreen extends Component {
    static displayName = "FamilyScreen"

    _mkMembersView() {
        if (!this.props.members) { return null}

        return this.props.members.map( member => {
            if (member.categoryID === 0 ) {
                <Member key={member.id} />
            }
        })
    }

    render() {
        return (
            <View>
                {this._mkMembersView()}
                <LabeledInput label="Name" clearOnSubmit={false} onEntry={this._handlerName} onChange={this._handlerName} />
                <LabeledInput label="zip" clearOnSubmit={false} onEntry={this._handlerZip} onChange={this._handlerZip} />

                <Button onPress={this._createMember} title="Create Member" />
                   
            </View>
        )
    }
}

export default FamilyScreen