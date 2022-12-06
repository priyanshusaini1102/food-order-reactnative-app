import { View, Text, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';


const OrderPreparingScreen = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        },4000);
    },[]);

  return (
        <View className='bg-orange-100 flex-1 items-center justify-center' >
            <Image
                source={require('../assets/delivery-food.gif')}
                className=' h-60 w-60 z-20'
            />
            <Text className='m-3 mt-12 border bg-orange-100 border-orange-300 p-3 rounded-md shadow font-bold text-orange-400'>Waiting for restaurant to accept your order!</Text>
            {/* <Progress.Circle size={60} indeterminate={true} color='white' /> */}

        </View>
  )
}

export default OrderPreparingScreen