import React from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Colors from '../../styles/Colors';

const { width } = Dimensions.get('window');

const Separator = () => {
    return (
        <View style={styles.container} >
            <View style={styles.separator} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        height: 1,
        width: width-40,
        backgroundColor: Colors.GREEN, 
    },
});

export default Separator;

