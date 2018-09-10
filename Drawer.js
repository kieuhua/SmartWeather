import React from 'react'
import { Platform, ScrollView, StatusBar, View, Text, button } from 'react-native'
import { createStackNavigator, createDrawerNavigator, SafeAreaView} from 'react-navigation'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SampleText from './SampleText'
import { Button } from "./commonComponents/ButtonWithMargin"

import SmartWeather from "./smart_weather"
import FamilyScreen from "./FamilyScreen"
import FriendsScreen from "./FriendsScreen"
import VacationsScreen from "./VacationsScreen"
import WorksScreen from "./WorksScreen"

import NewMemberScreen from "./NewMemberScreen"

const MyNavScreen = ({ navigation, banner}) => (
    <ScrollView>
        <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
        <SmartWeather />
    </ScrollView>
)
const HomeScreen = ({navigation}) => (
    <MyNavScreen banner={'Home Screen'} navigation={navigation} />
)
HomeScreen.navigationOptions = { headerTitle: 'Home Weather'}
_onPress = (children) => {
    alert(children)
}

const FamilyStack = createStackNavigator(
    {
    Family: {path: '/family', screen: FamilyScreen},
    NewMember: { screen: NewMemberScreen}
    }, 
)

FamilyStack.navigationOptions = {
    drawerLabel: 'Family',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="mood" size={24} style={{color: tintColor}} />
    )
}

const FriendsStack = createStackNavigator(
    {
    Friends: {path: '/friends', screen: FriendsScreen},
    NewMember: { screen: NewMemberScreen}
    }, 
)

FriendsStack.navigationOptions = {
    drawerLabel: 'Friends',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="mood" size={24} style={{color: tintColor}} />
    )
}

const VacationsStack = createStackNavigator(
    {
    Vacations: {path: '/Vacations', screen: VacationsScreen},
    NewMember: { screen: NewMemberScreen}
    }, 
)

VacationsStack.navigationOptions = {
    drawerLabel: 'Vacations',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="mood" size={24} style={{color: tintColor}} />
    )
}

const WorksStack = createStackNavigator(
    {
    Works: {path: '/Works', screen: WorksScreen},
    NewMember: { screen: NewMemberScreen}
    }, 
)

WorksStack.navigationOptions = {
    drawerLabel: 'Works',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="mood" size={24} style={{color: tintColor}} />
    )
}

const Drawer = createDrawerNavigator(
    //k this where you define routes
    {
        Current_Weather: {path: '/', screen: HomeScreen },
        Family: FamilyStack,
        Friends: {path: '/friends', screen: FriendsStack },
        Vacations: {path: '/vacations', screen: VacationsStack},
        Works: { path: '/works', screen: WorksStack}
    },
    {
        initialRouteName: 'Current_Weather',
        activeTintColor: '#e91e63'
    }
)



export default Drawer