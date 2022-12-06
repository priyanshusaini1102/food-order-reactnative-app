import { View, Text, SafeAreaView,StatusBar, Image, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
// import * as Icon from 'react-feather';
import { Icon } from '@rneui/themed';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from  '../sanity';


const HomeScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  });

  //Initialize States for dynamic categories data.
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useEffect(() =>{

    sanityClient
    .fetch(`
    *[_type=="featured"]{
      ...,
      image->,
      restaurant[]->{
        ...,
        dishes[]->{
          ...,
          "imageUrl":image.asset->url,
        },
        type->,
        "imageUrl": image.asset->url,
      }
    }
    `)
    .then(data => {
        setFeaturedCategories(data);
    });

  }, [] );   

  
  return (
    <SafeAreaView className='pt-9 bg-white '>

      {/* Header */}
      <View className='bg-white '>
      <View className='flex-row items-center px-2 bg-white '>
        {/* Logo */}
        <Image source={{uri : "https://cdn.icon-icons.com/icons2/2852/PNG/512/burger_fast_food_icon_181517.png"}} className="h-12 w-12" />
        {/* Change Location */}
        <View className="flex-col flex-1 ml-1">
          <Text className="text-gray-400">Deliver Now!</Text>
          <View className='flex-row items-center' >
          <Text className="text-black text-xl flex-row ">Current Location</Text>
          <Icon name='chevron-down' type='feather' color='black' onPress={() => console.log('hello')} className='text-sm' />
          </View>
        </View>
        {/* User Button */}
        <View className='p-2'>
          <Icon name='user' type='font-awesome' color='black' />
        </View>
        
      </View>

      {/* Search */}
      <View className='flex-row mt-2 px-2 pb-2 items-center space-x-2 bg-white'>
        <Icon name='search' type='feather' color='black' />
        <TextInput  className='flex-1 border border-gray-100 rounded-md shadow-inner text-sm p-2 bg-gray-300 ' placeholder="Restaurants and Cuisuines" />
        <Icon name='sliders' type='feather' color='black' />


      </View>
      </View>

      {/* Body */}
      <ScrollView className='px-2 py-2 bg-gray-100 mb-28' showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator ={false}>

      {/* Categories */}
      <Categories />

      {/* featuredcategories */}
      {
        featuredCategories?.map(category => 
          <FeaturedRow key={category._id} id={category._id} title={category.name} description={category.short_description} featuredCategory={category.name} restaurants={category.restaurant} />
        )
      }

      <Text className="px-4 m-3" >Join For More!</Text>

      </ScrollView>

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  )
}

export default HomeScreen