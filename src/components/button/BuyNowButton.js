import React from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Colors from '../../styles/Colors';

const { width } = Dimensions.get('window');

const BuyNowButton = () => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.button} >
                <Text style={styles.text} >Buy Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 50,
        width: width-40,
        borderRadius: 10,
        backgroundColor: Colors.GREEN,  
        alignItems: 'center',
        justifyContent: 'center',  
    },
    text: {
        fontSize: 24,
        color: Colors.WHITE,
    },
});

export default BuyNowButton;

