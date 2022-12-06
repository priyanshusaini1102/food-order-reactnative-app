import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectRestaurant } from '../feature/restaurantSlice';
import { Icon } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-map';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className='bg-orange-400 flex-1 '>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <Icon name='x' type='feather' color='black' size={18} />


          </TouchableOpacity>
          <Text>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between items-center'>
            <View> 
              <Text className='text-lg text-gray-400' >Estimated Arrival</Text>
              <Text className='text-4xl font-bold' >45-55 Minutes</Text>
            </View>
            <Image className='h-12 w-12 rounded-full' source={require('../assets/delivery-scooter1.jpg')} />
          </View>
          {/* loader */}
          <Progress.Bar size={30} color='orange' indeterminate={true} />

          <Text className='mt-3 text-gray-500' >Your Order at {restaurant.title} is being prepared.</Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          logitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
      <Marker
        coordinate={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
        }}

        title={restaurant.title}
        description={restaurant.short_description}
        identifier='origin'pinColor='primary'
      />

      </MapView>
      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image source={require('../assets/delivery-scooter1.jpg')}
        className='h-12 w-12 rounded-full bg-gray-300 p-4 ml-5' />
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen