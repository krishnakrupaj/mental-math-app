import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class OpSelect extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.vt}>
          <Text style={styles.tTxt}>MENTAL MATH APP</Text>
          <Image
            source={require('../assets/m.png')}
            style={{ width: 50, height: 50,padding:22 }}
          />
        </View>
        <Text style={styles.inst}>Choose the operation to start working..</Text>

        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Add');
            }}
            style={styles.b}>
            {' '}
            <Text style={styles.btx}>ADDITION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Sub');
            }}
            style={styles.b}>
            <Text style={styles.btx}>SUBTRCTION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Mtp');
            }}
            style={styles.b}>
            {' '}
            <Text style={styles.btx}>MULTIPLICATION</Text>
          </TouchableOpacity>
          <Button
            color="green"
            onPress={() => this.props.navigation.navigate('Home')}
            title=" Back Home "
          />
        </View>
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
  vt: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ff6699',
    padding:22,
  },
  inst: {
    margin:12,
    padding: 18,
    textAlign: 'center',
    backgroundColor: '#e089a6',
    fontFamily: 'georgia',
    fontWeight: 'bold',
    color: '#75092e',
    width: '100%',
  },
  tTxt: {
    fontFamily: 'georgia',
    fontWeight: 'bold',
    fontSize: RFValue(23),
    color: '#380259',
  },
});
