import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image style= {styles.image}source={require("../assets/little-lemon-logo.png")} />
      <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable style={{paddingTop: 100}} onPress= {() => navigation.navigate('Subscribe')}>
          <Text style={styles.btnText}>
            Newsletter
          </Text>
      </Pressable>
    </View>);
};

const styles= StyleSheet.create ({
  container: {
      flex: 1 ,
      paddingTop : 100,
      paddingLeft: 20,
      margin: 10,
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 300,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 30,
  },
  btnText: {
    borderWidth: 1,
    borderColor: 'green',
    color: 'black',
    backgroundColor: 'green',
    borderRadius: 10,
    fontSize: 25,
    textAlign: 'center',
    



  }



}) 

export default WelcomeScreen;
