import React from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Colors from '../../styles/Colors';

const { width } = Dimensions.get('window');

const AddToCart = () => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.button} >
                <Text style={styles.text} >Add To Cart</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 50,
        width: width-40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.GREEN,  
        alignItems: 'center',
        justifyContent: 'center',  
    },
    text: {
        fontSize: 24,
        color: Colors.GREEN,
    },
});

export default AddToCart;

