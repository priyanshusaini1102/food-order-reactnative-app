import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../feature/basketSlice';


const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {

    const dispatch = useDispatch();

    const [isPressed, setIsPressed] = useState(false);
    const itemsWithId = useSelector((state) => selectBasketItemsWithId(state,id));


    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }));
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id, name, description, price, image }));
    }


  return ( 
        <View>
            {/* onStartShouldSetResponder={()=>setIsPressed(!isPressed)} */}
        <View   className='bg-white border-b-0.5 p-2 flex-row justify-between items-center space-x-2'>
            <View className='flex-row space-x-2'>
                <Image className='h-20 w-20 rounded-lg' source={{uri: image }} />
                <View className='flex-col justify-between'>
                    <View className='flex-col'>
                        <Text className='font-bold text-base' >{name} • <Text className='text-yellow-500' >₹{price}</Text> </Text>
                        <Text className='text-xs font-light w-56 ' >{description}</Text>
                    </View>
                </View>
            </View>
            <View className='p-3 border border-gray-200 shadow-inner rounded-full' onStartShouldSetResponder={()=>setIsPressed(!isPressed)}>
                <Icon name={`${isPressed ? 'chevron-up' : 'chevron-down'}`}   type='feather' size={18} color='black' />
            </View>

        </View >
            {isPressed && (
                <View className='bg-white p-2 flex-row space-x-4 border-b-0.5 justify-center items-center'>
                    <View onStartShouldSetResponder={removeItemFromBasket} className='bg-gray-200 rounded-full p-2'>
                        <Icon name='minus' type='feather' size={18} color='black'/>
                    </View>
                    <Text className='text-lg font-semibold'>{itemsWithId.length}</Text>
                    <View onStartShouldSetResponder={addItemToBasket} className='bg-gray-200 rounded-full p-2'>
                        <Icon  name='plus' type='feather' size={18} color='black'/>
                    </View>


                </View>
            )}
        </View>
  )
}

export default DishRow