import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import CarItem from "../CarItem"


import styles from './styles';
import cars from './cars';


const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} /> }
                showsVerticalScrollIndicator={false}
                snapToAlignment={'center'}
                decelerationRate={'normal'}
                snapToInterval={Dimensions.get('screen').height}
            
            />
        </View>
    );
};

export default CarsList;