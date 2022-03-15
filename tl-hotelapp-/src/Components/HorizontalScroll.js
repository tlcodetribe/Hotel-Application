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
} from 'react-native';
import { Card } from 'react-native-paper';

<View style={styles.scrollContainer}>
  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.sectionHeader}>Top Hotels </Text>
    <Text style={{ paddingTop: 24, paddingLeft: '50%' }}>show all</Text>
  </View>

  <View style={{ flexDirection: 'row', width: 305, marginLeft: 5 }}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <TouchableOpacity style={[styles.shadowProp, styles.bottomCard]}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 90,
              height: 60,
              margin: 8,
              backgroundColor: 'blue',
            }}></View>

          <View style={{ paddingTop: 5 }}>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.shadowProp, styles.bottomCards]}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 90,
              height: 60,
              margin: 8,
              backgroundColor: 'blue',
            }}></View>

          <View style={{ paddingTop: 5 }}>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.shadowProp, styles.bottomCards]}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 90,
              height: 60,
              margin: 8,
              backgroundColor: 'blue',
            }}></View>

          <View style={{ paddingTop: 5 }}>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.shadowProp, styles.bottomCards]}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 90,
              height: 60,
              margin: 8,
              backgroundColor: 'blue',
            }}></View>

          <View style={{ paddingTop: 5 }}>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.shadowProp, styles.bottomCards]}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 90,
              height: 60,
              margin: 8,
              backgroundColor: 'blue',
            }}></View>

          <View style={{ paddingTop: 5 }}>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.shadowProp, styles.bottomCards]}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 90,
              height: 60,
              margin: 8,
              backgroundColor: 'blue',
            }}></View>

          <View style={{ paddingTop: 5 }}>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.shadowProp, styles.bottomCards]}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 90,
              height: 60,
              margin: 8,
              backgroundColor: 'blue',
            }}></View>

          <View style={{ paddingTop: 5 }}>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.shadowProp, styles.bottomCards]}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 90,
              height: 60,
              margin: 8,
              backgroundColor: 'blue',
            }}></View>

          <View style={{ paddingTop: 5 }}>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
            <Text>fhfhtfhv</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
</View>;

const styles = StyleSheet.create({
  scrollContainer: {
    height: 170,
    width: 335,
    borderWidth: 1,
    borderColor: 'silver',
  },

  shadowProp: {
    shadowColor: 'turquoise',
    borderWidth: 0.5,
    borderColor: 'silver',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  sectionHeader: {
    fontWeight: 'medium',
    fontSize: 18,
    color: '#000',
    paddingTop: 20,
    paddingLeft: 5,
  },

  bottomCards: {
    marginTop: 10,
    marginLeft: 10,
    height: 100,
    width: 185,
    borderRadius: 15,
    transform: [{ rotate: '40deg' }],
  },

  bottomCard: {
    marginTop: 10,
    height: 100,
    width: 185,
    borderRadius: 15,
  },
});
