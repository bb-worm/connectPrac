import React from 'react';
import { StyleSheet, Text, View, PushNotificationIOS, Image } from 'react-native';

export default class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>꾸준히 함께 시작하기</Text>
        <Image style={{width:50, height:50}} source={{uri:"http://172.16.130.173:9000/users/mainImg"}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
