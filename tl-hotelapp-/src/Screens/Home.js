import React, { useState, useEffect } from 'react';
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
  Platform,
  Animated
} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons';
import { firebase } from '../Firebase/firebase';
import vacate from '../img/EastLondon.jpg';
import hotelCard from '../img/HotelCard.jpg';

export default function Home({ navigation }) {
  const [searchData, setSearchData] = useState('');
  const [hotels, setHotels] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [visibleStatusBar, setVisibleStatusBar] = useState(false);

  //-------Set Hotels State-------Set Hotels State----------------------
  useEffect(() => {
    firebase
      .firestore()
      .collection('Hotels')
      .onSnapshot((snapshot) => {
        const hotelsData = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setHotels(hotelsData);
        setFilteredData(hotelsData);
        console.log(hotelsData);
      });
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = hotels.filter((item) => {
        const itemData = item.hotelName
          ? item.hotelName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchData(text);
    } else {
      setFilteredData(hotels);
      setSearchData(text);
    }
  };

  //--------Hotels List---------Hotels List------------
  const listItem = ({ item }) => (
    <View style={styles.item}>
      <ImageBackground
        source={hotelCard}
        style={{
          flexDirection: 'row',
          height: 130,  
          width: 300,
          alignSelf: 'center', 
        }}>
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate('HotelDetails', item);
          }}>
          <Image source={item.roomIMG} style={styles.itemPhoto} />
        </TouchableOpacity> 

        <View>
          <Text style={styles.itemName}>{item.hotelName.toUpperCase()}</Text>
          <Text style={styles.itemPrice}>{item.Price}</Text>
          <Text style={styles.itemLocation}>{item.Location}</Text>

          <View style={{flexDirection:'row'}}>
          <FontAwesome
                name="star"  
                size={15}
                color="orange"
                style={{ marginTop: 5}}
              />
              <FontAwesome
                name="star" 
                size={15}
                color="orange"
                style={{ marginTop: 5}}
              />
              <FontAwesome
                name="star" 
                size={15}
                color="orange"
                style={{ marginTop: 5}}
              />
              <FontAwesome
                name="star" 
                size={15}
                color="orange"
                style={{ marginTop: 5}}
              />
              <FontAwesome
                name="star" 
                size={15}
                color="grey"
                style={{ marginTop: 5}}
              />
              </View>

        </View>
      </ImageBackground>
    </View>
  );

  const ItemSeperatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: 315, backgroundColor: '#c8c8c8' }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.phone}>
        
        <ImageBackground
          source={vacate}
          style={{
            height: 100, 
            width: 327, 
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          {/*----Search-----Search------Search---------Search*/}
          <Card style={[styles.txtSearch, styles.shadowProp]}>
            <View style={{ margin: 5, flexDirection: 'row' }}>
              <FontAwesome
                name="search" 
                size={20}
                color="black"
                style={{ marginTop: 5, marginLeft: 15 }}
              />

              <TextInput
                style={styles.inpSearch}
                value={searchData}
                placeholder="Search"
                underlineColorAndroid="transparent"
                onChangeText={(text) => searchFilter(text)}
              />
            </View>
          </Card>
        </ImageBackground>

        <ItemSeperatorView />   

          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}
                        style={{ height: 550, marginTop:25 }}
            >
              {/*----------hotel Flatlist---------hotel Flatlist----*/}
              <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeperatorView}
                renderItem={listItem}
                
              />
            </ScrollView> 
          </SafeAreaView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  phone: {
    width:'100%',
    justifyContent: 'center',
  },

  txtSearch: {
    marginTop: 10,
    alignSelf: 'center',
    width: 280,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'turquoise',
  },

  inpSearch: {
    padding: 15,
    width: 275,
    height: 20,
    borderRadius: 30,
    outlineColor: 'transparent',
  },

  item: {
    marginTop: 10,
  },

  itemPhoto: {
    width: 185,
    height: 105,
    margin: 8,
  },

  itemName: {
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

});
