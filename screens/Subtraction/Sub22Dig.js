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
  TextInput,
  AppLoading,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Sub22 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: Math.floor(Math.random() * 100),
      b: Math.floor(Math.random() * 100),
      t: '',
      g: '',
      ans: '',
    };
  }

  check = () => {
    var l = this.state.a - this.state.b;
    if (this.state.ans === l.toString()) {
      this.setState({
        t: "👍 Great! That's the right answer 😊",
        g: 'https://giphy.com/embed/l41YmQjOz9qg2Ecow',
      });
    } else if (this.state.ans === '') {
      this.setState({
        t: 'Please enter the answer',
        g: 'https://giphy.com/embed/Vh8CtRftGFvea47EOQ',
      });
    } else {
      this.setState({
        t: '❌OOPS! Better Luck Next time.☹️ The correct answer is ' + l,
        g: 'https://giphy.com/embed/Bjh3pSRGX9rOg',
      });
    }
  };

  render() {
    if (this.state.a <= this.state.b) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <Text style={styles.ttxt}>Subtraction</Text>
          <View style={styles.qb}>
            <Text style={styles.qt}>
              {this.state.a} - {this.state.b} = ?
            </Text>
          </View>
          <TextInput
            style={styles.tInput}
            placeholder="Enter your answer here"
            onChangeText={(text) => this.setState({ ans: text })}
            value={this.state.ans}></TextInput>
          <Text style={styles.ct}> {this.state.t} </Text>
          <iframe
            src={this.state.g}
            width="48*1.7"
            height="32.9*1.7"
            frameBorder="1"
            class="giphy-embed"
            allowFullScreen></iframe>

          <View style={styles.bView}>
            <TouchableOpacity style={styles.sb} onPress={this.check}>
              <Text style={styles.bt}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sb}
              onPress={() => {
                if (this.state.ans === '') {
                  this.setState({
                    t: 'Please enter the answer',
                    g: 'https://giphy.com/embed/Vh8CtRftGFvea47EOQ',
                  });
                } else {
                  this.setState({
                    t: '',
                    g: '',
                    ans: '',
                    a: Math.floor(Math.random() * 100),
                    b: Math.floor(Math.random() * 100),
                  });
                }
              }}>
              <Text style={styles.bt}>Next</Text>
            </TouchableOpacity>
          </View>
          <Button
            width="10%"
            color="red"
            style={{ padding: 20, borderRadius: 30 }}
            onPress={() => this.props.navigation.navigate('Sub')}
            title=" Back"
          />
        </View>
      );
    }
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
  tInput: {
    padding: 18,
    textAlign: 'center',
    backgroundColor: '#e089a6',
    fontFamily: 'georgia',
    fontWeight: 'bold',
    color: '#75092e',
    margin: 23,
    width: '90%',
  },
  bView: {
    flex: 0.8,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },
  qb: {
    width: '90%',
    backgroundColor: '#cfa6f7',
    marginTop: -22,
    margin: 23,
    padding: 23,
    borderRadius: 10,
  },
  sb: {
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#cf26f7',
    margin: 21,
    padding: 23,
    borderRadius: 10,
  },
  qt: {
    textAlign: 'center',
    color: '#461b63',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    fontSize: RFValue(19),
  },
  bt: {
    textAlign: 'center',
    color: '#faaae7',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    fontSize: RFValue(16),
  },
  ct: {
    textAlign: 'center',
    color: '#c47eed',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    fontSize: RFValue(16),
  },
});
