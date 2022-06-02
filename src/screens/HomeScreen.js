import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import { freeGames, paidGames, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

const HomeScreen = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);


  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />
  };

  const onSelectSwitch = (value) => {
    setGamesTab(value)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, }}>
          <Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium', fontWeight: 'bold' }}>Hello, John Doe</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          borderColor: '#C6C6C6',
          borderWidth: 2,
          borderRadius: 9,
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5, marginTop: 12 }}
          />
          <TextInput placeholder='Search' />
        </View>

        <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', fontWeight: 'bold' }}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{ marginVertical: 20, }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free To Play"
            option2="Paid Games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              title={item.title}
              photo={item.poster}
              subtitle={item.subtitle}
              isFree={item.isFree}
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              title={item.title}
              photo={item.poster}
              subtitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen; 