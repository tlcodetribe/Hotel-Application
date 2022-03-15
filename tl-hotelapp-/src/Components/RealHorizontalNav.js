 import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { firebase } from '../Firebase/firebase';
import vacate from '../img/EastLondon.jpg';
import hotelCard from '../img/HotelCard.jpg';

export function HorizonScroll() {

    const [hotels, setHotels] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const ItemSeperatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
      />
    );
  };

  const bottomList = ({ item }) => (
    <View style={{ margin: 5 }}>
      <ImageBackground
        source={hotelCard}
        style={{
          flexDirection: 'row',
          height: 125,
          width: '100%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Image source={item.image} style={styles.bottomImg} />
        </TouchableOpacity>

        <View>
          <Text style={styles.itemName}>{item.hotelName.toUpperCase()}</Text>
          <Text style={styles.itemPrice}>{item.Price}</Text>
          <Text style={styles.itemLocation}>{item.Location}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (

 
          <View style={styles.scrollContainer}
          >
            <View style={{ flexDirection: 'row', margin: 5, width: 290 }}>
              <Text style={styles.sectionHeader}>Top Hotels </Text>
              <Text style={{ paddingRight: 'right' }}>show all</Text>
            </View>

           /<SafeAreaView>
              <ScrollView style={{ width: 305 }}>
                <View>
                  <View
                    style={{
                      height: 0.5,
                      width: '100%',
                      backgroundColor: '#c8c8c8',
                    }}
                  />
                  <FlatList
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeperatorView}
                    renderItem={bottomList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
        )
  }

  const styles = StyleSheet.create({
    sectionHeader: {
    paddingLeft: 12,
    paddingTop: 20,
    fontWeight: 'medium',
    fontSize: 18,
    color: '#000',
  },

  itemName: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: '400',
    color: 'skyblue',
    maxWidth: 75,
  },

  itemPrice: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4ea832',
    maxWidth: 98,
    opacity: 0.7,
  },

  itemLocation: {
    paddingTop: 5,
    fontSize: 12,
    maxWidth: 98,
  },


  bottomImg: {
    height: 85,
    width: 110,
    margin: 10,
  },

  scrollContainer: {
    borderTopWidth: 1,
    borderColor: 'silver',
    alignItems: 'baseleine',
  },
  })