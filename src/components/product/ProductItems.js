import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';

import { categories } from '../../assets/data/data';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/FontAwesome';


const { width } = Dimensions.get('window');

const ProductItems = (props) => {

    const navigation = useNavigation();

    const { data } = props;

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('product', {productId: item.id})}
                style={styles.cardContainer} 
                >
                <Image
                    source={{uri: item.image}}
                    style={styles.imageStyle}
                />
                <View style={{margin: 8}} >
                    <Text style={styles.productName} >{item.name}</Text>
                    <View style={styles.separator} />
                    <View style={styles.spaceBtn} >
                        <View>
                            <Text style={styles.price} >{item.price}</Text>
                            <Text style={styles.disPrice} >{item.discountPrice}</Text>
                        </View>
                        <View style={styles.flexEnd} >
                            <Cart name="cart-arrow-down" color={Colors.GREEN} size={20} style={{marginRight: 10}} />
                            <Icon name="hearto" color={Colors.GREEN} size={20} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
       <View style={styles.mainContainer} >
            <View style={styles.center} >
                {data.length !== 0 ? 
                <FlatList
                    data={data}
                    contentContainerStyle={styles.flatStyle}
                    keyExtractor={(item) => item.id}   
                    alwaysBounceVertical={false}
                    renderItem={renderItem}
                />
                :
                <View style={styles.container} >
                    <Text style={styles.noProduct} >No Products</Text>
                </View>
                }
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 1,
        width: width-20,
        marginTop: 20,
        justifyContent: 'center',
    },
    noProduct: {
        fontSize: 26
    },
    spaceBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flexEnd: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 18,
    },
    disPrice: {
        fontSize: 16,
        textDecorationLine: 'line-through',
    },
    separator: {
        height: 1,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: Colors.GREEN,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageStyle: {
        height: 100,
        width: width*0.41,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    center: {
        justifyContent: 'center',
    },
    flatStyle: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContainer: {
        margin: 8,
        height: 200,
        width: width*0.42,
        borderWidth: 1,
        borderRadius: 15,
    },
});

export default ProductItems;

