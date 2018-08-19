import React, { Component} from 'react'
import {Text, Platform, PickerIOS, View, Picker } from 'react-native'


class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {category: "", categoryID: null}
    }
    render() {
        return (
            <View>
                <Text>Please choose the category:</Text>
                <Picker 
                   selectedValue={this.state.category}
                   style={{ height: 50, width:200}}
                   onValueChange={( itemValue, itemIndex) => this.setState({ category: itemValue, categoryID: itemIndex})}>
                   <Picker.Item label="Family" value="family" />
                   <Picker.Item label="Friends" value="friends" />
                   <Picker.Item label="Vacations" value="vacations" />
                   <Picker.Item label="Works" value="works" />
               
                </Picker>
                <Text>category Index is {this.state.categoryID}</Text>
            </View>
        )
    }
}

export default Member