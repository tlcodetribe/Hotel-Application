import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image, 
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-paper';
import { firebase } from '../Firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import headImg from '../img/Hotel_Pool.jpg';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [rePass, setRePass] = useState('');

  function resetPassword() {
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
                  email: email,
                })
                .then(() => {
                  setEmail(email);
                })
                .catch((error) => {
                  alert(error);
                });
              alert('User saved successfully');
              navigation.navigate('SignIn');
            })

            .catch((error) => {
              alert(error);
            })
        : alert("Passwords don't match");
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.shadowProp1}>
            <Image style={styles.logo} source={headImg} />
          </View>

          <View>
            <Text style={styles.header}>Reset Password</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Card style={[styles.txtCard1, styles.shadowProp1]}>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome
                  name="user"
                  size={20}
                  color="black"
                  style={{ marginTop: 10, marginLeft: 15 }}
                />
                <TextInput
                  style={styles.txtUser}
                  name="name"
                  placeholder="Username"
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
              </View>
            </Card>

            <Card style={[styles.txtCard1, styles.shadowProp1]}>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome
                  name="lock"
                  size={22}
                  color="black"
                  style={{ marginTop: 9, marginLeft: 15 }}
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

            <Card style={[styles.txtCard1, styles.shadowProp1]}>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome
                  name="lock"
                  size={22}
                  color="black"
                  style={{ marginTop: 9, marginLeft: 15 }}
                />

                <TextInput
                  style={styles.txtPass}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    setRePass(text);
                  }}
                />
              </View>
            </Card>
          </View>

          <View>
            <TouchableOpacity
              style={[styles.signUp, styles.shadowProp]}
              onPress={resetPassword}>
              <Text style={{ color: 'turquoise', fontWeight: 'bold' }}>
                Reset{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View //style={{ marginTop: 300 }}
            style={{ height: 30 }}></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  logo: {
    height: 220,
    width: 325,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  header: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'turquoise',
  },

  txtCard1: {
    backgroundColor: '#fff',
    marginTop: 20,
    width: 280,
    height: 38,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'turquoise',
  },

  txtUser: {
    padding: 15,
    width: 275,
    height: 25,
    borderRadius: 30,
    outline: 'none',
  },

  txtPass: {
    padding: 15,
    width: 350,
    height: 30,
    borderRadius: 30,
    borderColor: 'silver',
    outline: 'none',
  },

  shadowProp: {
    shadowColor: 'turquoise',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  shadowProp1: {
    shadowColor: 'turquoise',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },

  signUp: {
    backgroundColor: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 35,
    width: 180,
    height: 35,
    borderWidth: 2,
    borderColor: 'turquoise',
    borderRadius: 30,
    paddingTop: 7,
    fontSize: 16,
  },
});
