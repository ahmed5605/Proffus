import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    text: {
        fontSize: 24
    },
});

export default Profile;

