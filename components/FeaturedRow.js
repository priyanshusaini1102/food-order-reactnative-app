import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description,featuredCategory, restaurants}) => {
  return (
    <View className='my-3'>
        <View className='flex-row justify-between items-center'>
            <Text className='text-lg font-semibold'>{title}</Text>
            <Icon name='arrow-forward-outline' type='ionicon' color='black' />
        </View>
        <Text className='text-xs font-semibold text-gray-400'>{description}</Text>

        {/* Restaurant Cards */}
        <ScrollView horizontal className='mt-2'>
        {
            restaurants.map(restaurant =>(
                <RestaurantCard
                key={restaurant._id}
                id={restaurant._id}
                imgUrl={restaurant.imageUrl}
                title={restaurant.name}
                rating={restaurant.rating}
                genre={restaurant.type.name}
                address={restaurant.address}
                short_description={description}
                dishes={restaurant.dishes}
                long={restaurant.long}
                lat={restaurant.lat}
            />
            ))
        }

        </ScrollView>

    </View>
  )
}

export default FeaturedRow