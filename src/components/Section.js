import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import React from "react";

const Section = ({ onPress, title, view, myStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom:16,
        ...myStyle,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={{ justifyContent: "center",alignContent:'center', height:32}} onPress={onPress}>
        <Text style={styles.view}>{view}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Section;
const styles = StyleSheet.create({
    title:{
        fontFamily:'Poppins_500Medium',
        fontSize:16,
        lineHeight:24,
        color:"#00205c",
    },
    view:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:21,
        color:"#00205c", 
    }
})
