import { StyleSheet, Text, View, StatusBar, FlatList} from 'react-native'
import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import CategoryScreenItem from '../components/CategoryScreenItem'
import ScreenHeader from '../components/ScreenHeader'
import { useNavigation} from '@react-navigation/native';


const AllCategoriesScreen = () => {
    const {categories} = useContext(ProductsContext);

  return (
    <View style={styles.container}>
        <ScreenHeader props={{title:'Categories'}}/>
        <FlatList
            style={{
              backgroundColor:'#F0F0F0',
              paddingVertical:4,
              paddingHorizontal:8,
              borderRadius:10,
              marginBottom:24
            }}
            data={categories}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => (
            <CategoryScreenItem
                key = {item._id}
                item={item}
                backgroundColor= "#ffffff"
                marginLeft={index % 3 === 0 ? 0 : 8}
                marginRight={index === categories.length - 1 ? 0 : 0}
                marginVertical ={4}
            />
            )}
        />
    </View>
  )
}

export default AllCategoriesScreen

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
})