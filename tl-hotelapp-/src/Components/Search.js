import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export const Search = () => {
  const [searchData, setSearchData] = useState('');
  const [hotels, setHotel] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

  return (
    /**----Search-----Search------Search---------Search---*/
    <Card style={[styles.txtSearch, styles.shadowProp]}>
      <View style={{ flexDirection: 'row' }}>
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
  );
};

const styles = StyleSheet.create({

txtSearch: {
    marginTop: 40,
    marginLeft: 10,
    width: 280,
    height: 38,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'turquoise',
  },

  inpSearch: {
    padding: 15,
    width: 275,
    height: 25,
    borderRadius: 30,
    outline: 'none',
  },

  shadowProp: {
    shadowColor: 'turquoise',
    borderWidth: 0.5,
    borderColor: 'silver',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
})
