import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { ScrollView, Text } from 'react-native'
import sanityClient from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    sanityClient.fetch(`
      *[_type=="category"]{
        ...,
        "imageUrl": image.asset->url, 
      }
    
    `).then(data => {
      setCategories(data);
    })

  }, []);

  // console.log(categories);


  return (
    <ScrollView horizontal>

      {
        categories.map(category =><CategoryCard key={category._id}  title={category.name} imgUrl={category.imageUrl} />)
      }

    </ScrollView>
  )
}

export default Categories