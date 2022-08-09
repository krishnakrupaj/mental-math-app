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
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Image
          source={require('../assets/m.png')}
          style={{
            width: '43%',
            height: '25%',
            borderWidth: 1,
            borderRadius: 70,
            borderColor: 'darkblue',
          }}
        />
        <Text style={styles.ttxt}>Mental Math App </Text>
        <TouchableOpacity
          style={styles.go}
          onPress={() => this.props.navigation.navigate('test')}>
          <Text style={styles.goT}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 111,
    borderTopStartRadius: 111,
    borderTopWidth: 22,
    borderBottomWidth: 22,
    borderColor: '#f23fbf',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  ttxt: {
    color: 'white',
    fontSize: RFValue(50),
    paddingBottom: 50,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  go: {
    backgroundColor: '#79d6f7',
    padding: 30,
    borderBottomColor: '#25709c',
    borderBottomWidth: 9,
    borderRadius: 40,
  },
  goT: {
    fontSize: RFValue(36),
    fontWeight: 'bold',
    fontFamily: 'TimesNewRoman',
  },
});
