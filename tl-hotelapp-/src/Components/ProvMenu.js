import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-paper';
import { Avatar, Badge } from 'react-native-elements';
import nc from '../img/NC.jpg';
import nw from '../img/NW.jpg';
import wc from '../img/WC.jpg';
import ingeliForest from '../img/Newstead.jpg';

export const ProvMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Card style={styles.menu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
          <View style={{ flexDirection: 'row' }}>
            
            <View style={{ marginLeft: 5 }}>
              <TouchableOpacity
                style={[{ textAlign: 'center' }, styles.shadowProp]}
                onPress={() => {
                  navigation.navigate('Province');
                }}>
                <Image style={styles.hotelNC} source={nc} />
              </TouchableOpacity>
              <Text>
                Northern
                <br />   Cape
              </Text>
            </View>

            <View style={{ marginLeft: 15, textAlign: 'center' }}>
              <TouchableOpacity
                style={styles.shadowProp}
                onPress={() => {
                  navigation.navigate('Province');
                }}>
                <Image style={styles.hotelNW} source={wc} />
              </TouchableOpacity>

              <Text>
                     North
                  <br /> West
                </Text>
            </View>

            <View style={{ marginLeft: 15, textAlign: 'center'  }}>
              <TouchableOpacity
                style={[{ textAlign: 'center' }, styles.shadowProp]}
                onPress={() => {
                  navigation.navigate('Province');
                }}>
                <Image style={styles.hotelNW} source={nw} />
              </TouchableOpacity>

              <Text>
                  Western
                  <br /> Cape
                </Text>
            </View>

            <View style={{ marginLeft: 15, textAlign: 'center'  }}>
              <TouchableOpacity
                style={[{ textAlign: 'center' }, styles.shadowProp]}
                onPress={() => {
                  navigation.navigate('Province');
                }}>
                <Image style={styles.hotelNW} source={ingeliForest} />
              </TouchableOpacity>

              <Text>
                  Kwazulu
                  <br /> Natal
              </Text>
            </View>

            <View style={{ marginLeft: 15 }}>
              <TouchableOpacity
                style={[{ textAlign: 'center' }, styles.shadowProp]}
                onPress={() => {
                  navigation.navigate('Province');
                }}>
                <Image style={styles.hotelNW} source={nw} />
              </TouchableOpacity>

              <Text>
                  Western
                  <br /> Cape
              </Text>
            </View>

            <View style={{ marginLeft: 15 }}>
              <TouchableOpacity
                style={{ textAlign: 'center' }}
                onPress={() => {
                  navigation.navigate('Province');
                }}>
                <Image style={styles.hotelNW} source={wc} />
                <Text>
                  Western
                  <br /> Cape
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 15 }}>
              <TouchableOpacity
                style={{ textAlign: 'center' }}
                onPress={() => {
                  navigation.navigate('Province');
                }}>
                <Image style={styles.hotelNW} source={nw} />
                <Text>
                  Western
                  <br /> Cape
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 15 }}>
              <TouchableOpacity
                style={{ textAlign: 'center' }}
                onPress={() => {
                  navigation.navigate('Province');
                }}>
                <Image style={styles.hotelNW} source={ingeliForest} />
                <Text>
                  Western
                  <br /> Cape
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    backgroundColor: 'lightGray',
    width: 290,
    height: 120,
    marginTop: 20,
  },

  hotelNC: {
    height: 80,
    width: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderLeftWidth: 4,
    borderColor: 'turquoise',
  },

  hotelNW: {
    height: 80,
    width: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderLeftWidth: 4,
    borderColor: 'turquoise',
  },

  shadowProp: {
    borderRadius: 20,
    shadowColor: 'turquoise',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
