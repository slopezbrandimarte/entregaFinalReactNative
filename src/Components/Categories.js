import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../app/services/shopServices'

import ErrorCategories from './ErrorCategories'
import LoadingSpinner from './LoadingSpinner'



const Categories = ({navigation,route}) => {
  const {data:categories,isError,isLoading} = useGetCategoriesQuery()
  if(isLoading){
    return <LoadingSpinner/>
  }
  if(isError){
    return <ErrorCategories/>
  }

  return (
    <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem  category={item} navigation={navigation} route={route}/>}
    />
  )
}

export default Categories

