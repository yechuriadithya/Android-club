import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';

const HomeScreen = () => {
  const [backgroundColor,setBackgroundcolor]=useState("yellow");

  const HandleColorChange=()=>{
    const newcolor=backgroundColor==='red'?'blue':'red';
    setBackgroundcolor(newcolor);
  }
  const handleExploreDocs = () => {
    Linking.openURL('https://reactnative.dev/docs/getting-started');
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}> React Native Application</Text>
      <Text style={styles.name}>Y.Adithya</Text>
      <Text style={styles.name}>22MIS1107</Text>
      <View style={styles.buttonContainer}>
        <Button title="Check Docs" onPress={handleExploreDocs} />
        <Button title="Check color" onPress={HandleColorChange}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    marginBottom: 15,
  },
  buttonContainer: {
    width: '50%',
  },
});

export default HomeScreen;
