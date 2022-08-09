import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Subtraction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Text style={styles.ttxt}>Subtraction</Text>
        <TouchableOpacity
          style={styles.b}
          onPress={() => {
            this.props.navigation.navigate('S21');
          }}>
          <Text style={styles.btx}>2 digit to 1 digit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.b}
          onPress={() => {
            this.props.navigation.navigate('S22');
          }}>
          <Text style={styles.btx}>2 digit to 2 digit</Text>
        </TouchableOpacity>
        <Button
          color="green"
          onPress={() => this.props.navigation.navigate('test')}
          title=" Back to Main Menu "
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  ttxt: {
    color: 'white',
    fontSize: RFValue(40),
    paddingBottom: 50,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  inst: {
    padding: 18,
    textAlign: 'center',
    backgroundColor: '#e089a6',
    fontFamily: 'georgia',
    fontWeight: 'bold',
    color: '#75092e',
    width: '100%',
  },
  b: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#cfa6f7',
    margin: 23,
    padding: 23,
    borderBottomLeftRadius: 39,
    borderTopRightRadius: 39,
  },
  btx: {
    textAlign: 'center',
    color: '#461b63',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    fontSize: RFValue(19),
  },
});
