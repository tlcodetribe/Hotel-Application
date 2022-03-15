import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { Card } from 'react-native-paper';
import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import headImg from '../img/Hotel_Pool.jpg';
import heading from '../img/Vacation_Hub.png';

import signUp from '../img/btnTxtSignUp.png';
import btnSignUp from '../img/btnLogIn.png';

import { firebase } from '../Firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [rePass, setRePass] = useState('');

  function handleSignUp() {
    {
      password === rePass
        ? firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              firebase
                .firestore()
                .collection(email)
                .add({
                  name: name,
                  surname: surname,
                  email: email,
                })
                .then(() => {
                  setEmail(email);
                  alert('User saved successfully');
                })
                .catch((error) => {
                  alert(error);
                });

              navigation.navigate('SignIn');
            })

            .catch((error) => {
              name == '' || surname == ''
                ? alert('Fill in all fields!!!')
                : alert(error);
            })
        : alert("Passwords don't match");
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.phone}>
          <Image style={styles.logo} source={headImg} />

          <View style={{ marginTop: 20 }}>
            <Image source={heading} style={{ width: 175, height: 25 }} />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: 322 }}>
            <View>
              <Card style={styles.txtCard1}>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.txtUser}
                    name="name"
                    placeholder="Name"
                    onChangeText={(text) => {
                      setName(text);
                    }}
                  />
                </View>
              </Card>

              <Card style={styles.txtCard1}>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.txtUser}
                    name="surname"
                    placeholder="Surname"
                    onChangeText={(text) => {
                      setSurname(text);
                    }}
                  />
                </View>
              </Card>

              <Card style={styles.txtCard1}>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome
                    name="user"
                    size={18}
                    color="black"
                    style={{ marginTop: 5, marginLeft: 15 }}
                  />
                  <TextInput
                    style={styles.txtUser}
                    name="email"
                    placeholder="Username"
                    onChangeText={(text) => {
                      setEmail(text);
                    }}
                  />
                </View>
              </Card>

              <Card style={styles.txtCard1}>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome
                    name="lock"
                    size={20}
                    color="black"
                    style={{ marginTop: 6, marginLeft: 15 }}
                  />

                  <TextInput
                    style={styles.txtPass}
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      setPass(text);
                    }}
                  />
                </View>
              </Card>

              <Card style={styles.txtCard1}>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome
                    name="lock"
                    size={20}
                    color="black"
                    style={{ marginTop: 5, marginLeft: 15 }}
                  />

                  <TextInput
                    style={styles.txtPass}
                    name="password"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      setRePass(text);
                    }}
                  />
                </View>
              </Card>

              <View style={{ height: 30 }}></View>
            </View>
          </ScrollView>

          <View>
            <TouchableOpacity onPress={handleSignUp}>
              <ImageBackground
                source={btnSignUp}
                style={{
                  height: 40,
                  width: 200,
                  marginTop: 32,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={signUp} style={{ height: 23, width: 60 }} />
              </ImageBackground>
            </TouchableOpacity>

            <View style={{ height: 30 }}></View>
            
          </View>
        </View>
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
    width: 315,
    height: 536,
    alignItems: 'center',
  },

  logo: {
    height: 190,
    width: 315,
  },

  txtCard1: {
    marginTop: 30,
    width: 270,
    height: 38,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1DABE8',
  },

  txtUser: {
    paddingLeft: 15,
    width: 350,
    height: 30,
    borderRadius: 30,
    outline: 'none',
  },

  txtPass: {
    paddingLeft: 15,
    width: 350,
    height: 30,
    borderRadius: 30,
    borderColor: 'silver',
    outline: 'none',
  },
});
