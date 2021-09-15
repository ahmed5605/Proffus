import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import MainNavigator from './src/navigator/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreAllLogs(true);

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'black'} />
            <MainNavigator/>
        </NavigationContainer>
    )
}

export default App;
