import React,{ useCallback, useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Dimensions, View, StatusBar, FlatList,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import OnboardingSlide from '../components/OnboardingSlide';
import { AuthContext } from '../contexts/AuthContext';

import BigButton from '../components/BigButton'
import { useContext } from 'react'

const {width, height} = Dimensions.get('window');

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5' }

const slides =[
    {
        id: 0,
        image: require('../assets/images/onboarding1.png'),
        title: 'Customize Your Meal',
        subtitle:'Customize your order from the best local restaurants with ease.'
    },
    {
        id: 1,
        image: require('../assets/images/onboarding2.png'),
        title: 'Easy Payment',
        subtitle:'Experience secured, swift and stress free payment method and process.'
    },
    {
        id: 2,
        image: require('../assets/images/onboarding3.png'),
        title: 'Track Your Delivery',
        subtitle:'Sit back and relax while we take care of the rest. Track your order in real time from preparation to delivery.'
    }
]

const OnboardingScreen =() => {
    const imageRef = useRef();
    const [active, setActive] = useState(0);
    const indexRef = useRef(active);
    indexRef.current = active;
    const onNavigate = useNavigation();

    const onNavigationWelcome = () => {
        onNavigate.navigate("WelcomeScreen");
    };
    const onNavigationHome = () => {
        onNavigate.navigate('MainScreens', { screen: 'BottomTabScreens' });
    }
    useInterval(() => {
        if (active < Number(slides?.length) - 1) {
            setActive(active + 1);
        } else {
            setActive(0);
        }
    }, 4000);

    useEffect(() => {
        imageRef.current.scrollToIndex({ index: active, animated: true });
    }, [active]);

    const viewabilityConfigCallbackPairs = useRef([
        { onViewableItemsChanged },
      ]);
    const onViewableItemsChanged = (
        ({ viewableItems, changed }) => {
            if (active != 0) {
                setActive(viewableItems[0].index);
            }
        },
        []
    );
    return(
        <SafeAreaView style ={{flex: 1, backgroundColor:COLORS.bgPrimary}}>
           <FlatList
                data= {slides}
                contentContainerStyle={{height: height * 0.75, paddingTop:height*0.1}}
                horizontal
                pagingEnabled   
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                }}   
                ref={imageRef}          
                showsHorizontalScrollIndicator= {false}
                scrollToEnd
                renderItem={({item}) => <OnboardingSlide item ={item}/>

                }
            />
            <View style={{marginBottom:40, paddingHorizontal:24,width:'100%', flexDirection:'column'}}>
                <TouchableOpacity onPress={() => onNavigationWelcome()} >
                    <View style={{backgroundColor:COLORS.btnPrimary, borderRadius:8, justifyContent:'center',height:56}}>
                        <Text style={{color:COLORS.primary, textAlign:'center', fontSize:18, fontFamily:'Poppins_500Medium'}}>
                            Get Started
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigationHome()} >
                    <View style={{marginTop:12}}>
                        <Text style={{color:COLORS.primary, textAlign:'center', fontSize:14, fontFamily:'Poppins_400Regular'}}>
                            Continue as Guest
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        
        </SafeAreaView>
    )
}
export default OnboardingScreen;

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};