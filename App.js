import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
 
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
          <Text>React Native App</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
