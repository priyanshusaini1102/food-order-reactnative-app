import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Icon } from '@rneui/themed'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
// import {urlFor} from '../sanity'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    const navigation = useNavigation();
  return ( 
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Restaurant', {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    })} >
    <View className='mr-2 bg-white rounded-md shadow-xl'>

        <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-md" />
        <View className="p-2 flex-col justify-start items-start">
            <Text className="text-lg font-bold">{title}</Text>
            <View className="flex-row items-center space-x-1 pl-0.5"> 
                <Icon name='star' type='font-awesome' size={16} color='golden' />
                <Text>
                    <Text className="font-semibold text-yellow-400">{rating}</Text> • {genre}
                </Text>
            </View>
            <View className="flex-row items-center space-x-1"> 
                <Icon name='location' type='ionicon' size={18} color='grey' />
                <Text className='w-48 truncate'>
                    <Text className=" text-gray-700">Nearby</Text> • {address}
                </Text>
            </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard