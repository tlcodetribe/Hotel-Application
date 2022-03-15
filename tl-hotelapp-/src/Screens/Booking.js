import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  ImageBackground,
KeyboardAvoidingView
} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import headImg from '../img/Hotel_Pool.jpg';
import heading from '../img/Vacation_Hub.png';
import btnLogIn from '../img/btnLogIn.png';
import txtLogIn from '../img/LogIn.png';
import txtForgot from '../img/Forgot_Password_.png';
import txtSignUp from '../img/Sign_Up.png';
import { firebase } from '../Firebase/firebase';

export default function Booking({ navigation }) {

  const [booked, setBooked] = useState(''),
  [email, setEmail] = useState(''),
  [name, setName] = useState(''),
  [surname, setSurname] = useState(''),
  [arrival, setArrival] = useState(''),
  [depature, setDepature] = useState(''),
  [adults, setAdults] = useState(''),
  [kids, setKids] = useState('')
  
  function Book() {
   firebase.firestore().collection("Bookings").add({
     name:name,
     email:email ,
     surname:surname,
     arrival:arrival,
     depature:depature,
     adults:adults,
     kids: kids
   }).then(()=>{
     alert('Booked successfully')
   }).catch(()=>{
     alert('Please fill in all fields')
   })
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.phone}>

        <Text style={{fontSize:30, color:'turquoise'}}> {`Book Now`}</Text>
         
         <Card style={styles.txtCard}>          
              <TextInput
                style={styles.txtField}
                name="email"
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
          </Card>

          <Card style={styles.txtCard}>
              <TextInput
                style={styles.txtField}
                name="name"
                placeholder="Name"
                secureTextEntry={true}
                onChangeText={(text) => {
                  setName(text);
                }}
              />
          </Card>

          <Card style={styles.txtCard}>
              <TextInput
                style={styles.txtField}
                name="surname"
                placeholder="Surname"
                onChangeText={(text) => {
                  setSurname(text);
                }}
              />
          </Card>

          <Card style={styles.txtCard}>
              <TextInput
                style={styles.txtField}
                name="kids"
                placeholder="No. of Kids"
                onChangeText={(text) => {
                  setKids(text);
                }}
              />
          </Card>

          <Card style={styles.txtCard}>
              <TextInput
                style={styles.txtField}
                name="departure"
                placeholder="No. of Adults"
                onChangeText={(text) => {
                  setAdults(text);
                }}
              />
          </Card>

          <Card style={styles.txtCard}>
              <TextInput
                style={styles.txtField}
                name="arrival"
                placeholder="Arrival"
                onChangeText={(text) => {
                  setArrival(text);
                }}
              />
          </Card>

          <Card style={styles.txtCard}>
              <TextInput
                style={styles.txtField}
                name="departure"
                placeholder="Departure"
                onChangeText={(text) => {
                  setDepature(text);
                }}
              />
          </Card>

          <View>
            <TouchableOpacity onPress={Book}
              style={{marginTop:35, height:35, width:185, borderRadius:25, backgroundColor:'turquoise', alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:'#fff'}}>{`BOOK`}</Text>
            </TouchableOpacity>
          </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
  },

  phone: {
    height: 536,
    alignItems: 'center',
  },

  txtField: {
    padding: 17,
    width: 265,
    height: 25,
    borderRadius: 30,
    color:'black',
    outlineColor: 'transparent',
  },

  txtCard: {
    marginTop: 30,
    width: 270,
    height: 38,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'turquoise',
  },

});

