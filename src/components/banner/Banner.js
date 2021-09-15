import React,{ useState, useEffect, } from 'react';
import {Text, View, StyleSheet, Dimensions, Image, } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Colors from '../../styles/Colors';

const { width } = Dimensions.get('window');
const bannerData = [
    {
         image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
         id: 1,
    },
    {
         image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
         id: 2,
    },
    {
         image: 'https://images.unsplash.com/photo-1528822855841-e8bf3134cdc9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1cnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
         id: 3,
    },
    {
         image: 'https://images.unsplash.com/photo-1570857502809-08184874388e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
         id: 4,
    },
];

const Banner = (props) => {

    const { val, data } = props;
    console.log("val "+ data);

    return (
            <View style={styles.container}>
                <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={2}
                showPagination
                paginationActiveColor={Colors.GREEN}
                paginationDefaultColor={Colors.GREEN1}
                data={data ? data : bannerData}
                renderItem={({ item }) => (
                    <View style={[styles.child]}>
                        <Image
                            source={{uri: item.image}}
                            style={{height: 200, width: width-40, borderRadius: 20,}}
                        />
                    </View>
                )}
                />
            </View>
    )
}


const styles = StyleSheet.create({
  container: {height: 200, width: width-40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
  child: { width: width-40, justifyContent: 'center' },
  text: { fontSize: 24, textAlign: 'center' },
});

export default Banner;