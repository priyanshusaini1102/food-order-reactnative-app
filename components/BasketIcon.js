import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, totalPrice } from '../feature/basketSlice';
import { useNavigation } from '@react-navigation/native';

// import {  useSelector } from 'react-redux';
// import { totalPrice,selectBasketItems } from '';


const BasketIcon = () => {
    const items = useSelector((state) => selectBasketItems(state));
    const totalBill = useSelector((state) => totalPrice(state));

    const navigation = useNavigation();

    if(items.length == 0) return;
    
    return (
      <View  className='absolute flex-row shadow-inner justify-center z-20 bottom-6 mx-2' >
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Basket')}>
              <View className=" flex-row items-center justify-between bg-orange-400 rounded-xl w-full h-fit pr-3">
                  <Text className="text-white w-14 text-center font-bold bg-orange-600 rounded-lg p-4" >{ items.length }</Text>
                  <Text className="text-white text-lg font-bold" >View Basket</Text>
                  <Text className="text-white w-16 font-extrabold" > ₹{ totalBill } </Text>
              </View>
          </TouchableWithoutFeedback>
      </View>
    )
}

export default BasketIcon