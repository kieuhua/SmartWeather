import React from 'react'
import { Platform, ScrollView, StatusBar } from 'react-native'
import { createStackNavigator, createDrawerNavigator, SafeAreaView} from 'react-navigation'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SampleText from './SampleText'
import { Button } from "./commonComponents/ButtonWithMargin"

import SmartWeather from "./smart_weather"

const MyNavScreen = ({ navigation, banner}) => (
    <ScrollView>
        <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
        <SmartWeather />
    </ScrollView>
)

const InboxScreen = ({navigation}) => (
    <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
)
// don't where this headerTitle go
InboxScreen.navigationOptions = { headerTitle: 'Home Weather2'}

const EmailScreen = ({ navigation}) => (
    <MyNavScreen banner={'Email Screen'} navigation={navigation} />
)

const FamilyScreen = ({ navigation}) => (
    <MyNavScreen banner={'Family Screen'} navigation={navigation} />
)

FamilyScreen.navigationOptions = { headerTitle: 'Home Weather'}

const InboxStack = createStackNavigator({
    Inbox: { screen: InboxScreen},
    Email: { screen: EmailScreen}
})

InboxStack.navigationOptions = {
    drawerLabel: 'Current Weather',
    drawerIcon: ({ tintColor}) => (
        <MaterialIcons name="mood" size={24} style={{color: tintColor}} />
    )
}


const FamilyStack = createStackNavigator({
    Family: { screen: FamilyScreen},
})

// so name="move-to-inbox" draws that icon before 'Family'
FamilyStack.navigationOptions = {
    drawerLabel: 'Family',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="mood" size={24} style={{color: tintColor}} />
    )
}
const FriendsStack = createDrawerNavigator({
    Drafts: { screen: FamilyScreen},
})
FriendsStack.navigationOptions = {
    drawerLabel: "Friends",
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="people" size={24} style={{color: tintColor}} />
    )
}

const VacationsStack = createDrawerNavigator({
    Email: {screen: EmailScreen}
})
VacationsStack.navigationOptions = {
    drawerLabel: "Vacations",
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="spa" size={24} style={{color: tintColor}} />
    )
}

const WorksStack = createDrawerNavigator({
    Email: {screen: EmailScreen}
})
WorksStack.navigationOptions = {
    drawerLabel: "Works",
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="work" size={24} style={{color: tintColor}} />
    )
}

const Drawer = createDrawerNavigator(
    //k this where you define routes
    {
        Current_Weather: {path: '/', screen: InboxScreen},
        Family: {path: '/family', screen: FamilyStack},
        Friends: {path: '/friends', screen: FriendsStack },
        Vacations: {path: '/vacations', screen: VacationsStack},
        Works: { path: '/works', screen: WorksStack}
    },
    {
        initialRouteName: 'Family',
        activeTintColor: '#e91e63'
    }
)

export default Drawer