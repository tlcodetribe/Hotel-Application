import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-paper';

export const ListItem = () => {
  const [hotels, setHotels] = useState([]);

  const listItem = ({ item }) => {
    <View //style={styles.item}
    >
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            //navigation.navigate('HotelDetails', item);
          }}>
          <Image
            source={item.image} //style={styles.itemPhoto}
          />
        </TouchableOpacity>

        <View>
          <Text //style={styles.itemName}
          >
            {item.hotelName.toUpperCase()}
          </Text>
          <Text //style={styles.itemPrice}
          >
            {item.Price}
          </Text>
          <Text //style={styles.itemLocation}
          >
            {item.Location}
          </Text>
        </View>
      </View>
    </View>;
  };

  const ItemSeperatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
      />
    );
  };

  return (
    /*------------------Hotels----------Hotels-----------------------*/
    <View>
      <Card style={{ marginTop: 20 }}>
        <Text 
        >
          {' '}
          Popular Hotels{' '} 
        </Text>

        <SafeAreaView>
          <ScrollView
            style={{ height: 495 }}
            showsVerticalScrollIndicator={false}>
            {/*----------hotel list----------hotel list-------------hotel list---------*/}

            <FlatList
              data={hotels}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeperatorView}
              renderItem={listItem}
            />
          </ScrollView>
        </SafeAreaView>
      </Card>
    </View>
  );
};
