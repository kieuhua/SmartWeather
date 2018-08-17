import React from 'react'
import { Platform, ScrollView, StatusBar } from 'react-native'
import { createStackNavigator, createDrawerNavigator, SafeAreaView} from 'react-navigation'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SampleText from './SampleText'
import { Button } from "./commonComponents/ButtonWithMargin"

const MyNavScreen = ({ navigation, banner}) => (
    <ScrollView>
        <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
    </ScrollView>
)

const InboxScreen = ({navigation}) => (
    <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
)
InboxScreen.navigationOptions = { headerTitle: 'Inbox'}

const EmailScreen = ({ navigation}) => (
    <MyNavScreen banner={'Email Screen'} navigation={navigation} />
)

const DrafsScreen = ({ navigation}) => (
    <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
)
DrafsScreen.navigationOptions = { headerTitle: 'Drafts'}

const InboxStack = createStackNavigator({
    Inbox: { screen: InboxScreen},
    Email: { screen: EmailScreen}
})

InboxStack.navigationOptions = {
    drawerLabel: 'Inbox',
    drawerIcon: ({ tintColor}) => (
        <MaterialIcons name="move-to-inbox" size={24} style={{color: tintColor}} />
    )
}

const DraftsStack = createStackNavigator({
    Drafts: { screen: DrafsScreen},
    Email: { screen: EmailScreen}
})

DraftsStack.navigationOptions = {
    drawerLabel: 'Drafts',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons name="drafts" size={24} style={{color: tintColor}} />
    )
}

const DrawerExample = createDrawerNavigator(
    {
        Inbox: {path: '/', screen: InboxScreen},
        Drafts: {path: '/kieu_sent', screen: DraftsStack}
    },
    {
        initialRouteName: 'Drafts',
        activeTintColor: '#e91e63'
    }
)

export default DrawerExample