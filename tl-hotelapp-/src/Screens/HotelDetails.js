import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Picker,
  Modal,
  ImageBackground,
} from 'react-native';
import { Card } from 'react-native-paper';
import SwitchSelector from 'react-native-switch-selector';
import { firebase } from '../Firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import CalendarPicker from 'react-native-calendar-picker';
import hotelCard from '../img/HotelCard.jpg';
import roomDetails from '../img/Room_Details.jpg';

export default function Home({ navigation, route }) {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [noAdults, setNoAdults] = useState('');
  const [noKids, setNoKids] = useState('');
  const [noRooms, setNoRooms] = useState('');

  //---------Toggle buttons--------------Toggle buttons
  const options = [
    { label: 'Description', value: 'Description' },
    { label: 'Rooms ', value: 'Rooms' },
    { label: 'Book', value: 'Book' },
  ];

  //----------Set Toggle State--------Set Toggle State--------Set Toggle State
  const [Description, setDescription] = useState(true);
  const [Rooms, setRooms] = useState(false);
  const [Book, setBook] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  //-------------Toggle-------------Toggle-------------------
  const Check = (value) => {
    if (value == 'Description') {
      setDescription(true);
      setRooms(false);
      setBook(false);
    } else if (value == 'Rooms') {
      setRooms(true);
      setDescription(false);
      setBook(false);
    } else if (value == 'Book') {
      setBook(true);
      setDescription(false);
      setRooms(false);
    }
  };

  //--------Function Booking--------Function Booking-----------------------
  const [modalVisible, setModalVisible] = useState(false);
  const handleBooking = () => {
    firebase
      .firestore()
      .collection('Bookings')
      .add({
        id: route.params.id,
        email: email,
        dateIn: startDate,
        dateOut: endDate,
        noAdults: noAdults,
        noKids: noKids,
        noRooms: noRooms,
      })

      .then(() => {
        setModalVisible(true);
      })
      .catch((error) => {
        alert('Fill in all fields: ');
      });
  };

  const [selectedAdults, setSelectedAdults] = useState('No. of Adults');
  const [selectedKids, setSelectedKids] = useState('No. of Kids');
  const [selectedRooms, setSelectedRooms] = useState('No. of Rooms');

  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';

  const onDateChange = (date) => {
    {
      startDate == '' ? setSelectedStartDate(date) : setSelectedEndDate(date);
    }
  };

  const [visibleStatusBar, setVisibleStatusBar] = useState(false);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: 315, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          {/*<Text>---------------------RoomImg--------------RoomImg-----------------------</Text>*/}

          <View style={{ alignItems: 'center' }}>
            <Image source={route.params.roomIMG} style={styles.itemRoom} />

            <View
              style={{
                marginLeft: 10,
              }}>
              <Image
                source={require('../img/RoomPrice.jpg')}
                style={{ height: 100, width: 295 }}
              />
            </View>

            <View
              style={{
                width: 330,
                alignItems:'center'
              }}>

              <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                <Image source={require('../img/btnBook.jpg')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../img/RoomDetails.png')}
                style={{ height: 212, width: 240 }}
              />
            </View>

            <View>
              <Image
                source={require('../img/RoomRating.jpg')}
                style={{ marginLeft: 10 }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  sectionHeader: {
    fontWeight: 200,
    fontSize: 18,
    color: '#000',
    paddingTop: 20,
    paddingLeft: 10,
  },

  itemRoom: {
    height: 240,
    width: 315,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
