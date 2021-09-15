import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import { getSingleProduct, getSimilarProducts } from '../api/api';
import Loader from '../components/loader/Loader';
import BuyNowButton from '../components/button/BuyNowButton';
import AddToCart from '../components/button/AddToCart';

import Star from 'react-native-vector-icons/FontAwesome';

import Colors from '../styles/Colors';
import Banner from '../components/banner/Banner';
import Separator from '../components/separator.js/Separator';
import SimilarProducts from '../components/product/SimilarProducts';


const { width } = Dimensions.get('window');

const Product = (props) => {
  
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);
    const [similarProducts, setsimilarProducts] = useState([]);
    const [images, setImages] = useState(0);

    useEffect(() => {
        const productId = props.route.params.productId
        console.log(productId);
        getSingleProduct(productId)
            .then(items => {
                setProducts(items)
                setImages(items.images)
                setLoader(false)
            })
            .catch(error => console.log(error))

        getSimilarProducts()
        .then(items => {
            setsimilarProducts(items)
            setLoader(false)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <View style={{flex: 1}} >
            {loader
            ?
            <View style={styles.loader} >
                <Loader/>
            </View>
            :
            <ScrollView>
            <View style={styles.container} >
                <Banner data={images} />

                <View style={styles.detailsContainer} >
                    <View style={styles.spaceBtn} >
                        <View>
                            <Text style={styles.productName} >{products.name}</Text>
                            <View style={styles.row} >
                                <View style={styles.row} >
                                    <Star name="star" color={Colors.GREEN} style={styles.right} size={20} />
                                    <Star name="star" color={Colors.GREEN} style={styles.right} size={20} />
                                    <Star name="star" color={Colors.GREEN} style={styles.right} size={20} />
                                    <Star name="star" color={Colors.GREEN} style={styles.right} size={20} />
                                    <Star name="star-half-empty" color={Colors.GREEN} style={styles.right} size={20} />
                                </View>
                                <Text style={styles.text} >{products.reviews}</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}} >
                            <Text style={styles.price} >{products.price}</Text>
                            <Text style={styles.disPrice} >{products.discountPrice}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.detailesText} >Details</Text>
                        <Text style={styles.text} >{products.details}</Text>
                    </View>

                    <BuyNowButton/>
                    <AddToCart/>

                    <Separator/>

                    <View>
                        <Text style={styles.text} >Simlar Products</Text>
                       <SimilarProducts data={similarProducts} />
                    </View>
                </View>
            </View>
            </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsContainer: {
        width: width-40,
        marginTop: 10,
    },
    spaceBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
    },
    right: {
        marginRight: 4,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    disPrice: {
        fontSize: 22,
        textDecorationLine: 'line-through',
    },
    detailesText: {
        fontSize: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Product;

