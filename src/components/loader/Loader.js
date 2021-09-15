import React from 'react';
import {Text, View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';

import { Loa } from '../../assets/data/data';
import Colors from '../../styles/Colors';

const { width } = Dimensions.get('window');

const Loader = () => {
    return (
       <View style={styles.container} >
           <ActivityIndicator size="large" />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
});

export default Loader;

