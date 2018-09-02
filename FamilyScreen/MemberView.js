import React, { Component } from "react"
import {  View, Text } from "react-native"

class MemberView extends Component {
    //static displayName = "MemberView"

    render() {
        return(
            <View>
                <Text>{this.props.member.data.name}</Text>
                <Text>{this.props.member.data.zip}</Text>
                <Text>{this.props.member.data.categoryID}</Text>
                <Text>{this.props.member.data.id}</Text>
           </View>
        )
    }
}

export default MemberView