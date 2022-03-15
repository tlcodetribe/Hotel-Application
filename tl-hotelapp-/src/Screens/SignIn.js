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

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const handleSignIn = () => {
    // email != '' || password != ''
    //   ? firebase
    //       .auth()
    //       .signInWithEmailAndPassword(email, password)
    //       .then(() => {
            //setModalVisible2(true);
            alert('Signed In');
            navigation.navigate('Home');
      //     })
      //     .catch((error) => {
      //       setModalVisible3(true);
      //       alert('Incorrect password');
      //     })
      // : setModalVisible(true);
    // alert('Fill in all fields');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.phone}>
        <Image style={styles.logo} source={headImg} />

        <View style={{ marginTop: 20 }}>
          <Image source={heading} style={{ width: 175, height: 25 }} />
        </View>

        

        <View style={{ marginTop: 5 }}>
          <Card style={styles.txtCard}>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome
                name="user"
                size={18}
                color="black"
                style={{ marginTop: 8, marginLeft: 18, opacity: 0.9 }}
              />
              <TextInput
                style={styles.txtUser}
                name="username"
                placeholder="Username"
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
            </View>
          </Card>

          <Card style={styles.txtCard}>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome
                name="lock"
                size={20}
                color="black"
                style={{ marginTop: 7, marginLeft: 18, opacity: 0.9 }}
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

          <View style={{ marginTop: 10, marginLeft: 140 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <Image
                source={txtForgot}
                style={{ height: 21, width: 115, marginTop: 5 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={handleSignIn}>
              <ImageBackground
                source={btnLogIn}
                style={{
                  height: 40,
                  width: 200,
                  marginTop: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={txtLogIn} style={{ height: 25, width: 50 }} />
              </ImageBackground>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>{`New User?`}</Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Image
                  source={txtSignUp}
                  style={{
                    height: 22,
                    width: 55,
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
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

  logo: {
    height: 190,
    width: 320,
  },

  txtCard: {
    marginTop: 30,
    width: 270,
    height: 38,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1DABE8',
  },

  txtUser: {
    padding: 17,
    width: 265,
    height: 25,
    borderRadius: 30,
    color:'black',
    outlineColor: 'transparent',
  },

  txtPass: {
    padding: 17,
    height: 30,
    borderRadius: 30,
    borderColor: 'silver',
    outlineColor: 'transparent',
  },
});

