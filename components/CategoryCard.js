import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CategoryCard = ({title,imgUrl}) => {
  return (
    <TouchableOpacity className="relative m-0.5 ">
        <Image className="h-20 w-20 rounded-md" source={{uri:imgUrl}} />
        <Text className="absolute bottom-0.5 left-2 font-semibold text-white text-xs">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard