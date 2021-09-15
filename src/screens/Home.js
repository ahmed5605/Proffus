import React,{ useState, useEffect, } from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, FlatList, ActivityIndicator, ScrollView} from 'react-native';

import { getAllProducts, getCategoryProducts, getCategories } from '../api/api';

import Colors from '../styles/Colors';
import Banner from '../components/banner/Banner';
import ProductItems from '../components/product/ProductItems';

const { width } = Dimensions.get('window');

const Home = () => {

    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(0);

    useEffect(() => {
        getAllProducts()
        .then(items => {
            setProducts(items)
            setLoader(false)
        })
        .catch(error => console.log(error))

        getCategories()
        .then(items => {
            setCategories(items)
            setLoader(false)
        })
        .catch(error => console.log(error))
    }, [])

    const changeCategory = (id) => {
        setLoader(true)
        setCurrentCategory(id)
        
        getCategoryProducts(id)
        .then(items => {
            setProducts(items)
            setLoader(false)
        })
        .catch(error => console.log(error))
    }

    const Category = () => {
        return (
           <View style={styles.categoryContainer} >
                <View style={styles.center} >
                    <FlatList
                        horizontal
                        data={categories}
                        contentContainerStyle={[{height: 60}, styles.center]}
                        keyExtractor={(item) => item.categoryId}   
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => changeCategory(item.categoryId)}
                                style={[styles.category, {backgroundColor: currentCategory === item.categoryId ? Colors.GREEN1 : Colors.GREEN2,}]} >
                                <Text style={styles.categoryText} >{item.category}</Text>
                            </TouchableOpacity>
                        )} 
                    />
                </View>
           </View>
        )
    }

    return (
        <ScrollView >
            <View style={styles.container} >
                <Banner/>
                <Category/>
                {loader 
                ? 
                <View style={{marginTop: width/2.5}} >
                    <ActivityIndicator size="large" />
                </View> 
                :
                <ProductItems data={products} />
                }
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
    },
    categoryText: {
        color: Colors.WHITE},
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryContainer: {
         width: width,
         backgroundColor: Colors.WHITE,
         marginTop: 20,
         justifyContent: 'center',
        },
    category: {
        margin: 4,
        height: 30,
        width: 80,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;
