import React , {useState} from 'react';
import {Pressable, Alert, View , Image, Text, StyleSheet, TextInput } from 'react-native';
import { validateEmail } from './../utils/index';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email , setEmail] = useState('')
  const [isDisabled , setIsDisabled] = useState(true);
  const handleInputChange = (text) => {
    setEmail(text);
    if(validateEmail(email)) {
    setIsDisabled(text === '') ;
  }
}

  const handButtonPressed =() => {
    Alert.alert("Thanks for subscribing stay tuned!")
  }
  return (
    <View style={styles.container}>
      <Image style= {styles.image}source={require("../assets/little-lemon-logo-grey.png")} />
      <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes! </Text>
      <TextInput
        value={email}
        onChangeText={handleInputChange} 
        style={styles.txtInput}
        placeholder="Type your email" 
        keyboardType='email-address'
      />
      <Pressable 
        style={({pressed}) => [{backgroundColor: pressed ? 'green' : 'gray' , 
        marginTop: 20 ,
        borderRadius: 10}]}
        disabled={isDisabled}
        onPress= {handButtonPressed}>
       <Text style={[styles.btnText]}>
            Subscribe
          </Text>
      </Pressable>
  </View>
  );
  }

const styles=StyleSheet.create({
container: {
      flex: 1 ,
      paddingTop : 90,
      paddingLeft: 20,
      margin: 10,
  },
  image: {
    resizeMode: 'contain',
    height: 100,
    width: 300,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 30,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    paddingLeft: 5,
    borderRadius: 10
  },
  btnText: {
    borderWidth: 1,
    color: 'white',
    borderRadius: 10,
    fontSize: 25,
    textAlign: 'center',
  }

});

export default SubscribeScreen ;
