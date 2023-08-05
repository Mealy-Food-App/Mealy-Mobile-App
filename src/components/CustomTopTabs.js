import React, {useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet,FlatList, ScrollView} from 'react-native'
import {orderHistories} from '../dummyData';
import OrderHistoryItem from "./OrderHistoryItem";

const orderHistoryItems = orderHistories.flatMap((history) => history.data);
const renderSeparator = () => {
  return (
    <View
      style={{
        width: "100%",
        height:1,
        backgroundColor: "#B8B5B5",
      }}
    />
  );
};

export const AllTab = () =>{
    return(
      <FlatList
      data={orderHistoryItems}
      keyExtractor={(item) => item.id}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 43,
      }}
      ItemSeparatorComponent={renderSeparator}
      renderItem={({ item, index }) => (
        <OrderHistoryItem
          marginTop={index === 0 ? 0 : 16}
          marginBottom={index === orderHistoryItems.length - 1 ? 0 : 16}
          data={item}
          onPressItem={() => onNavigation(item)}
        />
      )}
    />
    )
  }

const CustomTopTabs = ({props}) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabPress = (index) => {
      setActiveTab(index);
    };
  
    return (
        <View>
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                style={styles.tabItem}
                onPress={() => handleTabPress(0)}
                >
                <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>{props.title1}</Text>
                <View style={[styles.undeline, activeTab === 0 && styles.activeUndeline]}></View>
                </TouchableOpacity>
        
                <TouchableOpacity
                style={styles.tabItem}
                onPress={() => handleTabPress(1)}
                >
                <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>{props.title2}</Text>
                <View style={[styles.undeline, activeTab === 1 && styles.activeUndeline]}></View>
                </TouchableOpacity>
        
                <TouchableOpacity
                style={styles.tabItem}
                onPress={() => handleTabPress(2)}
                >
                <Text style={[styles.tabText, activeTab === 2 && styles.activeTabText]}>{props.title3}</Text>
                <View style={[styles.undeline, activeTab === 2 && styles.activeUndeline]}></View>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.tabItem}
                onPress={() => handleTabPress(3)}
                >
                <Text style={[styles.tabText, activeTab === 3 && styles.activeTabText]}>{props.title4}</Text>
                <View style={[styles.undeline, activeTab === 3 && styles.activeUndeline]}></View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {activeTab === 0 &&                
                    <AllTab/>
                
                }
            </ScrollView>

        </View>
    );
  };
  export default CustomTopTabs

  const styles = StyleSheet.create({
    tabsContainer: {
      flexDirection: 'row',
      gap:25,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      justifyContent:'space-evenly',
      marginTop:16
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabText: {
      fontSize: 14,
      fontFamily:'Poppins_500Medium',
      color: '#00205C',
      lineHeight:21
    },
    activeTabText:{
        fontSize: 14,
        fontFamily:'Poppins_600SemiBold',
        color: '#00205C',
        lineHeight:21,
        fontWeight:'600',
    },
    undeline:{
        height:4,
        backgroundColor:'#FFFFFF',
        width: '100%',
        marginTop:2,
    },
    activeUndeline:{
        height:4,
        backgroundColor:'#00205C',
        width: '100%',
        marginTop:2,
    }
  });
  
  