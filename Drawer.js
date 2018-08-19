import React from 'react'
import { Platform, ScrollView, StatusBar, View, Text, button } from 'react-native'
import { createStackNavigator, createDrawerNavigator, SafeAreaView} from 'react-navigation'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SampleText from './SampleText'
import { Button } from "./commonComponents/ButtonWithMargin"

import Member from "./Member"
import FamilyScreen from "./FamilyScreen"


import SmartWeather from "./smart_weather"

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

let familyMembers = ["morgan", "tuyet", "mai"]

let familyContent = familyMembers.map( member => {
    // I should have unique key like member.id
    return (
        <Text key={member}>{member}</Text>
    )
})
/*
const FamilyScreen1 = ({navigation}) => (
    <View>
        <Button title="kieuButton" />
        <Text> I am in FamilyView </Text>
        {familyContent}
        <Member />
        <FamilyScreen />
    </View>
)
*/
const FamilyScreen1 = ({navigation}) => (
    <FamilyScreen />
)

FamilyScreen1.navigationOptions = { headerTitle: 'Home Weather'}
const FamilyStack = createStackNavigator({
    Family: { screen: FamilyScreen1},
})
FamilyStack.navigationOptions = {
    drawerLabel: 'Family',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="mood" size={24} style={{color: tintColor}} />
    )
}

const FriendsScreen = ({ navigation}) => (
    <MyNavScreen banner={'Friends Screen'} navigation={navigation} />
)
FriendsScreen.navigationOptions = { headerTitle: 'Home Weather'}
const FriendsStack = createStackNavigator({
    Friends: { screen: FriendsScreen},
})
FriendsStack.navigationOptions = {
    drawerLabel: "Friends",
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="people" size={24} style={{color: tintColor}} />
    )
}

const VacationsScreen = ({ navigation}) => (
    <MyNavScreen banner={'Vacations Screen'} navigation={navigation} />
)
VacationsScreen.navigationOptions = { headerTitle: 'Home Weather'}
const VacationsStack = createStackNavigator({
    Vacations: {screen: VacationsScreen}
})
VacationsStack.navigationOptions = {
    drawerLabel: "Vacations",
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="spa" size={24} style={{color: tintColor}} />
    )
}

const WorksScreen = ({ navigation}) => (
    <MyNavScreen banner={'Works Screen'} navigation={navigation} />
)
WorksScreen.navigationOptions = { headerTitle: 'Home Weather'}
const WorksStack = createStackNavigator({
    Works: {screen: WorksScreen}
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
        Current_Weather: {path: '/', screen: HomeScreen },
        Family: {path: '/family', screen: FamilyStack},
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