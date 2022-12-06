import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, totalPrice } from '../feature/basketSlice';
import { selectRestaurant } from '../feature/restaurantSlice';
import { Icon } from '@rneui/themed';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const totalBill = useSelector(totalPrice);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) =>{
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

 


  return (
    <View className=' h-full ' >
      <View className='bg-white pt-10 pl-3 border-b border-yellow-500 shadow-md flex-row justify-between items-center overflow-hidden' >
        <View className=' scale-150  ' >

        <Image className='h-12 w-12 r rounded-full scale-150 scale-y-150 scale-x-150 relative -top-4 -left-2 ml-3' source={require('../assets/delivery-scooter1.jpg')} />
        </View>
        <Text className='text-lg font-bold' >Basket</Text>
        <Icon onPress={()=> navigation.goBack()} name='x' raised type='feather' color='black' size={18} />
      </View>

      <View className=' my-6 bg-white shadow-sm flex-row items-center  justify-around' >
        <Icon className=' ' name='truck' raised type='feather' color='black' size={18} />
        <Text className=' text-gray-400 font-bold' > Deliver in 50-75 minutes. </Text>
        <Text onPress={()=>navigation.goBack()} className=' text-red-600 text-xs bg-red-200 rounded-md border-red-400 shadow-inner px-2 py-1' >Cancel</Text>
      </View>
      <Text className=' text-sm font-extrabold my-2 ml-4 text-gray-400'>Food Items</Text>
      <ScrollView>
        {Object.entries(groupedItemsInBasket).map(([key,items]) => (
          <View key={key} className='flex-row items-center space-x-2 bg-white border-b-0.5 shadow-sm p-2' >
            <Text>{ items.length } x</Text>
            <Image source={{uri: items[0]?.image}} className='h-12 w-12 rounded-full' />
            <Text className=' flex-1'> {items[0]?.name} </Text>

            <Text className='text-gray-600'>
              Rs.{items[0]?.price}
            </Text>

            <TouchableOpacity>
              <Text
                className=' text-purple-500 text-xs'
                onPress={()=>dispatch( removeFromBasket({id:key}) )}>
                  Remove
                </Text>
            </TouchableOpacity>

          </View>
        ))}
      </ScrollView>

      <View className='absolute w-full bottom-0 bg-white px-4 py-3 pb-6' >
        <View className='flex-row items-center justify-between p-2' >
          <View><Text className='text-gray-400 font-semibold' >Subtotal</Text></View>
          <View><Text className='text-gray-400 font-semibold' >Rs.{totalBill}</Text></View>
        </View>
        <View className='flex-row justify-between p-2' >
          <Text className='text-gray-400 font-semibold'>Delivery Fee</Text>
          <Text className='text-gray-400 font-semibold'>Rs.49</Text>
        </View>
        <View className='flex-row justify-between p-2' >
          <Text className=' font-semibold'>Subtotal</Text>
          <Text className=' font-semibold'>Rs.{totalBill+49}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('OrderPreparing')} className=' bg-orange-400  font-extrabold rounded-lg' >
          <Text className='text-center p-3 font-extrabold text-white' >Place Order</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default BasketScreen