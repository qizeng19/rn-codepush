/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CodepushManager from './codepushManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: "red",
  };
  async function getdata() {
    const data =  await AsyncStorage.getItem("MyApp::IS_BETA_TESTER") || ""
    Alert.alert(data || "没有数据a..");
  }
  getdata()
  return (
    <>
      <View style={backgroundStyle}>
        <Text onPress={() => {
          AsyncStorage.setItem('MyApp::IS_BETA_TESTER', 'true');
          Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }}>发布了一个staging~~~~</Text>
      </View>
      <Button
        onPress={() => {
          AsyncStorage.setItem('MyApp::IS_BETA_TESTER', 'true');
          Alert.alert('你点击了按钮！');
        }}
        title="点我！"
      />
      <CodepushManager />
    </>

  );
}

const styles = StyleSheet.create({
});

export default App;
