/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Resturant Item */}
      <View style={styles.resturantContainer}>
        <Image source={require('./assets/uberimage/restaurant1.jpeg')}
          style={styles.image}/>
          <Text style={styles.title}>El Cabo Coffe Bar Tress Se May</Text>
          <Text style={styles.subTitle}>$ 1.99 15-30 minutes</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  resturantContainer:{
    width: '100%',
  },
  image:{
    width: '100%',
    height: '30%',
    marginBottom: 5,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginVertica: 5,
  },
  subTitle:{
    color: 'grey',
  },
});