import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native';
import { Icon } from '@rneui/themed';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../feature/restaurantSlice';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {params} = useRoute();
    const {
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
    } = params;

    useEffect(() => {
        dispatch(setRestaurant({
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
        }));
    }, [dispatch]);

  return (
    <>
        <BasketIcon />
        <View className="">
            <TouchableOpacity onPress={navigation.goBack} className="px-4 py-8 opacity-80 shadow-2xl absolute z-10">
                <Icon name='chevron-left'  type='feather' color='black' reverse className='text-sm opacity-50' />
            </TouchableOpacity>
            <Image source={{uri:imgUrl}} className=" h-56 w-full " />
            <View className='p-3 bg-white border-b border-gray-200 shadow-xl '>
                <Text className='text-3xl text-gray-900 font-bold' >{title}</Text>
                <View className=" flex-row  items-center space-x-1 pl-0.5"> 
                    <Icon name='star' type='font-awesome' size={16} color='gold' />
                    <Text className='font-semibold'>
                        <Text className="font-semibold text-yellow-400">{rating}</Text> • {genre}


                    </Text>

                    <Icon name='location' type='ionicon' size={18} color='black' />
                    <Text className='font-semibold text-xs'>
                        Nearby • {address}
                    </Text>

                </View>
                <Text className='text-gray-500 text-xs py-2 font-semibold font-lighter'>{short_description}</Text>

            </View>
            <View className='flex-row justify-between items-center p-3 bg-white border-b border-gray-200 shadow-xl'>
                <View className='flex-row space-x-1' >
                    <Icon name='help-circle' type='feather' color='black' size={18} />
                    <Text className='font-semibold'>
                        Have a food allergy?
                    </Text>
                </View>
                <TouchableOpacity className='bg-white shadow-inner border rounded-full border-gray-200 p-2'>
                    <Icon name='chevron-right' type='feather' size={18}  color='black' />
                </TouchableOpacity>
            </View>
            <View className='pb-36' >
                <Text className='px-4 pt-6 mb-3 font-bold text-xl' >Menu</Text>

                {dishes.map(dish=>(
                    <DishRow
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.imageUrl}
                    />
                ))}
                
            </View>
        </View>
    </>
  )
}

export default RestaurantScreen